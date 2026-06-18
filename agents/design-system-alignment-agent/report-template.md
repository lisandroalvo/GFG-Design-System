# Component Alignment Report: [Component Name]

**Report ID**: `[component]-[YYYYMMDD]-[HHMMSS]`  
**Generated**: [Date and Time]  
**Agent Version**: 1.0.0  
**Reviewer**: Design System Alignment Agent

---

## Executive Summary

**Component**: [Component Name]  
**Alignment Score**: [0-100]% ([Rating])  
**Status**: [✅ Excellent | ✅ Good | ⚠️ Needs Work | ❌ Critical Issues]

**Quick Summary**:
[2-3 sentence overview of alignment status and key findings]

**Recommended Action**: [Proceed | Fix Issues | Needs Discussion]

---

## Alignment Score Breakdown

| Category | Score | Weight | Weighted Score | Status |
|----------|-------|--------|----------------|--------|
| Variant Coverage | [0-100]% | 30% | [0-30] | [✅⚠️❌] |
| Token Usage | [0-100]% | 25% | [0-25] | [✅⚠️❌] |
| State Coverage | [0-100]% | 20% | [0-20] | [✅⚠️❌] |
| Documentation | [0-100]% | 15% | [0-15] | [✅⚠️❌] |
| Accessibility | [0-100]% | 10% | [0-10] | [✅⚠️❌] |
| **Overall** | **[0-100]%** | **100%** | **[0-100]** | **[✅⚠️❌]** |

---

## Findings

### ✅ What's Working Well

[List positive findings]

- [Item 1]
- [Item 2]
- [Item 3]

### ⚠️ Issues Found

#### Critical Issues (Must Fix)

[Issues that block production or violate standards]

