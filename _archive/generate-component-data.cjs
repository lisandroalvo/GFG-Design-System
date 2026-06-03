const fs = require('fs');
const path = require('path');

// Read all extracted components
const extractedDir = path.join(__dirname, 'extracted-components');
const componentsToExtract = JSON.parse(fs.readFileSync('components-to-extract.json', 'utf8'));

// Generate organized component data for the playground
const organizedData = {
  byPage: {},
  byCategory: {},
  stats: {
    totalPages: 0,
    totalComponentSets: 0,
    totalComponents: 0
  }
};

// Component categories
const categories = {
  'Inputs': ['Button', 'ButtonGroup', 'Checkbox', 'Radio', 'RadioGroup', 'Switch', 'TextField', 'Select', 'Autocomplete', 'Slider', 'Rating', 'DateField', 'TimeField', 'DateTimeField'],
  'Data Display': ['Avatar', 'AvatarGroup', 'Badge', 'Chip', 'Divider', 'Icon', 'List', 'ListItem', 'Table', 'TableHead', 'TableHeadRow', 'TableCell', 'TableCellRow', 'DataGridTable', 'GridToolbarQuickFilter', 'Tooltip', 'Typography'],
  'Feedback': ['Alert', 'Backdrop', 'Dialog', 'DialogTitle', 'DialogContent', 'DialogActions', 'Snackbar', 'CircularProgress', 'LinearProgress', 'Skeleton', 'Stepper'],
  'Surfaces': ['Accordion', 'Card', 'CardHeader', 'CardContent', 'CardActions', 'CardMedia', 'Paper', 'Toolbar', 'Popover'],
  'Navigation': ['AppBar', 'BottomNavigation', 'BottomNavigationAction', 'Breadcrumbs', 'Menu', 'MenuItem', 'MenuList', 'Tabs', 'Tab', 'Pagination', 'PaginationItem', 'Link'],
  'Layout': ['Container', 'Stack'],
  'Utils': ['Collapse', 'Fade', 'Grow', 'Slide', 'Zoom', 'ToggleButton', 'ToggleButtonGroup', 'TransferList'],
  'Advanced': ['Fab', 'SpeedDial', 'MobileStepper', 'Timeline', 'TimelineItem', 'TimelineDot', 'TreeItem', 'ImageListItemBar'],
  'Form': ['FormLabel', 'FormHelperText', 'InputLabel', 'FormGroupCheckbox', 'FormGroupSwitch', 'FormGroupRadioGroup']
};

// Read each component file and extract metadata
const components = fs.readdirSync(extractedDir)
  .filter(file => file.endsWith('.tsx'))
  .map(file => {
    const componentName = file.replace('.tsx', '');
    const filePath = path.join(extractedDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract props type definition
    const propsMatch = content.match(/type\s+(\w+Props)\s*=\s*\{([^}]+)\}/s);
    const props = [];
    
    if (propsMatch) {
      const propsContent = propsMatch[2];
      const propLines = propsContent.split('\n').filter(line => line.trim());
      
      propLines.forEach(line => {
        const propMatch = line.match(/(\w+)\?:\s*"([^"]+)"/);
        if (propMatch) {
          const [, propName, defaultValue] = propMatch;
          props.push({
            name: propName,
            type: 'string',
            default: defaultValue
          });
        }
      });
    }
    
    // Find component in componentsToExtract.json
    const componentData = componentsToExtract.find(c => c.name === componentName);
    
    return {
      name: componentName,
      setName: componentData?.setName || `<${componentName}>`,
      nodeId: componentData?.nodeId || '',
      variantCount: componentData?.variantCount || props.length,
      props: props,
      filePath: `extracted-components/${file}`,
      category: Object.keys(categories).find(cat => categories[cat].includes(componentName)) || 'Other'
    };
  });

// Organize by category
categories['Other'] = [];
components.forEach(component => {
  const category = component.category;
  if (!organizedData.byCategory[category]) {
    organizedData.byCategory[category] = {
      components: [],
      componentSets: {}
    };
  }
  
  organizedData.byCategory[category].components.push(component);
  
  // Group by component set
  const setName = component.setName;
  if (!organizedData.byCategory[category].componentSets[setName]) {
    organizedData.byCategory[category].componentSets[setName] = [];
  }
  organizedData.byCategory[category].componentSets[setName].push(component);
});

// Organize by page (use category as page)
Object.keys(categories).forEach(category => {
  if (organizedData.byCategory[category]) {
    organizedData.byPage[category] = organizedData.byCategory[category];
  }
});

// Calculate stats
organizedData.stats.totalPages = Object.keys(organizedData.byPage).length;
organizedData.stats.totalComponentSets = components.length;
organizedData.stats.totalComponents = components.reduce((sum, c) => sum + c.variantCount, 0);

// Save to JSON
const outputPath = path.join(__dirname, 'design-tokens', 'organized-components.json');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(organizedData, null, 2));

console.log(`✅ Generated component data for ${components.length} components`);
console.log(`   - ${organizedData.stats.totalPages} categories`);
console.log(`   - ${organizedData.stats.totalComponents} total variants`);
console.log(`   - Saved to: ${outputPath}`);
