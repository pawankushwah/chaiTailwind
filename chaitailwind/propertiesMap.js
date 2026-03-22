export const propertiesMap = {
// Typography (font size, alignment)
// Borders and radius
// Basic layout utilities

// Spacing (padding, margin)
    "p": {
        property: "padding",
        values: {
            type: "4xPx"
        }
    },
    "px": {
        property: "padding-left",
        values: {
            type: "4xPx"
        }
    },
    "py": {
        property: "padding-top",
        values: {
            type: "4xPx"
        }
    },
    "pt": {
        property: "padding-top",
        values: {
            type: "4xPx"
        }
    },
    "pb": {
        property: "padding-bottom",
        values: {
            type: "4xPx"
        }
    },
    "pl": {
        property: "padding-left",
        values: {
            type: "4xPx"
        }
    },
    "pr": {
        property: "padding-right",
        values: {
            type: "4xPx"
        }
    },
    "m": {
        property: "margin",
        values: {
            type: "4xPx"
        }
    },
    "mx": {
        property: "margin-left",
        values: {
            type: "4xPx"
        }
    },
    "my": {
        property: "margin-top",
        values: {
            type: "4xPx"
        }
    },
    "mt": {
        property: "margin-top",
        values: {
            type: "4xPx"
        }
    },
    "mb": {
        property: "margin-bottom",
        values: {
            type: "4xPx"
        }
    },
    "ml": {
        property: "margin-left",
        values: {
            type: "4xPx"
        }
    },
    "mr": {
        property: "margin-right",
        values: {
            type: "4xPx"
        }
    },

// Colors (background, text)
    "bg": {
        property: "background-color",
        values: {
            type: "color"
        }
    },
    "text": {
        property: "color",
        values: {
            type: "color"
        }
    },

    "font-bold": {
        property: "font-weight",
        fixedValue: "700"
    },
    "font-semibold": {
        property: "font-weight",
        fixedValue: "600"
    },
    "font-medium": {
        property: "font-weight",
        fixedValue: "500"
    },
    "text-sm": {
        property: "font-size",
        fixedValue: "14px"
    },
    "text-xs": {
        property: "font-size",
        fixedValue: "12px"
    },
// Typography (font size, alignment)
    "font": {
        property: "font-size",
        values: {
            type: "4xPx"
        }
    },
    "h": {
        property: "height",
        values: {
            type: "4xPx"
        }
    },
    "w": {
        property: "width",
        values: {
            type: "4xPx"
        }
    },

// Borders and radius
    "border": {
        property: "border",
        values: {
            type: "4xPx"
        }
    },
    "rounded": {
        property: "border-radius",
        values: {
            type: "4xPx"
        }
    },
    "shadow": {
        property: "box-shadow",
        values: {
            type: "shadow"
        }
    },
    "grid": {
        property: "display",
        fixedValue: "grid"
    },
    "grid-cols": {
        property: "grid-template-columns",
        values: {
            type: "grid"
        }
    },
    "col-span": {
        property: "grid-column",
        values: {
            type: "span"
        }
    },
    "gap": {
        property: "gap",
        values: {
            type: "4xPx"
        }
    },
    "gap-x": {
        property: "column-gap",
        values: {
            type: "4xPx"
        }
    },
    "gap-y": {
        property: "row-gap",
        values: {
            type: "4xPx"
        }
    },
    "items-center": {
        property: "align-items",
        fixedValue: "center"
    },
    "justify-between": {
        property: "justify-content",
        fixedValue: "space-between"
    },
    "justify-center": {
        property: "justify-content",
        fixedValue: "center"
    },

// Basic layout utilities
    "flex": {
        property: "display",
        fixedValue: "flex"
    },
    "items": {
        property: "align-items",
        values: {
            type: "keyword"
        }
    },
    "justify": {
        property: "justify-content",
        values: {
            type: "keyword"
        }
    },
    "direction": {
        property: "flex-direction",
        values: {
            type: "literal"
        }
    },
    "align": {
        property: "text-align",
        values: {
            type: "literal"
        }
    },
    "max-w": {
        property: "max-width",
        values: {
            type: "breakpoint"
        }
    },
    "min-h": {
        property: "min-height",
        values: {
            type: "literal"
        }
    },
    "overflow": {
        property: "overflow",
        values: {
            type: "literal"
        }
    },
    "object": {
        property: "object-fit",
        values: {
            type: "literal"
        }
    },
    "transition": {
        property: "transition",
        values: {
            type: "literal"
        }
    },
    "scale": {
        property: "transform",
        values: {
            type: "transform"
        }
    },
    "cursor": {
        property: "cursor",
        values: {
            type: "literal"
        }
    },
}

