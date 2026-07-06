# @lisandroalvo/gfg-design-system

GFG Design System React component library.

Built on [MUI](https://mui.com/), verified against Figma (file `OjFchNAdeHiNH5W4wYLSGS`).  
Visual documentation: [Storybook on Vercel](https://gfg-design-system.vercel.app) *(update URL when available)*

---

## Installation

### 1. Authenticate with GitHub Packages

Add a `.npmrc` file to the root of your consuming repository:

```
@lisandroalvo:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

Set `NODE_AUTH_TOKEN` in your environment to a GitHub Personal Access Token with **`read:packages`** scope. Do not commit a real token.

For CI, add `NODE_AUTH_TOKEN` as a repository secret and reference it in your workflow.

### 2. Install the package

```bash
npm install @lisandroalvo/gfg-design-system
```

### 3. Peer dependencies

Your project must have these installed:

```bash
npm install react react-dom @mui/material @emotion/react @emotion/styled
```

---

## Usage

### Wrap your app with the GFG theme

```tsx
import { ThemeProvider, CssBaseline } from "@mui/material";
import { gfgTheme } from "@lisandroalvo/gfg-design-system";

function App() {
  return (
    <ThemeProvider theme={gfgTheme}>
      <CssBaseline />
      {/* your app */}
    </ThemeProvider>
  );
}
```

### Import components

```tsx
import { Button, TextField, Alert, Badge } from "@lisandroalvo/gfg-design-system";

// Button
<Button variant="contained" color="primary">Save</Button>
<Button variant="outlined" color="secondary" size="small">Cancel</Button>

// TextField
<TextField label="Email" variant="outlined" />
<TextField label="Password" type="password" error helperText="Required" />

// Alert
<Alert severity="success" variant="filled" title="Done">Your changes were saved.</Alert>

// Badge
<Badge badgeContent={4} color="primary">
  <MailIcon />
</Badge>
```

### No separate stylesheet required

Components use MUI's CSS-in-JS (Emotion). No `.css` import is needed — styles are injected at runtime when the ThemeProvider is present.

---

## Approved components

| Component  | Figma node     | Status   |
|------------|----------------|----------|
| Button     | `6543:36744`   | ✅ Approved |
| TextField  | `16350:35724`  | ✅ Approved |
| Alert      | `6595:48211`   | ✅ Approved |
| Badge      | `6587:47500`   | ✅ Approved |

Components not yet approved (not exported): Card, Dialog.

---

## Releasing a new version

1. Update the version in `packages/design-system/package.json` (semver: patch / minor / major).
2. Commit and push to `main`.
3. Create a GitHub Release in the repository UI, tagged `v0.1.x` (matching the package version).
4. The `publish-package.yml` workflow triggers automatically and publishes to GitHub Packages.

---

## Repository permissions

To allow another repository to install this package via `GITHUB_TOKEN` in CI, grant it access:

**GitHub → Settings → Packages → `gfg-design-system` → Manage access → Add repository**

For personal access tokens, the token needs `read:packages` scope.
