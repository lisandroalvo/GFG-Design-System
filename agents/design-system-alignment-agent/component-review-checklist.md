# Component Review Checklist

## Overview

This checklist guides the Design System Alignment Agent through a comprehensive component review. Each section includes specific checks and pass/fail criteria.

**Usage**: Check each item during component review. Mark as:
- ✅ Pass
- ⚠️ Warning (needs attention)
- ❌ Fail (must fix)
- N/A (not applicable)

---

## 1. Component Existence & Setup

### 1.1 File Structure

- [ ] Component file exists: `apps/storybook/src/components/[Component]/[Component].tsx`
- [ ] Stories file exists: `apps/storybook/src/components/[Component]/[Component].stories.tsx`
- [ ] Component exports correctly (named export)
- [ ] Component is TypeScript (`.tsx` not `.jsx`)

### 1.2 Component Registration

- [ ] Component is imported in Storybook
- [ ] Component appears in Storybook sidebar
- [ ] Component has default story

**Notes**: _______________________

---

## 2. Figma Alignment

### 2.1 Component Metadata

- [ ] Component exists in `design-tokens/component-properties.json`
- [ ] Figma node ID is documented
- [ ] Component name matches Figma name (or mapping is documented)

### 2.2 Variant Coverage

- [ ] All Figma variants are implemented in Storybook
- [ ] Variant prop names match Figma properties
- [ ] Variant values match Figma values
- [ ] No extra variants without documentation

**Figma Variants**:
- [ ] _______________________
- [ ] _______________________
- [ ] _______________________

**Storybook Variants**:
- [ ] _______________________
- [ ] _______________________
- [ ] _______________________

**Missing**: _______________________

---

## 3. Props & Interface

### 3.1 Props Definition

- [ ] Props interface is exported
- [ ] Props interface is documented (JSDoc comments)
- [ ] All props have type definitions
- [ ] Optional props are marked with `?`
- [ ] Required props are clearly indicated

### 3.2 Prop Naming

- [ ] Prop names follow camelCase convention
- [ ] Prop names are descriptive and clear
- [ ] Boolean props use `is`, `has`, `should` prefixes
- [ ] Event handler props use `on` prefix (e.g., `onClick`)

### 3.3 Default Props

- [ ] Default values are defined (or documented as required)
- [ ] Default values match Figma defaults
- [ ] Default values use tokens (not hardcoded)

**Props Interface**:
```typescript
// Paste interface here for review
```

**Notes**: _______________________

---

## 4. Variant Implementation

### 4.1 Visual Variants

For each variant (e.g., `variant="contained" | "outlined" | "text"`):

- [ ] Variant is implemented
- [ ] Visual appearance matches Figma
- [ ] Variant uses correct tokens
- [ ] Variant has Storybook story

**Variants Checklist**:
- [ ] Variant 1: _______________________
- [ ] Variant 2: _______________________
- [ ] Variant 3: _______________________

### 4.2 Size Variants

For each size (e.g., `size="small" | "medium" | "large"`):

- [ ] Size is implemented
- [ ] Dimensions match Figma
- [ ] Padding/spacing uses tokens
- [ ] Typography scales correctly
- [ ] Icons scale correctly (if applicable)

**Sizes Checklist**:
- [ ] Small: _______________________
- [ ] Medium: _______________________
- [ ] Large: _______________________

### 4.3 Color Variants

For each color (e.g., `color="primary" | "secondary" | "error"`):

- [ ] Color is implemented
- [ ] Uses theme palette colors
- [ ] Contrast meets accessibility standards
- [ ] Hover/active states use correct color variations

**Colors Checklist**:
- [ ] Primary: _______________________
- [ ] Secondary: _______________________
- [ ] Error: _______________________
- [ ] Warning: _______________________
- [ ] Info: _______________________
- [ ] Success: _______________________

---

## 5. State Coverage

### 5.1 Interactive States

- [ ] **Default**: Component renders correctly
- [ ] **Hover**: Hover styles are defined (`:hover` or `onMouseEnter`)
- [ ] **Active/Pressed**: Active styles are defined (`:active`)
- [ ] **Focus**: Focus styles are defined (`:focus`, visible indicator)
- [ ] **Disabled**: Disabled state is implemented (`disabled` prop)
- [ ] **Loading**: Loading state is implemented (if applicable)
- [ ] **Error**: Error state is implemented (if applicable)
- [ ] **Success**: Success state is implemented (if applicable)

### 5.2 State Transitions

- [ ] State transitions are smooth (CSS transitions)
- [ ] Transition durations use theme values
- [ ] No jarring visual jumps

### 5.3 State Stories

- [ ] Each state has a Storybook story
- [ ] States are documented in stories
- [ ] Interactive states are testable in Storybook

