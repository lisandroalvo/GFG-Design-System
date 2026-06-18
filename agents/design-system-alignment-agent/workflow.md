# Design System Alignment Agent - Review Workflow

## Overview

This workflow defines how the agent reviews a single component for alignment between Figma design, design tokens, and Storybook implementation.

**Duration**: ~5-10 minutes per component  
**Output**: Detailed alignment report + action lists

---

## Workflow Phases

### Phase 1: Component Identification

**Goal**: Locate all relevant files and data for the component.

#### Steps

1. **Identify Component Name**
   - Input: Component name (e.g., "Button", "Alert", "TextField")
   - Normalize name (handle case variations)

2. **Locate Storybook Files**
   ```
   apps/storybook/src/components/[Component]/
   ├── [Component].tsx           # Implementation
   ├── [Component].stories.tsx   # Stories
   └── README.md                 # Docs (if exists)
   ```

3. **Locate Token Data**
   ```
   design-tokens/
   ├── component-properties.json  # Component metadata
   ├── colors.json                # Color tokens
   ├── typography.json            # Typography tokens
   └── spacing.json               # Spacing tokens (if exists)
   ```

4. **Locate Theme Configuration**
   ```
   apps/storybook/src/tokens/
   └── gfgTheme.ts                # MUI theme overrides
   ```

5. **Check Production Reference** (optional)
   ```
   index.html                     # Search for component mentions
   ```

#### Output
- List of files found
- List of files missing
- Component metadata (if available)

---

### Phase 2: Data Collection

**Goal**: Extract all relevant information about the component.

#### 2.1 Extract Figma Data

From `design-tokens/component-properties.json`:
- Component variants (if available)
- Component properties
- Default values
- Figma node ID

#### 2.2 Extract Token References

From token files:
- Colors used by this component
- Typography styles used
- Spacing values used
- Border radius values
- Shadow/elevation values

#### 2.3 Extract Storybook Implementation

From `[Component].tsx`:
- Props interface
- Default prop values
- Variants implemented
- States implemented
- Token usage (import statements, references)
- Hardcoded values (colors, sizes, etc.)

#### 2.4 Extract Storybook Stories

From `[Component].stories.tsx`:
- Stories defined
- Variants covered in stories
- States covered in stories
- Documentation (JSDoc, comments)

#### 2.5 Extract Theme Overrides

From `gfgTheme.ts`:
- MUI component overrides for this component
- Style overrides
- Default props overrides

#### Output
- Structured data object with all extracted information
- List of tokens referenced
- List of hardcoded values found

---

### Phase 3: Alignment Analysis

**Goal**: Compare implementation against source of truth.

#### 3.1 Variant Coverage Check

**Question**: Are all Figma variants implemented in Storybook?

- List Figma variants (from component-properties.json)
- List Storybook variants (from props interface)
- Identify missing variants
- Identify extra variants (not in Figma)

**Output**:
- ✅ Fully covered variants
- ⚠️ Missing variants
- ℹ️ Extra variants (may be intentional)

#### 3.2 State Coverage Check

**Question**: Are all interactive states implemented?

Check for:
- Default state
- Hover state (`:hover` styles or `onMouseEnter`)
- Active/pressed state (`:active`)
- Focus state (`:focus`, `onFocus`)
- Disabled state (`disabled` prop)
- Loading state (if applicable)
- Error state (if applicable)

**Output**:
- ✅ Implemented states
- ⚠️ Missing states

#### 3.3 Token Usage Check

**Question**: Does the component use design tokens correctly?

For each visual property:
- **Colors**: Uses theme colors or hardcoded?
- **Typography**: Uses theme typography or hardcoded?
- **Spacing**: Uses theme spacing or hardcoded?
- **Border radius**: Uses theme or hardcoded?
- **Shadows**: Uses theme or hardcoded?

**Output**:
- ✅ Correct token usage
- ⚠️ Hardcoded values found
- ❌ Incorrect token references

#### 3.4 Prop Naming Check

**Question**: Do prop names match design intent?

Compare:
- Figma property names
- Storybook prop names
- MUI prop names (if wrapping MUI)

**Output**:
- ✅ Consistent naming
- ⚠️ Naming inconsistencies

#### 3.5 Documentation Check

**Question**: Is the component properly documented?

Check for:
- Component description (JSDoc or README)
- Prop descriptions
- Usage examples in stories
- Accessibility notes
- Design token references
- Link to Figma source

**Output**:
- ✅ Well documented
- ⚠️ Missing documentation
- ℹ️ Documentation suggestions

#### 3.6 Accessibility Check

**Question**: Does the component meet basic accessibility standards?

Check for:
- Semantic HTML elements
- ARIA attributes (when needed)
- Keyboard navigation support
- Focus indicators
- Color contrast (if colors are hardcoded)
- Screen reader text (when needed)

**Output**:
- ✅ Accessibility features present
- ⚠️ Missing accessibility features
- ❌ Accessibility violations

---

### Phase 4: Issue Classification

**Goal**: Categorize findings into actionable buckets.

#### 4.1 Code/Storybook Fixes

Issues that can be fixed in code:

**Examples**:
- Replace hardcoded color with token
- Add missing variant
- Add missing state
- Fix prop naming
- Add accessibility attributes
- Improve documentation

**Criteria**:
- Source of truth is clear (Figma or tokens)
- Fix is straightforward
- No breaking changes
- Low risk

#### 4.2 Figma Actions

Issues that require changes in Figma:

