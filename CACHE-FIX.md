# 🔄 Portal Cache Fix Guide

## The Problem

Your portal is updated to show only 6 components, but browsers cache the old version showing 128 components.

## The Solution

### Method 1: Wait for GitHub Pages Cache (Easiest)

**Wait 5-10 minutes** after the latest deployment, then:

1. Visit: https://lisandroalvo.github.io/GFG-Design-System/
2. Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)

### Method 2: Clear Browser Cache (Most Reliable)

#### Chrome/Edge:
1. Visit: https://lisandroalvo.github.io/GFG-Design-System/
2. Press `F12` (opens DevTools)
3. **Right-click** the refresh button
4. Select **"Empty Cache and Hard Reload"**

#### Safari:
1. Safari → Settings → Advanced → Check "Show Develop menu"
2. Visit: https://lisandroalvo.github.io/GFG-Design-System/
3. Develop → Empty Caches
4. Refresh page

#### Firefox:
1. Visit: https://lisandroalvo.github.io/GFG-Design-System/
2. Press `Ctrl + Shift + Delete` (Windows) or `Cmd + Shift + Delete` (Mac)
3. Select "Cached Web Content"
4. Click "Clear Now"
5. Refresh page

### Method 3: Incognito/Private Window (Instant)

1. Open **Incognito/Private window**
2. Visit: https://lisandroalvo.github.io/GFG-Design-System/
3. You'll see only 6 components immediately!

### Method 4: Different Browser

Try a browser you don't normally use:
- Chrome → Try Firefox
- Safari → Try Chrome
- Edge → Try Safari

---

## What You Should See (Correct Version)

✅ **Page Title**: "GFG Design System - Storybook Components"  
✅ **Heading**: "Storybook Components"  
✅ **Button**: "Open Storybook →" (links to Vercel)  
✅ **Components**: Only 6 cards (Button, Alert, Badge, Card, TextField, Dialog)

## What You're Seeing (Cached Old Version)

❌ **Page Title**: "Design System Live - Interactive Component Playground"  
❌ **Many components**: 128 component cards  
❌ **Old layout**: Different structure

---

## Latest Deployment

- **Commit**: `6a0dc39` - "fix: force cache refresh"
- **Date**: June 5, 2026
- **Changes**: Updated title and version to force reload

---

## Still Not Working?

If none of these work after 10 minutes, let me know and I'll add a JavaScript cache-buster.
