figma.showUI(__html__, { width: 400, height: 600 });

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'export-component') {
    const selection = figma.currentPage.selection;
    
    if (selection.length === 0) {
      figma.ui.postMessage({
        type: 'error',
        message: 'Please select a component or frame to export'
      });
      return;
    }

    const node = selection[0];
    const componentData = await extractComponentData(node);
    
    figma.ui.postMessage({
      type: 'component-data',
      data: componentData
    });
  }

  if (msg.type === 'cancel') {
    figma.closePlugin();
  }
};

async function extractComponentData(node) {
  const data = {
    name: node.name,
    type: node.type,
    width: node.width,
    height: node.height,
    styles: await extractStyles(node),
    children: [],
    html: '',
    css: ''
  };

  if ('children' in node) {
    for (const child of node.children) {
      data.children.push(await extractComponentData(child));
    }
  }

  data.html = generateHTML(node, data);
  data.css = generateCSS(node, data);
  
  const imageBytes = await node.exportAsync({
    format: 'PNG',
    constraint: { type: 'SCALE', value: 2 }
  });
  
  data.preview = figma.base64Encode(imageBytes);

  return data;
}

async function extractStyles(node) {
  const styles = {
    fills: [],
    strokes: [],
    effects: [],
    typography: null
  };

  if ('fills' in node && node.fills !== figma.mixed) {
    styles.fills = node.fills.map(fill => {
      if (fill.type === 'SOLID') {
        return {
          type: 'solid',
          color: rgbToHex(fill.color),
          opacity: fill.opacity || 1
        };
      }
      return fill;
    });
  }

  if ('strokes' in node && node.strokes !== figma.mixed) {
    styles.strokes = node.strokes.map(stroke => ({
      color: rgbToHex(stroke.color),
      weight: node.strokeWeight
    }));
  }

  if ('effects' in node) {
    styles.effects = node.effects.map(effect => {
      if (effect.type === 'DROP_SHADOW') {
        return {
          type: 'shadow',
          x: effect.offset.x,
          y: effect.offset.y,
          blur: effect.radius,
          color: rgbaToString(effect.color)
        };
      }
      return effect;
    });
  }

  if (node.type === 'TEXT') {
    styles.typography = {
      fontFamily: node.fontName.family,
      fontSize: node.fontSize,
      fontWeight: node.fontName.style,
      lineHeight: node.lineHeight,
      letterSpacing: node.letterSpacing,
      textAlign: node.textAlignHorizontal
    };
  }

  if ('cornerRadius' in node) {
    styles.borderRadius = node.cornerRadius;
  }

  if ('paddingLeft' in node) {
    styles.padding = {
      top: node.paddingTop,
      right: node.paddingRight,
      bottom: node.paddingBottom,
      left: node.paddingLeft
    };
  }

  return styles;
}

function generateHTML(node, data) {
  let html = '';
  const className = node.name.toLowerCase().replace(/\s+/g, '-');

  if (node.type === 'TEXT') {
    html = `<div class="${className}">${node.characters}</div>`;
  } else if (node.type === 'RECTANGLE' || node.type === 'FRAME') {
    if (data.children.length > 0) {
      const childrenHTML = data.children.map(child => child.html).join('\n  ');
      html = `<div class="${className}">\n  ${childrenHTML}\n</div>`;
    } else {
      html = `<div class="${className}"></div>`;
    }
  } else if (node.type === 'COMPONENT' || node.type === 'INSTANCE') {
    const childrenHTML = data.children.map(child => child.html).join('\n  ');
    html = `<div class="component ${className}">\n  ${childrenHTML}\n</div>`;
  }

  return html;
}

function generateCSS(node, data) {
  const className = node.name.toLowerCase().replace(/\s+/g, '-');
  let css = `.${className} {\n`;

  if (data.styles.fills.length > 0) {
    const fill = data.styles.fills[0];
    css += `  background-color: ${fill.color};\n`;
    if (fill.opacity < 1) {
      css += `  opacity: ${fill.opacity};\n`;
    }
  }

  if (node.type === 'TEXT' && data.styles.typography) {
    const typo = data.styles.typography;
    css += `  font-family: '${typo.fontFamily}', sans-serif;\n`;
    css += `  font-size: ${typo.fontSize}px;\n`;
    css += `  font-weight: ${typo.fontWeight};\n`;
    if (typo.lineHeight && typeof typo.lineHeight === 'object') {
      css += `  line-height: ${typo.lineHeight.value}${typo.lineHeight.unit === 'PERCENT' ? '%' : 'px'};\n`;
    }
    if (typo.textAlign) {
      css += `  text-align: ${typo.textAlign.toLowerCase()};\n`;
    }
  }

  if (data.styles.borderRadius) {
    css += `  border-radius: ${data.styles.borderRadius}px;\n`;
  }

  if (data.styles.padding) {
    const p = data.styles.padding;
    css += `  padding: ${p.top}px ${p.right}px ${p.bottom}px ${p.left}px;\n`;
  }

  css += `  width: ${Math.round(node.width)}px;\n`;
  css += `  height: ${Math.round(node.height)}px;\n`;

  if (data.styles.effects.length > 0) {
    const shadows = data.styles.effects
      .filter(e => e.type === 'shadow')
      .map(e => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`)
      .join(', ');
    if (shadows) {
      css += `  box-shadow: ${shadows};\n`;
    }
  }

  css += '}';

  return css;
}

function rgbToHex(rgb) {
  const r = Math.round(rgb.r * 255);
  const g = Math.round(rgb.g * 255);
  const b = Math.round(rgb.b * 255);
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

function rgbaToString(color) {
  return `rgba(${Math.round(color.r * 255)}, ${Math.round(color.g * 255)}, ${Math.round(color.b * 255)}, ${color.a})`;
}
