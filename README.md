# Design System Live Documentation

A comprehensive, interactive design system documentation app with live component examples and code snippets.

## Features

- 🎨 **Complete Color Palette** - Primary, neutral, and semantic colors with click-to-copy hex codes
- 📝 **Typography Scale** - Full type hierarchy from display to caption
- 📏 **Spacing System** - Consistent 4px-based spacing scale
- 🔘 **Interactive Components** - Buttons, forms, cards, badges, and more
- 💾 **Copy-to-Clipboard** - One-click copying for code snippets and colors
- 🔍 **Live Search** - Filter navigation items in real-time
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🎯 **Collapsible Sidebar** - Maximize content space when needed
- 🎨 **Figma Integration** - Export components directly from Figma to your design system

## Getting Started

### Option 1: Direct File Access
Simply open `index.html` in your browser.

### Option 2: Local Server
For the best experience, run a local server:

```bash
# Using Python 3
python3 -m http.server 8080

# Using Node.js (if you have http-server installed)
npx http-server -p 8080
```

Then visit `http://localhost:8080` in your browser.

## Structure

```
design-system-live-app/
├── index.html              # Main HTML structure
├── styles.css              # Complete styling system
├── script.js               # Interactive functionality
├── component-manager.js    # Component import/export system
├── components.json         # Stored Figma components
├── README.md              # This file
├── FIGMA_WORKFLOW.md      # Complete Figma integration guide
└── figma-plugin/          # Figma plugin for exporting
    ├── manifest.json      # Plugin configuration
    ├── code.js           # Plugin logic
    ├── ui.html           # Plugin interface
    └── README.md         # Plugin documentation
```

## Sections

1. **Getting Started** - Installation and quick start guide
2. **Colors** - Color palettes with interactive swatches
3. **Typography** - Complete type scale with examples
4. **Spacing** - Visual spacing scale reference
5. **Buttons** - Button variants and sizes
6. **Form Controls** - Input fields, selects, checkboxes, radios
7. **Cards** - Card components and layouts
8. **Badges** - Status indicators and labels
9. **Icons** - Material Icons showcase
10. **Components** - Alerts, progress bars, spinners

## Design Tokens

All design tokens are available as CSS custom properties:

```css
/* Colors */
--color-primary: #3B82F6;
--color-success: #10B981;
--color-warning: #F59E0B;
--color-error: #EF4444;

/* Spacing */
--spacing-1: 4px;
--spacing-2: 8px;
--spacing-4: 16px;
--spacing-8: 32px;

/* Border Radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
```

## Figma Integration

Export components directly from Figma to your design system documentation!

### Quick Start

1. **Install the Figma Plugin**
   - Open Figma Desktop App
   - Go to **Plugins** → **Development** → **Import plugin from manifest**
   - Select `figma-plugin/manifest.json` from this project
   
2. **Export from Figma**
   - Select any component or frame in Figma
   - Run the plugin: **Plugins** → **Development** → **Design System Exporter**
   - Configure name, category, and description
   - Click **Export Component** and copy the JSON data

3. **Import to Design System**
   - Open the design system in your browser
   - Click **Import from Figma** button (top right)
   - Paste the JSON data
   - Click **Import Component**
   - Your component appears in the selected category!

4. **Save & Deploy**
   - Download the updated `components.json` file
   - Commit to git: `git add components.json && git commit -m "Add component" && git push`
   - Component is now live on GitHub Pages!

### Full Documentation
See [FIGMA_WORKFLOW.md](./FIGMA_WORKFLOW.md) for complete step-by-step instructions.

## Technologies

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **Vanilla JavaScript** - No framework dependencies
- **Material Icons** - Icon system
- **Highlight.js** - Code syntax highlighting
- **Inter Font** - Typography
- **Figma Plugin API** - Component export integration

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

MIT License - feel free to use this for your own projects!

## Author

Created with ❤️ for design system documentation
