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

**pnpm**

```bash
pnpm add @lisandroalvo/gfg-design-system
```

**npm**

```bash
npm install @lisandroalvo/gfg-design-system
```

### 3. Peer dependencies

Your project must have these installed:

**pnpm**

```bash
pnpm add react react-dom @mui/material @emotion/react @emotion/styled
```

**npm**

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

| Component  | Figma node     | Status      |
|------------|----------------|-------------|
| Button     | `6543:36744`   | ✅ Approved |
| TextField  | `16350:35724`  | ✅ Approved |
| Alert      | `6595:48211`   | ✅ Approved |
| Badge      | `6587:47500`   | ✅ Approved |

Components not yet approved (not exported): Card, Dialog.

---

## Local development

### Setup

```bash
# Enable corepack (first time only, may need sudo)
corepack enable

# Install all workspace dependencies
pnpm install
```

### Run Storybook

```bash
pnpm storybook
```

### Build the package

```bash
pnpm build
```

### Build Storybook

```bash
pnpm build:storybook
```

### Type check (all packages)

```bash
pnpm typecheck
```

### Validate the package archive

```bash
cd packages/design-system
npm pack --dry-run
```

This lists all files that will be included in the published package without creating a real release.

---

## Releasing a new version

1. Update the version in `packages/design-system/package.json` (semver: patch / minor / major).
2. Commit and push the version bump to `main`.
3. Wait for CI to pass.
4. Go to **GitHub → Releases → Draft a new release**.
5. Create a new tag matching the version with a `v` prefix — for example `v0.1.0`.
6. Publish the release.
7. The `publish-package.yml` workflow triggers automatically, validates that the tag matches the package version, and publishes to GitHub Packages.
8. Verify the package under **GitHub → Packages → gfg-design-system**.

---

## Repository permissions

To allow another repository to install this package via `GITHUB_TOKEN` in CI, grant it access:

**GitHub → Settings → Packages → `gfg-design-system` → Manage access → Add repository**

For personal access tokens, the token needs `read:packages` scope.

See [docs/GITHUB_PACKAGES_SETUP.md](../../docs/GITHUB_PACKAGES_SETUP.md) for full step-by-step GitHub UI instructions.
