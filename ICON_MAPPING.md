# Figma Icon MS3 → MUI Icon Mapping

This document maps icons from the **Icon MS3** library in Figma (Material Design Icons) to their corresponding **@mui/icons-material** components.

## Current Mappings

| Figma Icon MS3 | MUI Component | Import Statement | Status |
|----------------|---------------|------------------|--------|
| `mail` | `MailOutlined` | `import MailOutlined from '@mui/icons-material/MailOutlined';` | ✅ Verified |
| `format_align_left` | `FormatAlignLeftOutlined` | `import FormatAlignLeftOutlined from '@mui/icons-material/FormatAlignLeftOutlined';` | ✅ Verified |
| `format_align_center` | `FormatAlignCenterOutlined` | `import FormatAlignCenterOutlined from '@mui/icons-material/FormatAlignCenterOutlined';` | ✅ Verified |
| `format_align_right` | `FormatAlignRightOutlined` | `import FormatAlignRightOutlined from '@mui/icons-material/FormatAlignRightOutlined';` | ✅ Verified |
| `format_align_justify` | `FormatAlignJustifyOutlined` | `import FormatAlignJustifyOutlined from '@mui/icons-material/FormatAlignJustifyOutlined';` | ✅ Verified |
| `home` | `Home` | `import Home from '@mui/icons-material/Home';` | 🔄 Pending |
| `settings` | `Settings` | `import Settings from '@mui/icons-material/Settings';` | 🔄 Pending |
| `person` | `Person` | `import Person from '@mui/icons-material/Person';` | 🔄 Pending |
| `search` | `Search` | `import Search from '@mui/icons-material/Search';` | 🔄 Pending |
| `notifications` | `Notifications` | `import Notifications from '@mui/icons-material/Notifications';` | 🔄 Pending |
| `favorite` | `Favorite` | `import Favorite from '@mui/icons-material/Favorite';` | 🔄 Pending |
| `delete` | `Delete` | `import Delete from '@mui/icons-material/Delete';` | 🔄 Pending |
| `edit` | `Edit` | `import Edit from '@mui/icons-material/Edit';` | 🔄 Pending |
| `add` | `Add` | `import Add from '@mui/icons-material/Add';` | 🔄 Pending |

## How to Use

### 1. Find Icon in Figma
1. Select the icon instance in Figma
2. Check the component name in the right panel
3. Look for the icon name (e.g., "mail", "home", "settings")

### 2. Map to MUI
Use this table to find the correct MUI component name.

### 3. Update Storybook
```tsx
// Before (incorrect - filled icon)
import Mail from '@mui/icons-material/Mail';

// After (correct - outlined icon)
import MailOutlined from '@mui/icons-material/MailOutlined';
```

## Icon Naming Convention

**Figma Icon MS3:**
- Uses snake_case: `arrow_back`, `more_vert`
- All lowercase
- Underscores separate words

**MUI Icons:**
- Uses PascalCase: `ArrowBack`, `MoreVert`
- First letter capitalized
- No separators

## Conversion Rules

1. **Icon MS3 base names are OUTLINED:** `mail` → `MailOutlined` (not `Mail`)
2. **Snake case:** `arrow_back` → `ArrowBackOutlined`
3. **Multiple words:** `more_vert` → `MoreVertOutlined`

**Important:** Icon MS3 icons in Figma are outlined by default. Always use the `*Outlined` variant in MUI.

## Automated Sync

Run the sync script to automatically update icons:

```bash
npm run sync-figma
```

This will:
1. Query Figma MCP for component data
2. Extract icon names from instances
3. Map to correct MUI components
4. Update Storybook files

## Adding New Mappings

When you encounter a new icon:

1. **Find the Figma name:**
   - Select icon in Figma
   - Copy component name

2. **Find MUI equivalent:**
   ```bash
   cd apps/storybook
   ls node_modules/@mui/icons-material/ | grep -i "mail"
   ```

3. **Add to mapping:**
   - Update `ICON_MAPPING.md` (this file)
   - Update `scripts/sync-from-figma.ts`

4. **Verify:**
   - Check icon renders correctly in Storybook
   - Compare with Figma screenshot

## Common Issues

### Icon Not Found
**Problem:** `Cannot find module '@mui/icons-material/MailOutline'`

**Solution:** 
- Check exact MUI icon name: `ls node_modules/@mui/icons-material/ | grep Mail`
- MUI v9 uses different names than v5
- Example: `MailOutline` → `MailOutlined` or `Mail`

### Wrong Icon Variant
**Problem:** Icon looks different (filled vs outlined)

**Solution:**
- Figma Icon MS3 base names (e.g., "mail") are **outlined** versions
- MUI base names (e.g., "Mail") are also **outlined**
- For filled: use `*Filled` suffix
- For rounded: use `*Rounded` suffix
- For sharp: use `*Sharp` suffix

## Reference Links

- [Material Design Icons](https://fonts.google.com/icons)
- [MUI Icons Documentation](https://mui.com/material-ui/material-icons/)
- [Icon MS3 Figma Library](https://www.figma.com/file/...)

---

**Last Updated:** June 19, 2026
**Maintained By:** Design System Team
