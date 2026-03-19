# Figma to Design System Workflow

Complete guide for exporting components from Figma to your live design system documentation.

## Overview

This workflow allows you to:
1. Design components in Figma
2. Export them with one click using the Figma plugin
3. Import them into your design system documentation
4. Share live, interactive component documentation with your team

## Setup (One-Time)

### 1. Install the Figma Plugin

1. Open Figma Desktop App
2. Navigate to **Plugins** → **Development** → **Import plugin from manifest**
3. Browse to: `/Users/lisandroalvo/Desktop/Design  System Live App/figma-plugin/`
4. Select `manifest.json`
5. Click **Open**

The plugin is now installed and ready to use!

### 2. Start Your Design System Server

```bash
cd "/Users/lisandroalvo/Desktop/Design  System Live App"
python3 -m http.server 8080
```

Open http://localhost:8080 in your browser.

## Daily Workflow

### Export from Figma

1. **Select Component**
   - In Figma, select the component/frame you want to export
   - Can be a button, card, form field, or any UI element

2. **Run Plugin**
   - Right-click → Plugins → Development → Design System Exporter
   - Or use keyboard shortcut (if configured)

3. **Configure Export**
   - **Name**: Give it a clear name (e.g., "Primary Button", "User Card")
   - **Category**: Choose the right section:
     - `buttons` - Button components
     - `forms` - Input fields, selects, checkboxes
     - `cards` - Card layouts
     - `badges` - Status indicators, labels
     - `components` - Complex components
     - `navigation` - Nav bars, menus, tabs
     - `feedback` - Alerts, toasts, modals
   - **Description**: Add usage notes (optional but recommended)

4. **Export**
   - Click "Export Component"
   - Wait for preview to generate
   - Review the HTML and CSS code
   - Click "Copy to Clipboard" in the Export Data section

### Import to Design System

1. **Open Design System**
   - Go to http://localhost:8080
   - Click "Import from Figma" button (top right)

2. **Paste JSON**
   - Paste the copied JSON data into the textarea
   - Click "Import Component"

3. **Verify**
   - Navigate to the category section (e.g., Buttons, Cards)
   - Scroll to "Figma Components" subsection
   - Your component should appear with:
     - Preview image
     - HTML code
     - CSS code
     - Metadata

4. **Save Changes**
   - The system will automatically download an updated `components.json` file
   - Save this file to your project folder
   - Commit it to git

### Commit to GitHub

```bash
cd "/Users/lisandroalvo/Desktop/Design  System Live App"

# Add the updated components file
git add components.json

# Commit
git commit -m "Add [Component Name] from Figma"

# Push to GitHub
git push origin main
```

Your component is now live on GitHub and will be visible on GitHub Pages!

## Example: Exporting a Button

### In Figma:
1. Create a button component with:
   - Background color: #3B82F6
   - Text: "Click Me"
   - Padding: 12px 24px
   - Border radius: 8px

2. Select the button frame
3. Run the plugin
4. Fill in:
   - Name: "Primary CTA Button"
   - Category: "buttons"
   - Description: "Main call-to-action button for primary actions"

5. Export and copy JSON

### In Design System:
1. Click "Import from Figma"
2. Paste JSON
3. Click "Import Component"
4. Navigate to Buttons section
5. See your button with live preview and code

## Managing Components

### Edit a Component
- Currently: Delete and re-import with updates
- Future: In-place editing (coming soon)

### Delete a Component
- Click the "Delete" button on any Figma component
- Confirm deletion
- Download the updated components.json
- Commit to git

### Organize Components
- Use clear, consistent naming
- Choose the right category
- Add helpful descriptions
- Group related components

## Best Practices

### Naming Convention
```
[Type] [Variant] [State]
Examples:
- Button Primary Default
- Card User Profile
- Input Text Error
- Badge Status Active
```

### Categories
- **Buttons**: All clickable buttons
- **Forms**: Input fields, selects, checkboxes, radios
- **Cards**: Container components
- **Badges**: Small status indicators
- **Components**: Complex, multi-part components
- **Navigation**: Nav bars, breadcrumbs, tabs
- **Feedback**: Alerts, toasts, modals, tooltips

### Descriptions
Include:
- When to use this component
- Key features or variants
- Accessibility notes
- Related components

Example:
```
"Primary call-to-action button for main user actions. 
Use sparingly - only one per screen. 
Includes hover and active states."
```

## File Structure

```
Design  System Live App/
├── index.html              # Main documentation
├── styles.css              # Design system styles
├── script.js               # Core functionality
├── component-manager.js    # Component management
├── components.json         # Exported components data
└── figma-plugin/
    ├── manifest.json       # Plugin config
    ├── code.js            # Plugin logic
    ├── ui.html            # Plugin UI
    └── README.md          # Plugin docs
```

## Troubleshooting

### Component not showing up
- Check you selected the right category
- Refresh the page
- Check browser console for errors

### Styles look different
- Figma effects may not translate perfectly to CSS
- Review and adjust the CSS manually if needed
- Some gradients/effects need manual refinement

### Can't import JSON
- Verify JSON is valid (use JSONLint.com)
- Ensure all required fields are present
- Check for special characters in names

### Plugin errors
- Ensure you have a layer selected
- Try restarting the plugin
- Check Figma console for errors

## Tips for Success

1. **Start Simple**: Export basic components first
2. **Iterate**: Refine the CSS after import if needed
3. **Document**: Add good descriptions for team clarity
4. **Organize**: Use consistent naming and categories
5. **Version Control**: Commit after each import
6. **Team Sync**: Push to GitHub regularly

## Advanced Usage

### Batch Export
1. Export multiple components from Figma
2. Keep JSON data organized
3. Import them one by one
4. Commit all at once

### Component Variants
- Export each variant separately
- Use clear naming (e.g., "Button Primary", "Button Secondary")
- Group them in the same category

### Custom Styling
After import, you can:
- Edit the CSS directly in the design system
- Add responsive breakpoints
- Include hover/active states
- Add animations

## Next Steps

1. Install the Figma plugin
2. Export your first component
3. Import it to the design system
4. Commit to GitHub
5. Share with your team!

## Resources

- [Figma Plugin Documentation](./figma-plugin/README.md)
- [Design System Documentation](./README.md)
- [GitHub Repository](https://github.com/lisandroalvo/design-system-live-app)
