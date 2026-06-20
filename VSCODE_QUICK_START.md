# VS Code Quick Start Guide

**Project:** GFG Design System 2026 - Storybook  
**Date:** June 20, 2026

---

## 🚀 Quick Setup (5 Minutes)

### 1. Install VS Code
```bash
brew install --cask visual-studio-code
```

### 2. Install Extensions
Open VS Code → Extensions (Cmd+Shift+X) → Install:
- **GitHub Copilot** (required for MCP)
- **ESLint**
- **Prettier**

### 3. Configure Figma MCP

Create `~/.vscode/mcp_config.json`:
```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-figma"],
      "env": {
        "FIGMA_PERSONAL_ACCESS_TOKEN": "GET_FROM_FIGMA_SETTINGS"
      }
    }
  }
}
```

**Get Figma Token:**
1. Go to https://www.figma.com/developers/api#access-tokens
2. Generate Personal Access Token
3. Paste in config above

### 4. Open Project
```bash
cd "/Users/lisandroalvo/Desktop/Design  System Live App"
code .
```

### 5. Test MCP
- Open Copilot Chat (Cmd+Shift+I)
- Ask: `Can you access Figma MCP?`
- Should confirm connection ✅

---

## 📋 What We've Built

### Components Completed
1. **Badge** ✅ (Deployed to Vercel)
   - Node: `6587:47476`
   - Icon: `MailOutlined`
   
2. **ToggleButton** ✅ (Local only)
   - Node: `16354:3941`
   - Icons: FormatAlign* (Left/Center/Right/Justify)

### Documentation
- `FIGMA_SYNC_SYSTEM.md` - Complete system docs
- `ICON_MAPPING.md` - Icon reference
- `MIGRATION_TO_VSCODE.md` - Full migration guide

---

## 🎯 Continue Working

### Sync New Component from Figma

**In Copilot Chat:**
```
Sync [Component] from Figma to Storybook:
URL: https://figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=XXXX-XXXX

1. Get screenshot
2. Find icons in Icon MS3
3. Create component files
4. Update ICON_MAPPING.md
```

### Run Storybook
```bash
cd apps/storybook
npm run storybook
# Opens at http://localhost:6006
```

### Deploy to Vercel
```bash
git add .
git commit -m "sync: Add [Component] from Figma"
git push origin main
# Auto-deploys to https://gfg-design-system.vercel.app
```

---

## 📊 Key Info

**Figma File:** `OjFchNAdeHiNH5W4wYLSGS`  
**GitHub:** `https://github.com/lisandroalvo/GFG-Design-System`  
**Vercel:** `https://gfg-design-system.vercel.app`  
**Local:** `http://localhost:6006`

**Icon MS3 Library:** Material Design Icons (outlined)  
**Theme Colors:** Pink primary (#d946ef), Brown secondary (#333333)

---

## ⚡ Common Commands

```bash
# Start Storybook
cd apps/storybook && npm run storybook

# Clear cache and restart
rm -rf .cache node_modules/.vite && npm run storybook

# Check TypeScript
npx tsc --noEmit

# Format code
npx prettier --write "src/**/*.{ts,tsx}"

# Lint
npx eslint "src/**/*.{ts,tsx}"

# Git workflow
git add .
git commit -m "your message"
git push origin main
```

---

## 🆘 Troubleshooting

**MCP not working?**
1. Check Copilot is enabled (Cmd+Shift+P → "GitHub Copilot: Enable")
2. Verify `~/.vscode/mcp_config.json` exists
3. Restart VS Code (Cmd+Q)

**Storybook not loading?**
```bash
cd apps/storybook
rm -rf .cache node_modules/.vite
npm run storybook
```

**Icons wrong?**
- Check `ICON_MAPPING.md`
- Icon MS3 = Outlined (use `*Outlined` in MUI)

---

## 📚 Full Documentation

See `MIGRATION_TO_VSCODE.md` for complete details.

---

**Ready to go!** 🎉
