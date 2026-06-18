# Design System Alignment Agent - Brain Core

## What Is This?

The **Design System Alignment Agent** is an intelligent automation system that reviews your design system components for alignment between:

1. **Design source** (Figma)
2. **Design tokens** (JSON files)
3. **Coded components** (Storybook)
4. **Documentation**

The agent identifies discrepancies, classifies them by action type, and generates actionable reports—all while protecting your production code.

**Current Status**: Phase 1 - Brain Core Foundation (Documentation & Architecture)

---

## Why Brain Core?

Before building automation, we need clear rules. The Brain Core defines:

- **What the agent can do** (and what it can't)
- **How it reviews components** (step-by-step workflow)
- **What it protects** (production code, secrets, deployments)
- **How it reports findings** (structured, actionable reports)

Think of it as the "constitution" for the agent. The actual automation will be built on top of these rules.

---

## What This Protects

### 🔒 Absolutely Protected

The agent will **NEVER** modify these without explicit human instruction:

- `index.html` - Your live production portal
- `design-tokens/` - Generated from Figma (manual edits get overwritten)
- `.env` - Secrets and API tokens
- `.github/workflows/` - Deployment automation
- Git operations - No commits, pushes, or merges

### ⚠️ Modifiable with Approval

The agent can modify these **only after human approval**:

- `apps/storybook/src/components/` - Component implementations
- `apps/storybook/src/**/*.stories.tsx` - Storybook stories
- Component documentation

### ✅ Always Allowed

The agent can always:

- Read any project files
- Analyze alignment
- Generate reports
- Suggest fixes (without applying them)

---

## How It Works

### Review Workflow

1. **Identify Component** - Locate all relevant files
2. **Collect Data** - Extract Figma metadata, tokens, and code
3. **Analyze Alignment** - Compare implementation against design
4. **Classify Issues** - Sort into Code Fixes, Figma Actions, or Human Decisions
5. **Generate Report** - Create detailed, actionable report
6. **Apply Fixes** - Only if explicitly approved by human

### Issue Classification

**Code Fixes** (fixable in Storybook):
- Replace hardcoded colors with tokens
- Add missing variants
- Fix prop naming
- Improve accessibility

**Figma Actions** (need designer):
- Missing design tokens
- Inconsistent naming in Figma
- Accessibility issues in design

**Human Decisions** (need judgment):
- Conflicting sources of truth
- Breaking changes
- Performance tradeoffs

---

## Brain Core Files

### Core Documentation

| File | Purpose |
|------|---------|
| `brain.md` | Agent identity, mission, responsibilities, decision rules |
| `permissions.md` | What the agent can read, modify, and must never touch |
| `workflow.md` | Step-by-step component review process |
| `report-template.md` | Standard format for review reports |
| `component-review-checklist.md` | Detailed checklist for component reviews |
| `product-vision.md` | Long-term vision and roadmap |
| `README.md` | This file - overview and getting started |

### Future Additions

| Folder | Purpose | Status |
|--------|---------|--------|
| `engine/` | Agent automation logic | Not started |
| `desktop/` | Desktop app UI | Not started |
| `adapters/` | Framework/tool adapters | Not started |
| `reports/` | Generated review reports | Auto-created |

---

## Alignment Scoring

Components are scored 0-100% based on:

- **Variant Coverage** (30%) - All Figma variants implemented?
- **Token Usage** (25%) - Using tokens vs. hardcoded values?
- **State Coverage** (20%) - All interactive states implemented?
- **Documentation** (15%) - Properly documented?
- **Accessibility** (10%) - Meets a11y standards?

**Ratings**:
- 90-100%: ✅ Excellent alignment
- 75-89%: ✅ Good alignment (minor issues)
- 60-74%: ⚠️ Fair alignment (needs work)
- Below 60%: ❌ Poor alignment (major issues)

---

## Example Report

```markdown
# Component Alignment Report: Button

**Alignment Score**: 85% (Good)
**Status**: ✅ Good alignment (minor issues)

## Findings

✅ What's Working Well:
- All variants implemented
- Uses theme colors correctly
- Good accessibility support

⚠️ Issues Found:
1. Border color hardcoded (#e0e0e0) - should use theme.palette.divider
2. Loading state missing
3. Documentation incomplete

## Code Fixes
Fix 1: Replace hardcoded border color
- File: `Button.tsx:45`
- Change: `border: '1px solid #e0e0e0'` → `border: '1px solid', borderColor: 'divider'`

## Recommended Next Steps
1. Apply code fix for border color
2. Add loading state variant
3. Complete documentation
```

---

## Safety Guarantees

### What the Agent Will NEVER Do

1. ❌ Modify `index.html` without explicit instruction
2. ❌ Push to git (all git operations are human-controlled)
3. ❌ Deploy to production
4. ❌ Delete files without approval
5. ❌ Modify secrets or environment variables
6. ❌ Change deployment workflows

### What Requires Approval

1. ⚠️ Modifying Storybook component code
2. ⚠️ Modifying Storybook stories
3. ⚠️ Adding dependencies
4. ⚠️ Changing configuration files

### What's Always Safe

1. ✅ Reading any project files
2. ✅ Analyzing alignment
3. ✅ Generating reports
4. ✅ Creating action lists

---

## Current GFG Components

The agent will review these 6 Storybook components:

1. **Button** - 270 variants (6 colors × 3 variants × 3 sizes × 5 states)
2. **Alert** - 12 variants (4 severities × 3 variants)
3. **Badge** - 13 variants (7 colors × 2 variants)
4. **Card** - Elevation and layout variants
5. **TextField** - 60 variants (3 variants × 2 sizes × states)
6. **Dialog** - 5 max-width variants

---

## Evolution Roadmap

### Phase 1: Brain Core Foundation ✅ (Current)

**Status**: Complete  
**Deliverables**: Documentation and architecture

### Phase 2: CLI Agent (Next)

**Status**: Not started  
**Deliverables**: Command-line automation

```bash
# Review single component
npm run agent review Button

# Review all components
npm run agent review --all

# Apply approved fixes
npm run agent review Button --fix
```

### Phase 3: Desktop App UI

**Status**: Not started  
**Deliverables**: Visual interface for non-technical users

**Features**:
- Component selector
- Visual diff preview
- Report history
- Fix approval workflow

### Phase 4: Multi-Project Support

**Status**: Not started  
**Deliverables**: Generic architecture for any design system

### Phase 5: Commercial Product

**Status**: Not started  
**Deliverables**: Sellable product for design system teams

See `product-vision.md` for full roadmap.

---

## Usage (Future)

### Review a Component

```bash
# Once Phase 2 is complete
npm run agent review Button
```

**Output**:
- Alignment score
- List of issues
- Suggested fixes
- Figma actions
- Human decisions

### Apply Fixes

```bash
# Review and show proposed fixes
npm run agent review Button --dry-run

# Apply fixes after approval
npm run agent review Button --fix
```

**Safety**: Agent shows diffs before applying. Human approves each fix.

### Batch Review

```bash
# Review all components
npm run agent review --all

# Generate summary report
npm run agent report --output=reports/
```

---

## For Developers

### Adding a New Component

When you add a new component to Storybook:

1. Create component files as usual
2. Run agent review: `npm run agent review [Component]`
3. Review the alignment report
4. Fix any issues found
5. Re-run review to verify

### Before Merging a PR

1. Run agent review on changed components
2. Address critical and high-priority issues
3. Include alignment score in PR description
4. Use agent-generated PR summary

### Maintaining Alignment

- Run batch review weekly
- Track alignment scores over time
- Fix issues before they accumulate
- Update Figma when design needs to change

---

## For Designers

### Understanding Reports

Reports show:
- Which components match your Figma designs
- Which components use design tokens correctly
- Which components need design updates

### Figma Actions

When the agent finds "Figma Actions", it means:
- The design needs to be updated in Figma
- Design tokens are missing
- Design doesn't meet accessibility standards

### Collaboration

- Review agent reports with developers
- Prioritize Figma actions
- Update designs based on findings
- Re-sync tokens after Figma changes

---

## For Product Managers

### Design System Health

- Alignment scores show system quality
- Trend reports show improvement/decline
- Issue counts show technical debt

### Planning

- Use reports to prioritize design system work
- Track alignment improvements over time
- Identify components that need refactoring

---

## FAQ

### Q: Will the agent break my production site?

**A**: No. The agent never modifies `index.html` (your live portal) without explicit instruction. All changes require human approval.

### Q: Can the agent push to git?

**A**: No. All git operations are human-controlled. The agent only generates reports and suggests changes.

### Q: What if the agent suggests a wrong fix?

**A**: You review and approve all fixes. The agent shows diffs before applying. You can reject any suggestion.

### Q: How accurate are the alignment scores?

**A**: Scores are based on objective criteria (token usage, variant coverage, etc.). They're accurate for what they measure, but human judgment is still needed.

### Q: Can I customize the review rules?

**A**: Yes (in future phases). You'll be able to define custom rules, severity levels, and ignore patterns.

### Q: Does this replace code review?

**A**: No. This supplements code review by catching alignment issues automatically. Human review is still essential.

---

## Contributing

### Improving the Brain Core

The Brain Core rules can be improved based on real-world usage:

1. Identify a limitation or improvement
2. Propose a change to the relevant `.md` file
3. Discuss with team
4. Update documentation
5. Test with real components

### Reporting Issues

If you find issues with the Brain Core rules:

1. Document the issue clearly
2. Provide examples
3. Suggest improvements
4. Update relevant documentation

---

## Support

### Internal Support (GFG Team)

- Review the Brain Core documentation
- Ask questions in team chat
- Propose improvements via PR

### Future Support (Commercial Product)

- Documentation site
- Community forum
- Email support (Pro tier)
- Priority support (Enterprise tier)

---

## License

**Current**: Internal tool for GFG Design System

**Future**: 
- Brain Core: MIT License (open source)
- Desktop App: Commercial license

See `product-vision.md` for open source strategy.

---

## Version History

- **v1.0.0** (2026-06-05): Brain Core foundation established
  - Created core documentation
  - Defined architecture
  - Established safety rules
  - Documented workflow

---

## Next Steps

### For the Team

1. **Review the Brain Core** - Read all documentation files
2. **Provide Feedback** - Suggest improvements to rules
3. **Wait for Phase 2** - CLI agent will be built next

### For Development

1. **Build CLI Agent** (Phase 2)
2. **Test on GFG Components**
3. **Iterate on Rules**
4. **Build Desktop App** (Phase 3)

---

**Questions?** Review the documentation files or ask the team.

**Ready to contribute?** Start by reviewing `brain.md` and `workflow.md`.

**Want to see the vision?** Read `product-vision.md`.

---

**Brain Core Version**: 1.0.0  
**Last Updated**: 2026-06-05  
**Status**: Phase 1 Complete ✅
