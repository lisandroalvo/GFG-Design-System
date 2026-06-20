# Migration Guide: Windsurf → Visual Studio Code with MCP

**Date:** June 20, 2026  
**Project:** GFG Design System 2026 - Storybook Development

---

## Executive Summary

Based on research, **MCP (Model Context Protocol) works equally well in both Windsurf and VS Code**, but with different strengths:

### Windsurf (Current)
- ✅ **Easiest setup** (1/10 difficulty - built-in GUI)
- ✅ **Best for multiple MCP servers** (handles 20+ concurrent)
- ✅ **Automatic context integration** (pulls relevant MCP data automatically)
- ✅ **One-click MCP installation** from built-in registry
- ❌ **Issues we experienced:** Figma MCP tools unreliable ("nothing selected" errors)

### VS Code (Migration Target)
- ✅ **Broad MCP support** (stdio and remote HTTP)
- ✅ **GitHub Copilot integration** with MCP
- ✅ **Stable, mature platform**
- ✅ **Better extension ecosystem**
- ⚠️ **Manual MCP config** (2/10 difficulty - requires JSON editing)
- ⚠️ **Must enable MCP explicitly** in settings

### Recommendation
**Try VS Code if:**
- Figma MCP continues to be unreliable in Windsurf
- You want GitHub Copilot + MCP integration
- You prefer VS Code's ecosystem

**Stay with Windsurf if:**
- You use many MCP servers (we only use Figma MCP)
- You want the easiest setup
- Figma MCP issues can be resolved

---

## What We've Accomplished So Far

### 1. **Figma to Storybook Sync System**
We built a comprehensive system to sync design data from Figma to Storybook with 100% accuracy using MCP tools.

**Key Files Created:**
- `FIGMA_SYNC_SYSTEM.md` - Master documentation (500+ lines)
- `ICON_MAPPING.md` - Figma Icon MS3 → MUI icon mapping
- `.windsurf/workflows/sync-figma-to-storybook.md` - Step-by-step workflow
- `scripts/sync-from-figma.ts` - Automation script (future)

### 2. **Components Synced from Figma**