**Examples**:
- Missing design tokens in Figma
- Inconsistent variant naming in Figma
- Missing states in Figma design
- Accessibility issues in design (contrast, etc.)
- Missing component properties

**Criteria**:
- Design is the source of truth
- Code is correct, design needs update
- Requires designer input

#### 4.3 Human Decisions

Issues that require human judgment:

**Examples**:
- Conflicting sources (Figma vs. tokens vs. code)
- Breaking changes required
- Performance vs. fidelity tradeoffs
- New patterns not in design system
- Ambiguous design intent

**Criteria**:
- No clear source of truth
- Multiple valid approaches
- Significant impact on users/developers
- Requires product/design decision

---

### Phase 5: Scoring

**Goal**: Calculate alignment score (0-100%).

#### Scoring Formula

```
Alignment Score = (
  Variant Coverage × 30% +
  Token Usage × 25% +
  State Coverage × 20% +
  Documentation × 15% +
  Accessibility × 10%
)
```

#### Variant Coverage Score
```
Score = (Implemented Variants / Total Figma Variants) × 100
```

#### Token Usage Score
```
Score = (Token References / Total Visual Properties) × 100
```

#### State Coverage Score
```
Score = (Implemented States / Required States) × 100
```

#### Documentation Score
```
Score = (Documented Items / Total Items) × 100
Items: Component, Props, Usage, Accessibility, Tokens
```

#### Accessibility Score
```
Score = (A11y Features Present / A11y Features Required) × 100
```

#### Overall Rating

- **90-100%**: ✅ Excellent alignment
- **75-89%**: ✅ Good alignment (minor issues)
- **60-74%**: ⚠️ Fair alignment (needs work)
- **Below 60%**: ❌ Poor alignment (major issues)

---

### Phase 6: Report Generation

**Goal**: Create actionable report.

#### Report Structure

See `report-template.md` for full format.

**Key Sections**:
1. Executive Summary
2. Alignment Score
3. Findings (by category)
4. Code Fixes (if any)
5. Figma Actions (if any)
6. Human Decisions (if any)
7. Files Reviewed
8. Recommended Next Steps

#### Report Outputs

1. **Markdown Report**
   - Saved to `agents/reports/[component]-review-[date].md`
   - Full detailed report

2. **Console Summary**
   - Brief overview for quick review
   - Alignment score + critical issues

3. **PR Comment Draft** (optional)
   - Summary for pull request
   - Highlights changes and risks

4. **Team Update Draft** (optional)
   - Summary for Jira/Linear/Slack
   - Focus on action items

---

### Phase 7: Fix Application (Optional)

**Goal**: Apply approved code fixes.

**IMPORTANT**: This phase only runs if explicitly approved by human.

#### Fix Workflow

1. **Human Reviews Report**
   - Reads generated report
   - Decides which fixes to apply

2. **Human Approves Fixes**
   - Explicit approval: "Apply code fixes for Button component"
   - Or selective: "Apply fixes 1, 3, and 5"

3. **Agent Applies Fixes**
   - Makes code changes
   - Updates documentation
   - Adds comments explaining changes

4. **Agent Reports Changes**
   - Lists files modified
   - Shows diffs
   - Explains each change
   - Notes any risks

5. **Human Reviews Changes**
   - Reviews diffs
   - Tests locally
   - Commits and pushes (agent never pushes)

---

## Workflow Variations

### Batch Review Mode

Review multiple components in sequence:

```
For each component in [list]:
  1. Run Phases 1-6
  2. Generate report
  3. Aggregate scores
  4. Generate summary report
```

**Output**: 
- Individual component reports
- Batch summary report
- Overall design system health score

### PR Review Mode

Review only changed components in a PR:

```
1. Identify changed files
2. Extract component names
3. For each component:
   - Run Phases 1-6
   - Focus on changed areas
4. Generate PR review comment
```

**Output**:
- PR comment with findings
- Risk assessment
- Approval recommendation

### Quick Check Mode

Fast alignment check (skip detailed analysis):

```
1. Component Identification
2. Quick token scan
3. Quick variant check
4. Generate brief report
```

**Output**:
- Pass/Fail status
- Critical issues only
- Alignment score

---

## Error Handling

### Component Not Found

```
❌ Component not found in Storybook

Checked:
- apps/storybook/src/components/[Component]/

Suggestions:
1. Check component name spelling
2. Check if component exists in Figma only
3. Create component in Storybook first
```

### Missing Token Data

```
⚠️ Component metadata not found in design-tokens/

This may mean:
1. Component is new and not yet synced from Figma
2. Figma sync needs to be run
3. Component exists only in Storybook

Recommendation: Run Figma sync or proceed with limited data
```

### Conflicting Data

```
⚠️ Conflicting information found

Source 1 (Figma): Button has 3 variants
Source 2 (Storybook): Button has 5 variants

Action: Added to Human Decisions list
```

---

## Success Criteria

A successful review produces:

✅ **Complete Report**
- All sections filled
- Clear findings
- Actionable recommendations

✅ **Accurate Classification**
- Issues correctly categorized
- No false positives
- No missed issues

✅ **Actionable Output**
- Developer knows what to fix
- Designer knows what to update
- Product knows what to decide

✅ **Preserved Safety**
- No unauthorized modifications
- No production impact
- All changes approved

---

## Workflow Version

**Version**: 1.0.0 (2026-06-05)

**Next Improvements**:
- Visual diff against Figma screenshots
- Automated testing integration
- Performance metrics
- Bundle size analysis
