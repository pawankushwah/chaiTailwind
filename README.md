# ☕ ChaiTailwind

**ChaiTailwind** is a lightweight, utility-first CSS engine built entirely in JavaScript. It allows for **runtime styling** without a build step—just include the script, use the classes, and let the engine handle the rest.

## 🎥 Project Process & Demo
[![Process Flow Video](https://raw.githubusercontent.com/pawankushwah/chaiTailwind/e402aa226305eea6a34d1f97262f3ed8b579379d/thumbnail.png)](https://github.com/pawankushwah/chaiTailwind/blob/aea1f8e68dee62d4c62466928befa6446065df85/process-flow.mp4)

## 🚀 Features

- **Runtime-First**: No PostCSS, Tailwind CLI, or build tools required.
- **Responsive Prefixes**: Support for `sm:`, `md:`, and `lg:` prefixes (e.g., `md:chai-grid-cols-3`).
- **Interactive States**: Built-in support for `hover:` states (e.g., `hover:chai-scale-105`).
- **Dynamic Grid & Flex**: Advanced layout control using pure JavaScript logic.
- **4px Spacing Scale**: Predictable and consistent spacing system.

## 📂 Project Structure

- `index.html`: The main blog landing page.
- `about.html`: About page demonstrating responsive layouts.
- `contact.html`: Contact page with styled forms.
- `chaitailwind/`:
  - `index.js`: Core engine logic and style application.
  - `propertiesMap.js`: Mapping of Chai classes to CSS properties.
  - `default.css`: Base reset styles.
- `assets/`: Project images and media.

## 🛠 Quick Start

Add the following tag to your HTML `<head>`:

```html
<script type="module" src="./chaitailwind/index.js"></script>
```

Then style your elements using the `chai-` prefix:

```html
<div class="chai-bg-blue-600 chai-p-10 md:chai-p-20 chai-text-white">
    <h1 class="chai-font-bold chai-text-lg">Build something amazing.</h1>
</div>
```

## 🧠 The Approach
ChaiTailwind uses a **Scan-and-Apply** approach. On page load, the engine identifies all `chai-` prefixed classes, parses them against a property map, and injects the corresponding inline styles. It uses a `WeakMap` for high-performance style re-calculation during window resizing.

## 🏆 Project Objectives
This project was built to demonstrate that modern web design can be achieved with lightweight, custom-built tools. It focuses on the intersection of JS-driven logic and CSS aesthetics.

---
Built with ☕ and code for the Web Dev Cohort.
