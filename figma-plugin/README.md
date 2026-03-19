# Figma Plugin - Design System Exporter

This Figma plugin allows you to export components and frames directly to your Design System documentation.

## Installation

1. Open Figma
2. Go to **Plugins** → **Development** → **Import plugin from manifest**
3. Navigate to this `figma-plugin` folder and select `manifest.json`
4. The plugin will now be available in your Figma file

## How to Use

### Step 1: Select a Component in Figma
- Select any component, frame, or element you want to export
- The plugin will capture its visual appearance, styles, and structure

### Step 2: Run the Plugin
- Go to **Plugins** → **Development** → **Design System Exporter**
- The plugin UI will open

### Step 3: Configure Export
- **Component Name**: Give your component a descriptive name
- **Category**: Choose where it should appear in the design system:
  - Buttons
  - Form Controls
  - Cards
  - Badges
  - Components
  - Navigation
  - Feedback
- **Description**: Add usage guidelines and context

### Step 4: Export Component
1. Click **Export Component**
2. The plugin will generate:
   - PNG preview image
   - HTML markup
   - CSS styles
   - Complete JSON export data
3. Review the generated code in the preview tabs

### Step 5: Copy JSON Data
1. Scroll to the **Export Data** section
2. Click **Copy to Clipboard**
3. The JSON data is now ready to import

### Step 6: Import to Design System
1. Open your Design System documentation (http://localhost:8080)
2. Click the **Import from Figma** button (top right or floating action button)
3. Paste the JSON data
4. Click **Import Component**
5. Your component is now live in the design system!

## What Gets Exported

The plugin extracts:
- **Visual Preview**: High-resolution PNG screenshot
- **Dimensions**: Width and height
- **Colors**: Fill colors, stroke colors
- **Typography**: Font family, size, weight, line height, letter spacing
- **Effects**: Shadows, blur effects
- **Border Radius**: Corner radius values
- **Padding**: Internal spacing
- **HTML Structure**: Semantic HTML markup
- **CSS Styles**: Complete styling rules

## Generated Code Example

### HTML
```html
<div class="primary-button">
  <div class="button-text">Click Me</div>
</div>
```

### CSS
```css
.primary-button {
  background-color: #3B82F6;
  border-radius: 8px;
  padding: 12px 24px;
  width: 120px;
  height: 44px;
}

.button-text {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #FFFFFF;
}
```

## Tips for Best Results

1. **Name Your Layers**: Use descriptive names in Figma - they become CSS class names
2. **Use Components**: Export Figma components for better structure
3. **Organize Layers**: Proper layer hierarchy creates better HTML structure
4. **Use Auto Layout**: Auto Layout frames export with proper padding/spacing
5. **Test Styles**: Review the generated CSS and adjust in the design system if needed

## Workflow

```
Figma Component
    ↓
Export via Plugin
    ↓
Copy JSON Data
    ↓
Import to Design System
    ↓
Live Documentation
```

## Troubleshooting

**Plugin won't load:**
- Make sure you're importing from the correct manifest.json file
- Check that all plugin files (manifest.json, code.js, ui.html) are in the same folder

**Export button doesn't work:**
- Ensure you have a component or frame selected in Figma
- Try selecting a different layer

**Styles not accurate:**
- Complex gradients may need manual adjustment
- Some Figma effects don't have direct CSS equivalents
- Review and refine the generated CSS in your design system

## File Structure

```
figma-plugin/
├── manifest.json    # Plugin configuration
├── code.js         # Main plugin logic
├── ui.html         # Plugin UI
└── README.md       # This file
```

## Next Steps

After importing components:
1. Review the generated HTML/CSS
2. Test the component in different contexts
3. Add usage examples and guidelines
4. Commit the updated components.json to your repository
5. Deploy to GitHub Pages for team access

## Support

For issues or questions about the plugin, check the main Design System documentation or create an issue in the GitHub repository.