**Notes**: _______________________

---

## 6. Token Usage

### 6.1 Color Tokens

- [ ] All colors use `theme.palette.*` (no hardcoded hex/rgb)
- [ ] Background colors use tokens
- [ ] Text colors use tokens
- [ ] Border colors use tokens
- [ ] Icon colors use tokens

**Hardcoded Colors Found**:
- [ ] None ✅
- [ ] _______________________
- [ ] _______________________

### 6.2 Typography Tokens

- [ ] Font family uses `theme.typography.*.fontFamily`
- [ ] Font size uses `theme.typography.*.fontSize`
- [ ] Font weight uses `theme.typography.*.fontWeight`
- [ ] Line height uses `theme.typography.*.lineHeight`
- [ ] Letter spacing uses `theme.typography.*.letterSpacing`

**Hardcoded Typography Found**:
- [ ] None ✅
- [ ] _______________________

### 6.3 Spacing Tokens

- [ ] Padding uses `theme.spacing()`
- [ ] Margin uses `theme.spacing()`
- [ ] Gap uses `theme.spacing()`
- [ ] No hardcoded pixel values for spacing

**Hardcoded Spacing Found**:
- [ ] None ✅
- [ ] _______________________

### 6.4 Other Tokens

- [ ] Border radius uses `theme.shape.borderRadius`
- [ ] Shadows use `theme.shadows[n]`
- [ ] Transitions use `theme.transitions.*`
- [ ] Breakpoints use `theme.breakpoints.*`

**Notes**: _______________________

---

## 7. Theme Overrides

### 7.1 MUI Component Overrides

Check `apps/storybook/src/tokens/gfgTheme.ts`:

- [ ] Component has theme overrides (if needed)
- [ ] Overrides match Figma design
- [ ] Overrides use tokens (not hardcoded values)
- [ ] Overrides are documented

**Theme Overrides**:
```typescript
// Paste relevant theme overrides here
```

### 7.2 Default Props Overrides

- [ ] Default props are set in theme (if needed)
- [ ] Default props match Figma defaults

**Notes**: _______________________

---

## 8. Accessibility

### 8.1 Semantic HTML

- [ ] Uses semantic HTML elements (`<button>`, `<input>`, etc.)
- [ ] Avoids generic `<div>` for interactive elements
- [ ] Heading levels are correct (if applicable)

### 8.2 ARIA Attributes

- [ ] `aria-label` provided when text is not visible
- [ ] `aria-labelledby` used for complex labels
- [ ] `aria-describedby` used for descriptions
- [ ] `aria-disabled` set for disabled state
- [ ] `aria-busy` set for loading state
- [ ] `aria-invalid` set for error state
- [ ] `aria-expanded` set for expandable elements
- [ ] `aria-pressed` set for toggle buttons
- [ ] `aria-checked` set for checkboxes/radios

### 8.3 Keyboard Navigation

- [ ] Component is focusable (if interactive)
- [ ] Tab order is logical
- [ ] Enter/Space activates component (if button-like)
- [ ] Arrow keys work (if applicable, e.g., radio group)
- [ ] Escape closes (if applicable, e.g., dialog)
- [ ] Focus trap works (if applicable, e.g., modal)

### 8.4 Focus Indicators

- [ ] Focus indicator is visible
- [ ] Focus indicator meets contrast requirements
- [ ] Focus indicator is not removed with `outline: none`
- [ ] Custom focus styles are provided if default is removed

### 8.5 Screen Reader Support

- [ ] Component announces correctly
- [ ] State changes are announced
- [ ] Error messages are announced
- [ ] Loading states are announced
- [ ] Hidden content uses `aria-hidden` or `visually-hidden` class

### 8.6 Color Contrast

- [ ] Text contrast meets WCAG AA (4.5:1 for normal text)
- [ ] Large text contrast meets WCAG AA (3:1)
- [ ] Interactive elements have sufficient contrast
- [ ] Disabled state contrast is acceptable (or documented)

**Contrast Ratios**:
- Default text: _______________________
- Hover text: _______________________
- Disabled text: _______________________

### 8.7 Accessibility Documentation

- [ ] Accessibility features are documented
- [ ] Keyboard shortcuts are documented
- [ ] Screen reader behavior is documented

**Notes**: _______________________

---

## 9. Responsiveness

### 9.1 Breakpoint Handling

- [ ] Component works on mobile (< 600px)
- [ ] Component works on tablet (600-960px)
- [ ] Component works on desktop (> 960px)
- [ ] Breakpoints use `theme.breakpoints.*`

### 9.2 Flexible Sizing

- [ ] Component adapts to container width (if applicable)
- [ ] Text wraps appropriately
- [ ] No horizontal scrolling
- [ ] Touch targets are at least 44x44px on mobile

