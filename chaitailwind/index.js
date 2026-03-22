import { getStyles, propertiesMap } from "./propertiesMap.js";

const breakpoints = {
    'sm': 640,
    'md': 768,
    'lg': 1024,
    'xl': 1280
};

// Use a WeakMap to track elements and their original chai classes for responsiveness
const elementRegistry = new WeakMap();

window.onload = function () {
    try {
        chaiTailwindInit();
        window.addEventListener('resize', () => {
            applyAllStyles();
        });
    } catch (error) {
        console.error("Chai Tailwind Error:", error);
    }
}

function chaiTailwindInit() {
    console.log("Chai Tailwind Init");

    // Apply Default Styles
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./chaitailwind/default.css";
    document.head.appendChild(link);
    
    // Scan all elements and register those with chai classes
    const allElements = document.querySelectorAll("*");
    allElements.forEach(element => {
        const chaiClasses = Array.from(element.classList).filter(c => c.includes("chai-"));
        if (chaiClasses.length > 0) {
            elementRegistry.set(element, chaiClasses);
            // We can optionally remove them from the DOM here to satisfy the requirement
            // but we keep them in our registry for responsiveness
            chaiClasses.forEach(c => element.classList.remove(c));
        }
    });

    applyAllStyles();
}

function applyAllStyles() {
    const width = window.innerWidth;
    console.log(`Applying Chai styles at width: ${width}`);
    
    const elements = document.querySelectorAll("*");
    elements.forEach(element => {
        let classes = elementRegistry.get(element);
        
        if (!classes) {
            classes = Array.from(element.classList).filter(c => c.includes("chai-"));
            if (classes.length > 0) {
                elementRegistry.set(element, classes);
                classes.forEach(c => element.classList.remove(c));
            } else {
                return;
            }
        }

        // We only clear if we are about to re-apply
        element.style.cssText = ""; 

        // Sort classes so that base classes are applied first, then responsive ones by breakpoint size
        const sortedClasses = [...classes].sort((a, b) => {
            const getBp = (c) => {
                const parts = c.split(':');
                if (parts.length === 1) return -1;
                return breakpoints[parts[0]] || 0;
            }
            return getBp(a) - getBp(b);
        });

        if (sortedClasses.length > 0) {
            console.log(`Applying ${sortedClasses.length} styles to`, element, `at width ${width}`);
        }

        sortedClasses.forEach(className => {
            let utility = className;
            let breakpointMatch = true;

            // Handle Responsive Prefix (e.g., md:)
            if (className.includes(':') && !className.includes('hover:')) {
                const [bp, util] = className.split(':');
                utility = util;
                breakpointMatch = width >= (breakpoints[bp] || 0);
            }

            // Handle Hover Prefix (e.g., hover:)
            if (className.includes('hover:')) {
                const hoverUtility = className.split('hover:')[1];
                if (!element.dataset.chaiHoverRegistered) {
                    element.style.transition = "all 0.2s ease-in-out"; // Force transition
                    element.addEventListener('mouseenter', () => {
                        console.log("Hover Enter:", hoverUtility);
                        applySingleStyle(element, hoverUtility);
                    });
                    element.addEventListener('mouseleave', () => {
                        console.log("Hover Leave - Re-applying base styles");
                        applyAllStyles(); // Re-apply base/responsive styles
                    });
                    element.dataset.chaiHoverRegistered = "true";
                }
                return;
            }

            if (!breakpointMatch) return;
            applySingleStyle(element, utility);
        });
    });
}

function applySingleStyle(element, utility) {
    const cleanUtility = utility.replace("chai-", "");
    
    // Apply fixed-value utility
    const fixedStyles = propertiesMap[cleanUtility];
    if (fixedStyles && fixedStyles.fixedValue) {
        element.style[fixedStyles.property] = fixedStyles.fixedValue;
        return;
    }

    // Apply parameterized utility
    const parts = cleanUtility.split("-");
    for (let i = 1; i <= parts.length; i++) {
        const propKey = parts.slice(0, i).join("-");
        if (propertiesMap[propKey] && propertiesMap[propKey].values) {
            const valueKey = parts.slice(i).join("-");
            if (!valueKey) continue;

            const styles = getStyles(propKey, valueKey);
            if (styles) {
                element.style[styles.property] = styles.value;
            }
            return;
        }
    }
}