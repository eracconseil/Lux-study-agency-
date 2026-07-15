---
name: Academic Prestige
colors:
  surface: '#f9f9fc'
  surface-dim: '#dadadc'
  surface-bright: '#f9f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f6'
  surface-container: '#eeeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e5'
  on-surface: '#1a1c1e'
  on-surface-variant: '#444653'
  inverse-surface: '#2f3133'
  inverse-on-surface: '#f0f0f3'
  outline: '#747684'
  outline-variant: '#c4c5d5'
  surface-tint: '#3557bc'
  primary: '#002068'
  on-primary: '#ffffff'
  primary-container: '#003399'
  on-primary-container: '#8aa4ff'
  inverse-primary: '#b5c4ff'
  secondary: '#565f6d'
  on-secondary: '#ffffff'
  secondary-container: '#dae3f4'
  on-secondary-container: '#5c6573'
  tertiary: '#3a2200'
  on-tertiary: '#ffffff'
  tertiary-container: '#54370c'
  on-tertiary-container: '#caa06c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b5c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#153ea3'
  secondary-fixed: '#dae3f4'
  secondary-fixed-dim: '#bec7d7'
  on-secondary-fixed: '#131c28'
  on-secondary-fixed-variant: '#3e4755'
  tertiary-fixed: '#ffddb6'
  tertiary-fixed-dim: '#ecbf88'
  on-tertiary-fixed: '#2a1800'
  on-tertiary-fixed-variant: '#5f4115'
  background: '#f9f9fc'
  on-background: '#1a1c1e'
  surface-variant: '#e2e2e5'
typography:
  display-lg:
    fontFamily: Source Serif 4
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  container-max-width: 1280px
  gutter: 24px
---

## Brand & Style
The design system is rooted in the concepts of **Intellectual Heritage** and **Modern Globalism**. It seeks to evoke a sense of established authority while appearing progressive and accessible to a digital-native demographic. 

The aesthetic is a blend of **Minimalism** and **Modern Corporate**. It prioritizes high-contrast editorial layouts, utilizing generous whitespace to allow content to breathe. Visual interest is generated through precise typography and a refined "glass-and-light" approach to depth, moving away from the flat, saturated blocks of the original design toward a more layered, sophisticated digital environment. The tone is prestigious, trustworthy, and welcoming.

## Colors
The palette is centered on a "Deep Academic Blue" to maintain brand heritage, paired with a "Legacy Gold" tertiary for accents and high-value call-outs. 

- **Primary:** A deep, authoritative blue used for core branding, primary buttons, and critical UI elements.
- **Secondary:** A soft, desaturated sky blue used for subtle background sections and large container fills to reduce visual fatigue.
- **Tertiary:** A refined gold/bronze used sparingly for achievement indicators, seals, or high-priority labels to reinforce the "excellence" narrative.
- **Neutral:** A range of greys starting from a near-black ink for text, down to cool-tinted whites for backgrounds. Pure black is avoided to maintain a premium feel.

## Typography
The system employs a high-contrast typographic pairing to bridge the gap between tradition and modernity. 

**Source Serif 4** is used for all major headings and display text. Its sturdy, classic proportions provide the "Authoritative Serif" requested, lending an air of credibility and academic rigor.

**Hanken Grotesk** is used for body copy, labels, and UI elements. It is a highly legible, contemporary sans-serif that balances the classicism of the serif with a clean, functional efficiency. 

Editorial spacing is critical: use tight letter-spacing for large display headings and generous line-heights (1.6x) for body text to ensure a comfortable reading experience for long-form academic content.

## Layout & Spacing
The design system utilizes a **Fluid Grid** model based on a 12-column desktop layout. 

- **Desktop (1280px+):** 12 columns, 24px gutters, 80px side margins.
- **Tablet (768px - 1279px):** 8 columns, 20px gutters, 40px side margins.
- **Mobile (Under 768px):** 4 columns, 16px gutters, 20px side margins.

Spacing follows a strict 8px linear scale. Section vertical padding is intentionally high (120px on desktop) to create an "Editorial" feel that prevents the UI from appearing cluttered. Content blocks should be centered with significant "white space" buffers to direct focus toward key messaging.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Ambient Shadows**. Instead of heavy shadows, this design system uses soft, multi-layered "diffusion" shadows to make cards appear to float slightly above the surface.

- **Level 0 (Base):** Solid neutral-light backgrounds.
- **Level 1 (Cards):** White surfaces with a 1px stroke in a very light neutral (opacity 10%) and a soft, broad shadow (Blur: 30px, Opacity: 4%).
- **Level 2 (Interaction):** When hovering over interactive cards, the shadow deepens and the element lifts slightly (Y-offset: -4px).

Glassmorphism is used sparingly for navigation bars and overlaying text on imagery, utilizing a subtle backdrop blur (12px) to maintain legibility without distracting from the content.

## Shapes
The shape language is **Soft (0.25rem)**. This subtle rounding provides a modern touch while maintaining the structured, professional geometry expected of a university. 

Buttons and input fields use the `rounded` (4px) setting. Larger containers, such as feature cards or image carousels, use `rounded-lg` (8px). Total pill shapes are reserved exclusively for utility chips or tags (e.g., "New," "Enrolling Now").

## Components

### Buttons
- **Primary:** Solid Deep Blue background, white Hanken Grotesk text (Medium weight). 4px border radius. No icons, or a single trailing chevron for navigation.
- **Secondary:** Transparent background with a 1.5px Deep Blue border. 
- **Tertiary:** Underlined text-only link for low-priority actions.

### Cards (Feature/Academic)
Cards should be "Modern Academic": a white background, subtle 1px grey border, and generous internal padding (32px). Icons within cards should be "Monolinear" and use the Primary Blue or Tertiary Gold. Headings within cards should use the Serif font at a medium scale.

### Input Fields
Clean, minimal borders (bottom-only or 1px all around). Use a 2px blue focus ring. Labels are placed above the field in Hanken Grotesk (Small, Bold).

### Lists
Use custom bullet points (small squares or chevrons) in the Tertiary Gold to add a touch of premium detail to academic program lists.

### Imagery
Photography should be high-resolution, candid, and warm-toned. Use subtle vignettes or overlays when text is placed directly on images to ensure WCAG AA contrast compliance.