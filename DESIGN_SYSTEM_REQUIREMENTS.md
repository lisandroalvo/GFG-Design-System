# Design System Live - Requirements

## ✅ CORRECT BEHAVIOR (What User Wants):

### **1. SIDEBAR (Left Side)**
- ✅ Shows ALL component categories
- ✅ Search box at top to filter components
- ✅ Categories: Inputs, Data Display, Feedback, Surfaces, Navigation, Layout, Utils, Advanced, Form
- ✅ Click category → shows components in that category
- ✅ Click component → opens detailed modal

### **2. COMPONENT MODAL (When Clicking Component)**
Shows in this order:

#### **A. Component Header**
- Component name (e.g., "Alert")
- Number of variants (e.g., "36 variants")
- View Code button

#### **B. Interactive Prototype Section** (if available)
- Embedded Figma prototype iframe
- Shows live interactive component from Figma
- Example: Alert component has prototype at node `15883:11857`
- User can interact with it directly

#### **C. Variant Selector / Playground**
- Dropdown controls for each property (color, size, variant, etc.)
- Live preview updates as you change properties
- Shows the matching Figma design for selected variant

#### **D. Component Code Section**
- Full React + TypeScript code
- Copy button to copy entire component code
- Shows props, types, and implementation
- Located in `extracted-components/{ComponentName}.tsx`

### **3. WHAT WE HAVE (MCP Integration)**
- ✅ 79 extracted components in `extracted-components/` folder
- ✅ All component metadata in `design-tokens/organized-components.json`
- ✅ Figma file key: `OjFchNAdeHiNH5W4wYLSGS`
- ✅ Each component has node ID for Figma linking
- ✅ Prototype mapping for interactive components
- ✅ Auto-sync from Figma every 60 seconds

### **4. EXAMPLE: Alert Component Flow**
1. User clicks "Alert" in sidebar
2. Modal opens showing:
   - **Prototype**: Embedded Figma iframe with interactive Alert
   - **Playground**: Dropdowns to select Severity (Error/Warning/Info/Success), Variant (Filled/Outlined/Standard)
   - **Live Preview**: Shows the selected Alert variant
   - **Code**: Full React code for Alert component with copy button

### **5. FILE STRUCTURE**
```
index.html                          ← Main static HTML (WORKING VERSION)
design-system-final.html            ← Backup of working version
design-tokens/
  organized-components.json         ← All component metadata (MCP extracted)
extracted-components/
  Alert.tsx                         ← React component code
  Button.tsx
  ... (79 total components)
```

### **6. WHAT TO AVOID**
❌ React app with blank component rendering
❌ Missing sidebar
❌ Components not showing variants
❌ No Figma prototype embedding
❌ No code display

## 🎯 CURRENT STATUS
- Static HTML design system is CORRECT
- Netlify was serving old React build (WRONG)
- Now deploying static HTML with full functionality