1. **[Issue Title]**
   - **Type**: [Code | Figma | Decision]
   - **Severity**: Critical
   - **Description**: [What's wrong]
   - **Impact**: [How this affects users/developers]
   - **Source**: [File:Line or Figma reference]

#### High Priority Issues

[Important issues that should be fixed soon]

1. **[Issue Title]**
   - **Type**: [Code | Figma | Decision]
   - **Severity**: High
   - **Description**: [What's wrong]
   - **Impact**: [How this affects users/developers]
   - **Source**: [File:Line or Figma reference]

#### Medium Priority Issues

[Issues that should be addressed but aren't blocking]

1. **[Issue Title]**
   - **Type**: [Code | Figma | Decision]
   - **Severity**: Medium
   - **Description**: [What's wrong]
   - **Impact**: [How this affects users/developers]
   - **Source**: [File:Line or Figma reference]

#### Low Priority Issues

[Nice-to-have improvements]

1. **[Issue Title]**
   - **Type**: [Code | Figma | Decision]
   - **Severity**: Low
   - **Description**: [What's wrong]
   - **Impact**: [How this affects users/developers]
   - **Source**: [File:Line or Figma reference]

---

## Code/Storybook Fixes

### Fixes Applied

[If fixes were applied with approval]

✅ **Fix 1: [Title]**
- **File**: `[path/to/file.tsx:line]`
- **Change**: [Description]
- **Reason**: [Why this change was made]
- **Source of Truth**: [Figma | Token | Standard]

**Diff**:
```diff
- [old code]
+ [new code]
```

### Recommended Fixes (Not Yet Applied)

[Fixes that need approval]

⚠️ **Fix 1: [Title]**
- **File**: `[path/to/file.tsx:line]`
- **Change**: [Description]
- **Reason**: [Why this change is needed]
- **Source of Truth**: [Figma | Token | Standard]
- **Risk**: [Low | Medium | High]

**Proposed Diff**:
```diff
- [old code]
+ [new code]
```

**Approval Required**: Yes

---

## Figma Actions Needed

[Changes that need to be made in Figma]

### Action 1: [Title]

- **Component**: [Figma component name]
- **Node ID**: [Figma node ID if available]
- **Issue**: [What's wrong in Figma]
- **Proposed Fix**: [What should be changed]
- **Reason**: [Why this change is needed]
- **Impact**: [How this affects the design system]
- **Priority**: [Critical | High | Medium | Low]

**Assigned To**: [Designer name or "Design Team"]

---

## Human Decisions Needed

[Ambiguous cases requiring judgment]

### Decision 1: [Title]

- **Question**: [What needs to be decided]
- **Context**: [Background information]
- **Options**:
  - **Option A**: [Description]
    - Pros: [List]
    - Cons: [List]
  - **Option B**: [Description]
    - Pros: [List]
    - Cons: [List]
- **Recommendation**: [Agent's suggestion if any]
- **Stakeholders**: [Who should be involved in decision]
- **Impact**: [How this affects the design system]

**Decision Required By**: [Date or "Before next release"]

---

## Detailed Analysis

### Variant Coverage

**Figma Variants** (from `component-properties.json`):
- [Variant 1]
- [Variant 2]
- [Variant 3]

**Storybook Variants** (from `[Component].tsx`):
- ✅ [Variant 1] - Implemented
- ✅ [Variant 2] - Implemented
- ⚠️ [Variant 3] - Missing
- ℹ️ [Extra Variant] - Not in Figma (may be intentional)

**Coverage**: [X/Y variants] ([Z]%)

### State Coverage

**Required States**:
- ✅ Default - Implemented
- ✅ Hover - Implemented (`:hover` styles)
- ✅ Active - Implemented (`:active` styles)
- ✅ Focus - Implemented (`:focus` styles)
- ✅ Disabled - Implemented (`disabled` prop)
- ⚠️ Loading - Missing
- ⚠️ Error - Missing

**Coverage**: [X/Y states] ([Z]%)

### Token Usage

**Colors**:
- ✅ Primary color: Uses `theme.palette.primary.main`
- ✅ Text color: Uses `theme.palette.primary.contrastText`
- ❌ Border color: Hardcoded `#e0e0e0` (should use `theme.palette.divider`)

**Typography**:
- ✅ Font family: Uses `theme.typography.button.fontFamily`
- ✅ Font size: Uses `theme.typography.button.fontSize`
- ✅ Font weight: Uses `theme.typography.button.fontWeight`

**Spacing**:
- ✅ Padding: Uses `theme.spacing(1, 2)`
- ⚠️ Margin: Hardcoded `8px` (should use `theme.spacing(1)`)

**Other**:
- ✅ Border radius: Uses `theme.shape.borderRadius`
- ✅ Shadow: Uses `theme.shadows[2]`

**Token Usage Score**: [X/Y properties] ([Z]%)

### Documentation

**Component Documentation**:
- ✅ Component description exists
- ✅ Props are documented
- ⚠️ Usage examples missing
- ⚠️ Accessibility notes missing
- ⚠️ Design token references missing
- ❌ Link to Figma source missing

**Storybook Stories**:
- ✅ Default story exists
- ✅ Variant stories exist
- ⚠️ State stories incomplete
- ⚠️ Interactive examples missing

**Documentation Score**: [X/Y items] ([Z]%)

### Accessibility

**Semantic HTML**:
- ✅ Uses `<button>` element (correct)

**ARIA Attributes**:
- ✅ `aria-label` provided when needed
- ⚠️ `aria-disabled` missing for disabled state
- ⚠️ `aria-busy` missing for loading state

**Keyboard Navigation**:
- ✅ Focusable with Tab key
- ✅ Activates with Enter/Space
- ✅ Focus indicator visible

**Screen Reader**:
- ✅ Button text is readable
- ⚠️ Loading state not announced

**Color Contrast**:
- ✅ Text contrast meets WCAG AA (4.5:1)
- ⚠️ Disabled state contrast below recommended (check if acceptable)

**Accessibility Score**: [X/Y features] ([Z]%)

---

## Files Reviewed

### Read
- `apps/storybook/src/components/[Component]/[Component].tsx`
- `apps/storybook/src/components/[Component]/[Component].stories.tsx`
- `apps/storybook/src/components/[Component]/README.md`
- `apps/storybook/src/tokens/gfgTheme.ts`
- `design-tokens/component-properties.json`
- `design-tokens/colors.json`
- `design-tokens/typography.json`

### Modified
[If any fixes were applied]
- `apps/storybook/src/components/[Component]/[Component].tsx` (3 changes)
- `apps/storybook/src/components/[Component]/[Component].stories.tsx` (1 change)

### Not Found
[If any expected files are missing]
- `apps/storybook/src/components/[Component]/README.md` (recommended to create)

---

## Risk Assessment

### Production Impact
**Risk Level**: [None | Low | Medium | High | Critical]

**Explanation**:
[How these findings affect the live portal or production]

### Breaking Changes
**Risk Level**: [None | Low | Medium | High]

**Explanation**:
[Whether proposed fixes introduce breaking changes]

### Dependencies
**Risk Level**: [None | Low | Medium | High]

**Explanation**:
[Whether fixes affect other components or systems]

---

## Recommended Next Steps

### Immediate Actions (Do Now)

1. [Action 1]
2. [Action 2]
3. [Action 3]

### Short-term Actions (This Sprint)

1. [Action 1]
2. [Action 2]
3. [Action 3]

### Long-term Actions (Future Sprints)

1. [Action 1]
2. [Action 2]
3. [Action 3]

---

## Team Update (Copy-Paste Ready)

**For Jira/Linear/Slack**:

```
🔍 Component Review: [Component Name]
Alignment Score: [X]% ([Rating])

✅ Good:
- [Item 1]
- [Item 2]

⚠️ Needs Work:
- [Item 1]
- [Item 2]

🎯 Next Steps:
- [Action 1]
- [Action 2]

Full report: [Link to this file]
```

---

## PR Summary (Copy-Paste Ready)

**For Pull Request Description**:

```markdown
## Component Alignment Review

**Component**: [Component Name]  
**Alignment Score**: [X]% ([Rating])

### Changes Made
- [Change 1]
- [Change 2]
- [Change 3]

### Issues Fixed
- ✅ [Issue 1]
- ✅ [Issue 2]

### Known Limitations
- ⚠️ [Limitation 1]
- ⚠️ [Limitation 2]

### Testing
- [ ] Tested in Storybook
- [ ] Tested all variants
- [ ] Tested all states
- [ ] Tested accessibility
- [ ] Reviewed against Figma

### Risk Assessment
**Risk Level**: [Low | Medium | High]  
**Production Impact**: [None | Minimal | Moderate | Significant]

Full review: [Link to report]
```

---

## Appendix

### Component Metadata

**From Figma** (`component-properties.json`):
```json
{
  "name": "[Component]",
  "nodeId": "[Figma node ID]",
  "variants": [...],
  "properties": {...}
}
```

**From Storybook** (`[Component].tsx`):
```typescript
interface [Component]Props {
  // Props interface
}
```

### Token References

**Colors Used**:
- `theme.palette.primary.main` → `#af9577`
- `theme.palette.primary.contrastText` → `#fbf9f7`

**Typography Used**:
- `theme.typography.button.fontFamily` → `"Roboto", sans-serif`
- `theme.typography.button.fontSize` → `14px`

**Spacing Used**:
- `theme.spacing(1)` → `8px`
- `theme.spacing(2)` → `16px`

---

## Report Metadata

**Generated By**: Design System Alignment Agent v1.0.0  
**Report Template Version**: 1.0.0  
**Report Date**: [YYYY-MM-DD HH:MM:SS]  
**Report Path**: `agents/reports/[component]-review-[date].md`

---

**End of Report**
