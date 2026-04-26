# Adding Figma Screenshots to Metadata

## The Problem
The React components are rendering but they look incomplete because:
1. They use CSS variables that aren't all defined
2. They use Figma asset URLs that may have expired
3. They render with default props, so all variants look the same

## The Solution
Add Figma screenshot URLs to the metadata so we can display the actual Figma designs.

## How to Get Screenshots

For each component, we need to call the Figma MCP `get_screenshot` tool:

```
mcp0_get_screenshot
  fileKey: OjFchNAdeHiNH5W4wYLSGS
  nodeId: [component.nodeId]
```

This returns a screenshot URL like:
```
https://www.figma.com/api/mcp/asset/dbc01825-f5e3-4c0e-933a-380842b85fe4
```

## Components That Need Screenshots (74 total)

1. Autocomplete - nodeId: 6570:49860
2. Button - nodeId: 6543:36755
3. ButtonGroup - nodeId: 7466:49902
4. Checkbox - nodeId: 6564:39086
5. Fab - nodeId: 6564:39171
... (70 more)

## Next Steps

Would you like me to:

**Option A:** Fetch all 74 screenshots via MCP and update the metadata
  - This will take ~5 minutes
  - Screenshots will be embedded in the playground
  - Components will show actual Figma designs

**Option B:** Keep the React component rendering
  - Add all missing CSS variables
  - Fix asset URLs
  - Add variant switching

**Option C:** Show both
  - Figma screenshot on the left
  - React component render on the right
  - Side-by-side comparison

**Which would you prefer?**
