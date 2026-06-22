import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

// ── Real GFG Storybook components ─────────────────────────────────────────────
// Only importing components that have a .stories.tsx file in Storybook.
import { Button }    from '../Button/Button';
import { TextField } from '../TextField/TextField';
import { Alert }     from '../Alert/Alert';

// ── Missing component placeholder ─────────────────────────────────────────────
// Used ONLY as a loud debug indicator for components that do not exist in
// Storybook. Never reuse as a real UI element.
function MissingPlaceholder({ label }: { label: string }) {
  return (
    <div style={{
      background: '#ff00cc',
      border: '3px dashed #7700aa',
      borderRadius: 4,
      padding: '10px 16px',
      fontFamily: 'monospace',
      fontSize: 13,
      fontWeight: 700,
      color: '#ffffff',
      letterSpacing: '0.5px',
      userSelect: 'none',
    }}>
      ⛔ NOT FROM STORYBOOK — {label}
    </div>
  );
}

// ── Screen ────────────────────────────────────────────────────────────────────
function SimpleFormTestScreen() {
  const [firstName, setFirstName]   = useState('');
  const [lastName, setLastName]     = useState('');
  const [email, setEmail]           = useState('');
  const [submitted, setSubmitted]   = useState(false);
  const [error, setError]           = useState(false);

  function handleSubmit() {
    if (!firstName || !email) {
      setError(true);
      setSubmitted(false);
      return;
    }
    setError(false);
    setSubmitted(true);
  }

  function handleCancel() {
    setFirstName('');
    setLastName('');
    setEmail('');
    setSubmitted(false);
    setError(false);
  }

  return (
    // Outer page wrapper — minimal layout CSS only, no design-system styling
    <div style={{
      minHeight: '100vh',
      background: '#f5f5f5',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '48px 16px',
    }}>
      {/*
        ── MISSING: Card / Container component ──────────────────────────────
        Card.tsx exists but has NO .stories.tsx file in Storybook.
        Per rules: not a documented Storybook component → placeholder required.
        Using a plain div with minimal spacing CSS only.
      */}
      <div style={{ width: '100%', maxWidth: 480 }}>

        {/* ── MISSING: Typography component ───────────────────────────────
            No Typography component file or stories exist in Storybook.
            Shown as placeholder — title text is inside it for readability.   */}
        <MissingPlaceholder label="Missing: Typography component (page title 'Client Details')" />

        {/* Spacing only */}
        <div style={{ height: 24 }} />

        {/* ── MISSING: Card container ─────────────────────────────────── */}
        <MissingPlaceholder label="Missing: Card component (form container)" />

        <div style={{ height: 16 }} />

        {/* ── REAL: Alert — from Storybook (Alert.stories.tsx) ────────── */}
        {submitted && (
          <Alert severity="success" variant="standard">
            Client details saved successfully.
          </Alert>
        )}
        {error && (
          <Alert severity="error" variant="standard">
            First name and email are required.
          </Alert>
        )}

        {(submitted || error) && <div style={{ height: 16 }} />}

        {/* ── REAL: TextField × 3 — from Storybook (TextField.stories.tsx) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TextField
            variant="outlined"
            size="medium"
            label="First Name"
            placeholder="Enter first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            error={error && !firstName}
            helperText={error && !firstName ? 'First name is required' : undefined}
            fullWidth
          />

          <TextField
            variant="outlined"
            size="medium"
            label="Last Name"
            placeholder="Enter last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
          />

          <TextField
            variant="outlined"
            size="medium"
            label="Email Address"
            placeholder="Enter email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error && !email}
            helperText={error && !email ? 'Email is required' : undefined}
            fullWidth
          />
        </div>

        <div style={{ height: 28 }} />

        {/* ── REAL: Button × 2 — from Storybook (Button.stories.tsx) ───── */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
          {/* Secondary action — Figma: Variant=Outlined, Color=Secondary */}
          <Button
            variant="outlined"
            color="secondary"
            size="medium"
            onClick={handleCancel}
          >
            Cancel
          </Button>

          {/* Primary action — Figma: Variant=Contained, Color=Primary */}
          <Button
            variant="contained"
            color="primary"
            size="medium"
            onClick={handleSubmit}
          >
            Save Client
          </Button>
        </div>

      </div>
    </div>
  );
}

// ── Story config ──────────────────────────────────────────────────────────────
const meta: Meta = {
  title: 'Test Screens/Simple Form Test',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Simple Form Test Screen

A minimal test screen to evaluate GFG Storybook component usage.

### Component audit

| Element | Status | Source |
|---|---|---|
| First Name field | ✅ Real component | \`TextField.stories.tsx\` |
| Last Name field | ✅ Real component | \`TextField.stories.tsx\` |
| Email field | ✅ Real component | \`TextField.stories.tsx\` |
| Save button (contained/primary) | ✅ Real component | \`Button.stories.tsx\` |
| Cancel button (outlined/secondary) | ✅ Real component | \`Button.stories.tsx\` |
| Success / Error alerts | ✅ Real component | \`Alert.stories.tsx\` |
| Page title "Client Details" | ⛔ Placeholder | No Typography component in Storybook |
| Card / form container | ⛔ Placeholder | \`Card.tsx\` exists but has no \`.stories.tsx\` |

### Rules verified
- No new design-system components created
- No existing components modified
- No design tokens changed
- No external UI libraries used
- Missing components shown as loud pink debug placeholders only
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  name: 'Simple Form Test',
  render: () => <SimpleFormTestScreen />,
};
