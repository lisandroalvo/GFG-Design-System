# GitHub Packages Setup Guide

This guide covers the GitHub UI steps you must complete yourself.
No code changes are described here — those are handled by the repository.

---

## 1. Verify GitHub Actions are enabled

**Why:** If Actions were ever disabled, no CI or publishing workflow will run.

1. Go to **GitHub → lisandroalvo/GFG-Design-System → Settings → Actions → General**.
2. Under **Actions permissions**, confirm **Allow all actions and reusable workflows** is selected (or the appropriate restriction for your org).
3. Click **Save** if you made a change.

---

## 2. Verify workflow permissions

**Why:** The publish workflow uses the built-in `GITHUB_TOKEN` to write to GitHub Packages. This requires write access to be enabled.

1. Go to **GitHub → lisandroalvo/GFG-Design-System → Settings → Actions → General**.
2. Scroll to **Workflow permissions**.
3. Confirm **Read and write permissions** is selected.
   - If it shows **Read repository contents and packages permissions**, that is sufficient only if packages:write is explicitly granted in the workflow YAML (which it is in `publish-package.yml`).
4. Click **Save** if you made a change.

---

## 3. Protect the default branch

**Why:** Prevents force-pushes and accidental direct commits to `main`.

1. Go to **GitHub → lisandroalvo/GFG-Design-System → Settings → Branches**.
2. Under **Branch protection rules**, click **Add rule**.
3. Set **Branch name pattern** to `main`.
4. Enable:
   - **Require a pull request before merging**
   - **Require status checks to pass before merging** (see section 4)
   - **Do not allow bypassing the above settings**
5. Click **Create**.

---

## 4. Require CI before merging

**Why:** Prevents merging code that fails type checking or builds.

After the CI workflow (`.github/workflows/ci.yml`) has run at least once:

1. Go to **GitHub → lisandroalvo/GFG-Design-System → Settings → Branches → main → Edit**.
2. Under **Require status checks to pass before merging**, search for and add:
   - `Type-check, build, validate` (the CI job name)
3. Enable **Require branches to be up to date before merging**.
4. Click **Save changes**.

---

## 5. Create the first GitHub Release (publishes the package)

**Why:** The publish workflow only triggers on `release: [published]` events.

1. Build and confirm CI passes on `main`.
2. Confirm `packages/design-system/package.json` version is `0.1.0`.
3. Go to **GitHub → lisandroalvo/GFG-Design-System → Releases → Draft a new release**.
4. Click **Choose a tag** and type `v0.1.0`. Select **Create new tag: v0.1.0 on publish**.
5. Set the **Release title** to `v0.1.0`.
6. Add release notes describing what is included.
7. Click **Publish release**.
8. Go to **Actions** and confirm the `Publish Design System Package` workflow starts and passes.

**Important:** The package version in `packages/design-system/package.json` must exactly match the tag without the `v` prefix. If the tag is `v0.1.0`, the package version must be `0.1.0`. The workflow enforces this and will fail if they do not match.

---

## 6. Verify the package after publishing

1. Go to **GitHub → lisandroalvo → Packages**.
2. You should see `gfg-design-system` listed.
3. Click it to confirm version `0.1.0` is present and the file list matches what `npm pack --dry-run` showed locally.

---

## 7. Grant another repository permission to install the package

By default, GitHub Packages hosted in a personal account (not an org) requires explicit access for other repositories to install via `GITHUB_TOKEN`.

**Option A — Personal Access Token (PAT)**

The consuming developer creates a PAT with `read:packages` scope and sets it as `NODE_AUTH_TOKEN` in their environment or CI secrets. This always works.

**Option B — Repository access (if supported)**

1. Go to **GitHub → lisandroalvo → Packages → gfg-design-system → Package settings**.
2. Under **Manage access**, click **Add repository**.
3. Search for and add the consuming repository.
4. Set the role to **Read**.

The consuming repository's CI can then use its built-in `GITHUB_TOKEN` as `NODE_AUTH_TOKEN` without a PAT.

**Note:** This feature is available on GitHub Free for public repositories. For private repositories, it requires GitHub Pro or higher.

---

## 8. How GitHub Actions authentication works

The `publish-package.yml` workflow uses:

```yaml
env:
  NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

`GITHUB_TOKEN` is automatically provided by GitHub Actions for every workflow run. It is scoped to the repository that triggered the workflow and has the permissions declared in the workflow's `permissions` block:

```yaml
permissions:
  contents: read
  packages: write
```

This means:
- The token can write packages owned by `lisandroalvo/GFG-Design-System`.
- It cannot read private packages in other repositories.
- It is not the same as a Personal Access Token.
- You do not need to create or rotate it — GitHub manages it.

---

## 9. When a local developer needs a Personal Access Token

A local developer needs a PAT to install the package if it is private or scoped to GitHub Packages:

1. Go to **GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens** (or classic tokens).
2. Generate a new token with **`read:packages`** scope.
3. Add it to their shell profile:

   ```bash
   export NODE_AUTH_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
   ```

4. Their `.npmrc` (or the project root `.npmrc`) must contain:

   ```
   @lisandroalvo:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
   ```

**Do not commit the token.** The `.npmrc` in this repository uses `${NODE_AUTH_TOKEN}` (an environment variable reference), not a real token.

For CI in consuming repositories, add the PAT as a repository secret named `NODE_AUTH_TOKEN` and reference it in the workflow:

```yaml
- name: Install dependencies
  run: pnpm install --frozen-lockfile
  env:
    NODE_AUTH_TOKEN: ${{ secrets.NODE_AUTH_TOKEN }}
```

---

## 10. Fork pull-request security

The publish workflow never runs on pull requests, only on `release: [published]` events and manual `workflow_dispatch`. Fork pull requests cannot access `GITHUB_TOKEN` secrets from the base repository, so they cannot publish packages even if someone modified the workflow YAML in their fork — the modified workflow would only have access to the fork's own token.

No additional configuration is needed for this protection.

---

## Summary checklist

| Step | Where | Required before |
|------|--------|-----------------|
| Actions enabled | Settings → Actions | First CI run |
| Workflow permissions (read/write) | Settings → Actions | First publish |
| Branch protection on `main` | Settings → Branches | Ongoing |
| Status checks required | Settings → Branches | After first CI run |
| First GitHub Release created | Releases | First publish |
| Package verified | Packages tab | Confirming publish worked |
| Consumer repository access | Package settings | Consuming repo CI install |