export const colorMap = {
    "red": "#ef4444",
    "red-100": "#fef2f2",
    "red-200": "#fee2e2",
    "red-300": "#fecaca",
    "red-400": "#fca5a5",
    "red-500": "#f87171",
    "red-600": "#ef4444",
    "red-700": "#dc2626",
    "red-800": "#b91c1c",
    "red-900": "#991b1b",

    "green": "#22c55e",
    "green-100": "#f0fdf4",
    "green-200": "#dcfce7",
    "green-300": "#bbf7d0",
    "green-400": "#86efac",
    "green-500": "#4ade80",
    "green-600": "#22c55e",
    "green-700": "#16a34a",
    "green-800": "#15803d",
    "green-900": "#166534",

    "blue": "#3b82f6",
    "blue-100": "#eff6ff",
    "blue-200": "#dbeafe",
    "blue-300": "#bfdbfe",
    "blue-400": "#93c5fd",
    "blue-500": "#60a5fa",
    "blue-600": "#3b82f6",
    "blue-700": "#2563eb",
    "blue-800": "#1d4ed8",
    "blue-900": "#1e40af",

    "yellow": "#eab308",
    "yellow-100": "#fef3c7",
    "yellow-200": "#fde68a",
    "yellow-300": "#fcd34d",
    "yellow-400": "#fbbf24",
    "yellow-500": "#f59e0b",
    "yellow-600": "#eab308",
    "yellow-700": "#ca8a04",
    "yellow-800": "#9a3412",
    "yellow-900": "#7c2d12",

    "purple": "#9333ea",
    "purple-100": "#f3e8ff",
    "purple-200": "#e9d5ff",
    "purple-300": "#d8b4fe",
    "purple-400": "#c084fc",
    "purple-500": "#a855f7",
    "purple-600": "#9333ea",
    "purple-700": "#7e22ce",
    "purple-800": "#6b21a8",
    "purple-900": "#5b21b6",

    "pink": "#db2777",
    "pink-100": "#fce7f3",
    "pink-200": "#fbcfe8",
    "pink-300": "#f9a8d4",
    "pink-400": "#f472b6",
    "pink-500": "#ec4899",
    "pink-600": "#db2777",
    "pink-700": "#c026d3",
    "pink-800": "#a855f7",
    "pink-900": "#9333ea",

    "orange": "#ea580c",
    "orange-100": "#fff7ed",
    "orange-200": "#ffedd5",
    "orange-300": "#fed7aa",
    "orange-400": "#fdba74",
    "orange-500": "#f97316",
    "orange-600": "#ea580c",
    "orange-700": "#c2410c",
    "orange-800": "#9a3412",
    "orange-900": "#7c2d12",

    "gray": "#6b7280",
    "gray-100": "#f9fafb",
    "gray-200": "#f3f4f6",
    "gray-300": "#e5e7eb",
    "gray-400": "#d1d5db",
    "gray-500": "#9ca3af",
    "gray-600": "#6b7280",
    "gray-700": "#4b5563",
    "gray-800": "#374151",
    "gray-900": "#1f2937",

    "black": "#000000",
    "white": "#ffffff",
}

export const valuesMap = {
    "4xPx": {
        type: "4xPx",
        getValue: (value) => {
            return value * 4 + "px";
        }
    },
    "color": {
        type: "color",
        getValue: (value) => {
            return colorMap[value];
        }
    },
    "keyword": {
        type: "keyword",
        getValue: (value) => {
            return value;
        }
    },
    "literal": {
        type: "literal",
        getValue: (value) => {
            if (value === "screen") return "100vh";
            if (value === "full") return "100%";
            if (value === "col") return "column";
            if (value === "grid") return "grid";
            return value;
        }
    },
    "grid": {
        type: "grid",
        getValue: (value) => {
            return `repeat(${value}, minmax(0, 1fr))`;
        }
    },
    "span": {
        type: "span",
        getValue: (value) => {
            return `span ${value} / span ${value}`;
        }
    },
    "shadow": {
        type: "shadow",
        getValue: (value) => {
            const shadows = {
                "sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                "xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                "inner": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
                "none": "none"
            };
            // Support passing a color name if not a preset
            if (shadows[value]) return shadows[value];
            return `0 4px 6px -1px ${colorMap[value] || value}`;
        }
    },
    "breakpoint": {
        type: "breakpoint",
        getValue: (value) => {
            const breakpoints = {
                "xs": "320px",
                "sm": "640px",
                "md": "768px",
                "lg": "1024px",
                "xl": "1280px",
                "2xl": "1536px",
                "full": "100%"
            };
            return breakpoints[value] || value;
        }
    },
    "transform": {
        type: "transform",
        getValue: (value) => {
            if (value.startsWith('scale-')) {
                const val = value.split('-')[1];
                return `scale(${val / 100})`;
            }
            return `scale(${value / 100})`;
        }
    }
}

export function getStyles(propertyString, valueString) {
    const obj = propertiesMap[propertyString];
    if(obj) {
        return {
            property: obj.property,
            value: valuesMap[obj.values.type].getValue(valueString)
        };
    }
    return null;
}