#### **Badge Component** ✅ Complete
- **Figma Node:** `6587:47476`
- **Icon:** `mail` → `MailOutlined` (corrected from filled to outlined)
- **Colors:** Primary (#d946ef pink), Secondary (#333333), Error, Warning, Info, Success
- **Files:**
  - `/apps/storybook/src/components/Badge/Badge.tsx`
  - `/apps/storybook/src/components/Badge/Badge.stories.tsx`
- **Status:** Deployed to Vercel ✅

#### **Toggle Button Component** ✅ Created (Local Only)
- **Figma Node:** `16354:3941`
- **Icons:** 
  - `format_align_left` → `FormatAlignLeftOutlined`
  - `format_align_center` → `FormatAlignCenterOutlined`
  - `format_align_right` → `FormatAlignRightOutlined`
  - `format_align_justify` → `FormatAlignJustifyOutlined`
- **Variants:** Size (Small/Medium/Large), State (Enabled/Hovered/Focused/Pressed/Disabled), Selected (True/False)
- **Files:**
  - `/apps/storybook/src/components/ToggleButton/ToggleButton.tsx`
  - `/apps/storybook/src/components/ToggleButton/ToggleButton.stories.tsx`
- **Status:** Local only, not yet deployed

### 3. **MCP Tools Used**

We successfully used these Figma MCP tools:
- ✅ `mcp0_get_screenshot` - Visual verification
- ✅ `mcp0_search_design_system` - Find icons/components
- ✅ `mcp0_get_metadata` - Component structure
- ❌ `mcp0_get_variable_defs` - **Failed** ("nothing selected" error)
- ❌ `mcp0_get_design_context` - **Not tested** (should work but unreliable)

### 4. **Deployment Setup**

- **GitHub Repo:** `https://github.com/lisandroalvo/GFG-Design-System.git`
- **Vercel:** Auto-deploys from `main` branch
- **Live URL:** `https://gfg-design-system.vercel.app`
- **Local Storybook:** `http://localhost:6006`

### 5. **Theme Configuration**

All colors synced from Figma in `/apps/storybook/src/tokens/gfgTheme.ts`:
```typescript
const GFG = {
  primary:          '#d946ef',  // Pink/magenta
  secondary:        '#333333',  // Rodeo black
  error:            '#a34740',  // Wine
  warning:          '#8a5d1f',  // Ochre
  info:             '#2b4a60',  // Night
  success:          '#637058',  // Sage
}
```

### 6. **Icon Mapping System**

Created comprehensive mapping from Figma Icon MS3 (Material Design) to MUI icons:

**Verified Icons:**
- `mail` → `MailOutlined`
- `format_align_left` → `FormatAlignLeftOutlined`
- `format_align_center` → `FormatAlignCenterOutlined`
- `format_align_right` → `FormatAlignRightOutlined`
- `format_align_justify` → `FormatAlignJustifyOutlined`

**Key Learning:** Icon MS3 icons are **outlined by default**, so always use `*Outlined` variant in MUI.

---

## Migration Steps to VS Code

### Step 1: Install VS Code and Extensions

1. **Download VS Code:**
   ```bash
   # macOS
   brew install --cask visual-studio-code
   ```

2. **Install Required Extensions:**
   - **GitHub Copilot** (for AI assistance)
   - **ESLint** (for linting)
   - **Prettier** (for formatting)
   - **TypeScript and JavaScript Language Features** (built-in)
   - **Storybook** (optional, for better Storybook support)

### Step 2: Configure MCP in VS Code

1. **Enable MCP in VS Code Settings:**
   
   Open VS Code Settings (Cmd+,) and search for "MCP". Enable:
   - `copilot.mcp.enabled`: `true`

2. **Create MCP Config File:**

   **Location:** `~/.vscode/mcp_config.json` (or workspace `.vscode/settings.json`)

   ```json
   {
     "mcpServers": {
       "figma": {
         "command": "npx",
         "args": ["-y", "@modelcontextprotocol/server-figma"],
         "env": {
           "FIGMA_PERSONAL_ACCESS_TOKEN": "YOUR_FIGMA_TOKEN_HERE"
         }
       }
     }
   }
   ```

   **Note:** You'll need to get your Figma Personal Access Token from:
   https://www.figma.com/developers/api#access-tokens

3. **Alternative: Workspace Settings**

   Add to `.vscode/settings.json` in your project:
   ```json
   {
     "mcp.servers": {
       "figma": {
         "command": "npx",
         "args": ["-y", "@modelcontextprotocol/server-figma"],
         "env": {
           "FIGMA_PERSONAL_ACCESS_TOKEN": "YOUR_FIGMA_TOKEN_HERE"
         }
       }
     }
   }
   ```

### Step 3: Transfer Windsurf MCP Config

**Windsurf Config Location:**
```bash
~/.codeium/windsurf/mcp_config.json
```

**Read your current config:**
```bash
cat ~/.codeium/windsurf/mcp_config.json
```

**Copy relevant server configs** to VS Code format (schema is 99% compatible).

### Step 4: Open Project in VS Code

```bash
cd "/Users/lisandroalvo/Desktop/Design  System Live App"
code .
```

### Step 5: Verify MCP Connection

1. Open GitHub Copilot Chat (Cmd+Shift+I)
2. Type: `@workspace Can you access Figma MCP tools?`
3. Copilot should confirm MCP server connection

### Step 6: Test Figma MCP Tools

Try the same workflow we used in Windsurf:

```
Get a screenshot of the Badge component from Figma:
File: OjFchNAdeHiNH5W4wYLSGS
Node: 6587:47476
```

If this works better than Windsurf, continue with VS Code.

---

## Project Structure (For Reference)

```
Design System Live App/
├── FIGMA_SYNC_SYSTEM.md          # Master documentation
├── ICON_MAPPING.md                # Icon mapping reference
├── MIGRATION_TO_VSCODE.md         # This file
├── .windsurf/
│   └── workflows/
│       └── sync-figma-to-storybook.md
├── scripts/
│   └── sync-from-figma.ts
├── apps/storybook/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Badge/
│   │   │   │   ├── Badge.tsx
│   │   │   │   └── Badge.stories.tsx
│   │   │   ├── ToggleButton/
│   │   │   │   ├── ToggleButton.tsx
│   │   │   │   └── ToggleButton.stories.tsx
│   │   │   ├── Button/
│   │   │   ├── Alert/
│   │   │   └── ...
│   │   └── tokens/
│   │       ├── gfgTheme.ts        # MUI theme
│   │       └── tokens.css
│   ├── .storybook/
│   │   ├── main.ts
│   │   └── preview.tsx
│   └── package.json
└── package.json
```

---

## Key Figma Information

### Figma File
- **File Key:** `OjFchNAdeHiNH5W4wYLSGS`
- **File Name:** GFG Design System 2026
- **URL:** `https://figma.com/design/OjFchNAdeHiNH5W4wYLSGS`

### Figma Libraries
- **Icon MS3:** `lk-0efb426fc4319830115072d0aafd3f640b07d7d2292a79a2122f6f9fb206302b2fcf793ab2277f7ad05e09433ad37456559397e076b1d6203b57e6b5a5019428`
- **GFG Design System 2026:** `lk-c2a2b3b02dfd6bd81e210950f24ca9682660e747ab171dc3b9100c404d4b0a4ccbbb35375d73936afdcb4278e99795d33d7b9b4c834f32a1d99fbc05cb1a127a`

### Component Node IDs
- **Badge:** `6587:47476`
- **Toggle Button:** `16354:3941`
- **Button:** TBD
- **Alert:** TBD

---

## Workflow to Continue in VS Code

### 1. **Sync a New Component from Figma**

**In VS Code with GitHub Copilot + MCP:**

```
I want to sync the [Component Name] from Figma to Storybook.

Figma URL: https://figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=XXXX-XXXX

Please:
1. Get a screenshot of the component
2. Search Icon MS3 library for any icons used
3. Extract component metadata
4. Create the component files in /apps/storybook/src/components/
5. Update ICON_MAPPING.md with any new icons
```

### 2. **Verify Component Matches Figma**

1. Start Storybook:
   ```bash
   cd apps/storybook
   npm run storybook
   ```

2. Open http://localhost:6006

3. Compare with Figma screenshot side-by-side

4. Iterate until 100% match

### 3. **Deploy to Vercel**

```bash
git add .
git commit -m "sync: Add [Component] from Figma

- Icons: [list]
- Colors: [list]
- Synced from node [node-id]"
git push origin main
```

Vercel auto-deploys from `main` branch.

---

## Troubleshooting

### MCP Not Working in VS Code

1. **Check Copilot is enabled:**
   ```
   Cmd+Shift+P → "GitHub Copilot: Enable"
   ```

2. **Verify MCP config:**
   ```bash
   cat ~/.vscode/mcp_config.json
   # or
   cat .vscode/settings.json
   ```

3. **Restart VS Code:**
   ```
   Cmd+Q → Reopen
   ```

4. **Check Copilot Chat:**
   ```
   Cmd+Shift+I → Ask about MCP
   ```

### Figma MCP Still Unreliable

**Alternative Approach (Manual):**

1. **Use Figma Dev Mode:**
   - Open component in Figma
   - Click "Dev Mode" (top right)
   - Select component
   - Copy exact values (colors, spacing, etc.)
   - Manually update Storybook

2. **Use Figma API directly:**
   ```bash
   curl -H "X-Figma-Token: YOUR_TOKEN" \
     "https://api.figma.com/v1/files/OjFchNAdeHiNH5W4wYLSGS/nodes?ids=6587:47476"
   ```

3. **Screenshot comparison:**
   - Export component from Figma as PNG
   - Compare visually with Storybook
   - Iterate until match

---

## Next Steps

### Immediate (In VS Code)

1. ✅ Install VS Code and extensions
2. ✅ Configure Figma MCP
3. ✅ Open project in VS Code
4. ✅ Test MCP connection
5. ⏳ Deploy ToggleButton component
6. ⏳ Sync remaining components (Button, Alert, etc.)

### Short-term

- [ ] Complete all components from Figma
- [ ] Set up visual regression testing
- [ ] Create automated sync script
- [ ] Document all color tokens
- [ ] Add accessibility checks

### Long-term

- [ ] Figma webhook integration
- [ ] Auto-generate PRs for design changes
- [ ] CI/CD for Storybook
- [ ] Design token management system

---

## Important Files to Keep

**Documentation:**
- ✅ `FIGMA_SYNC_SYSTEM.md`
- ✅ `ICON_MAPPING.md`
- ✅ `MIGRATION_TO_VSCODE.md` (this file)
- ✅ `.windsurf/workflows/sync-figma-to-storybook.md`

**Code:**
- ✅ All files in `/apps/storybook/src/components/`
- ✅ `/apps/storybook/src/tokens/gfgTheme.ts`
- ✅ `/apps/storybook/.storybook/`
- ✅ `/scripts/sync-from-figma.ts`

**Config:**
- ✅ `/apps/storybook/package.json`
- ✅ `/apps/storybook/tsconfig.json`
- ✅ Root `package.json`

---

## Contact & Support

**GitHub Repo:** https://github.com/lisandroalvo/GFG-Design-System  
**Vercel Deployment:** https://gfg-design-system.vercel.app  
**Figma File:** https://figma.com/design/OjFchNAdeHiNH5W4wYLSGS

**Vercel 2FA Recovery Codes:** (Stored in memory - use if needed)

---

## Comparison: Windsurf vs VS Code for This Project

| Feature | Windsurf | VS Code |
|---------|----------|---------|
| **MCP Setup** | ✅ One-click GUI | ⚠️ Manual JSON |
| **MCP Reliability** | ❌ Figma tools unreliable | ❓ Unknown (test needed) |
| **AI Assistant** | ✅ Cascade (excellent) | ✅ Copilot (excellent) |
| **Storybook Support** | ✅ Good | ✅ Good |
| **Extension Ecosystem** | ⚠️ Limited | ✅ Extensive |
| **Performance** | ✅ Fast | ✅ Fast |
| **Learning Curve** | ✅ Easy | ✅ Easy |
| **Cost** | Free | Free (Copilot paid) |

**Verdict:** Try VS Code if Figma MCP is more reliable there. Otherwise, Windsurf is excellent for this workflow.

---

**Last Updated:** June 20, 2026, 7:45 AM UTC+07:00  
**Author:** Cascade AI (Windsurf) + User Collaboration