### 9.3 Responsive Stories

- [ ] Storybook has viewport addon configured
- [ ] Component can be tested at different viewports

**Notes**: _______________________

---

## 10. Icons & Images

### 10.1 Icon Usage

- [ ] Icons use `@mui/icons-material` (or documented alternative)
- [ ] Icon size matches design
- [ ] Icon color uses tokens
- [ ] Icons have accessible labels (if standalone)

### 10.2 Image Handling

- [ ] Images have `alt` text
- [ ] Images use responsive sizing
- [ ] Image loading states are handled
- [ ] Image error states are handled

**Notes**: _______________________

---

## 11. Documentation

### 11.1 Component Documentation

- [ ] Component has description (JSDoc or README)
- [ ] Component purpose is clear
- [ ] Component usage is explained
- [ ] Component examples are provided

### 11.2 Props Documentation

- [ ] All props are documented (JSDoc)
- [ ] Prop types are clear
- [ ] Prop default values are documented
- [ ] Prop examples are provided

### 11.3 Storybook Stories

- [ ] Default story exists
- [ ] All variants have stories
- [ ] All states have stories
- [ ] Interactive examples exist
- [ ] Stories have descriptions
- [ ] Stories use `argTypes` for controls

### 11.4 Design Token References

- [ ] Component documentation links to design tokens
- [ ] Token usage is explained
- [ ] Figma source is linked

### 11.5 Usage Guidelines

- [ ] When to use this component
- [ ] When NOT to use this component
- [ ] Common patterns
- [ ] Anti-patterns

**Documentation Quality**: [Excellent | Good | Fair | Poor]

**Notes**: _______________________

---

## 12. Code Quality

### 12.1 TypeScript

- [ ] No TypeScript errors
- [ ] No `any` types (or justified)
- [ ] Strict mode enabled
- [ ] Interfaces are properly typed

### 12.2 Code Style

- [ ] Code follows project style guide
- [ ] Consistent indentation
- [ ] Meaningful variable names
- [ ] No commented-out code
- [ ] No console.log statements

### 12.3 Performance

- [ ] No unnecessary re-renders
- [ ] Expensive operations are memoized
- [ ] Large lists use virtualization (if applicable)
- [ ] Images are optimized

### 12.4 Error Handling

- [ ] Prop validation exists
- [ ] Error states are handled
- [ ] Edge cases are considered

**Notes**: _______________________

---

## 13. Testing

### 13.1 Storybook Testing

- [ ] All stories render without errors
- [ ] Interactions work in Storybook
- [ ] Controls work correctly
- [ ] No console errors in Storybook

### 13.2 Visual Testing

- [ ] Component matches Figma design
- [ ] All variants match Figma
- [ ] All states match Figma
- [ ] Spacing matches Figma

### 13.3 Manual Testing Checklist

- [ ] Tested in Chrome
- [ ] Tested in Safari
- [ ] Tested in Firefox
- [ ] Tested on mobile device
- [ ] Tested with keyboard only
- [ ] Tested with screen reader

**Notes**: _______________________

---

## 14. Risk to Live Portal

### 14.1 Production Impact

- [ ] Component is NOT used in `index.html` (safe to modify)
- [ ] Component IS used in `index.html` (requires caution)
- [ ] Changes do not affect `index.html` rendering
- [ ] Changes do not break existing functionality

### 14.2 Breaking Changes

- [ ] No breaking changes to props
- [ ] No breaking changes to behavior
- [ ] No breaking changes to styling
- [ ] Backward compatibility maintained

### 14.3 Dependencies

- [ ] No new dependencies added (or justified)
- [ ] No dependency version conflicts
- [ ] No security vulnerabilities

**Risk Level**: [None | Low | Medium | High | Critical]

**Notes**: _______________________

---

## 15. Final Checks

### 15.1 Completeness

- [ ] All checklist items reviewed
- [ ] All issues documented
- [ ] All fixes proposed (or applied)
- [ ] Report generated

### 15.2 Alignment Score

Calculate alignment score:
- Variant Coverage: _____ %
- Token Usage: _____ %
- State Coverage: _____ %
- Documentation: _____ %
- Accessibility: _____ %

**Overall Alignment Score**: _____ %

### 15.3 Recommendation

- [ ] ✅ **Approve**: Component is production-ready
- [ ] ⚠️ **Approve with minor fixes**: Fix low-priority issues
- [ ] ⚠️ **Needs work**: Fix medium-priority issues before release
- [ ] ❌ **Block**: Critical issues must be fixed

**Reviewer Notes**: _______________________

---

## Checklist Metadata

**Component**: _______________________  
**Reviewer**: Design System Alignment Agent  
**Review Date**: _______________________  
**Checklist Version**: 1.0.0

---

**End of Checklist**
