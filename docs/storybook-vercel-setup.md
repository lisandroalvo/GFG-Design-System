# Storybook Deployment to Vercel

## Why Vercel?

- ✅ Free for open source projects
- ✅ Automatic deployments on push
- ✅ Custom domain support
- ✅ Fast CDN
- ✅ No GitHub Pages limitations

## One-Time Setup

### 1. Create Vercel Account

1. Go to https://vercel.com/signup
2. Sign up with your GitHub account
3. Authorize Vercel to access your repositories

### 2. Create New Project on Vercel

1. Click "Add New..." → "Project"
2. Import `lisandroalvo/GFG-Design-System` or `lisandroalvo/design-system-live-app`
3. Configure project:
   - **Framework Preset**: Other
   - **Root Directory**: `apps/storybook`
   - **Build Command**: `npm run build-storybook`
   - **Output Directory**: `storybook-static`
   - **Install Command**: `npm ci`
4. Click "Deploy"

### 3. Get Vercel Tokens

1. Go to https://vercel.com/account/tokens
2. Click "Create Token"
3. Name it: `GFG Storybook Deploy`
4. Copy the token (you'll only see it once!)

### 4. Add Secrets to GitHub

1. Go to your GitHub repo: https://github.com/lisandroalvo/GFG-Design-System/settings/secrets/actions
2. Click "New repository secret"
3. Add these secrets:
   - **Name**: `VERCEL_TOKEN`
   - **Value**: [paste the token from step 3]
   
4. Get your Vercel Project ID and Org ID:
   ```bash
   cd apps/storybook
   vercel link
   ```
   This creates `.vercel/project.json` with your IDs

5. Add these secrets to GitHub:
   - `VERCEL_ORG_ID` - from `.vercel/project.json`
   - `VERCEL_PROJECT_ID` - from `.vercel/project.json`

### 5. Push to Deploy

Once secrets are configured, every push to `main` that changes `apps/storybook/**` will automatically deploy!

## Your Storybook URL

After first deployment, your Storybook will be at:
- **Production**: `https://[your-project-name].vercel.app`
- **Custom Domain** (optional): Configure in Vercel dashboard

## Manual Deployment

To deploy manually without GitHub Actions:

```bash
cd apps/storybook
npm install -g vercel
vercel login
vercel --prod
```

## Troubleshooting

### Build Fails

Check the Vercel deployment logs:
1. Go to https://vercel.com/dashboard
2. Click your project
3. Click the failed deployment
4. View logs

### Wrong Base Path

If assets don't load, the base path might be wrong. Check `apps/storybook/.storybook/main.ts`:
- For Vercel root domain: Remove `config.base` or set to `'/'`
- For subdirectory: Set `config.base = '/your-path/'`

## Alternative: Chromatic

If you prefer Chromatic (made by Storybook team):

```bash
cd apps/storybook
npx chromatic --project-token=<your-token>
```

Get token from: https://www.chromatic.com/start
