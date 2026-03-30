# The Design System: Editorial Precision & Atmospheric Depth

## 1. Overview & Creative North Star: "The Living Canvas"
This design system rejects the static nature of traditional SaaS interfaces. Our Creative North Star is **The Living Canvas**—an environment that feels less like a software tool and more like a high-end physical workspace. We achieve this through a "Quiet Premium" aesthetic: high-contrast typography, intentional asymmetry, and layered depth.

The system breaks the "template" look by favoring breathing room over density. We use white space not just as a separator, but as a luxury element that directs the eye. Every interaction should feel like a deliberate, fluid motion—mimicking the weightlessness of light rather than the clunkiness of code.

---

## 2. Color Theory: Tonal Atmosphere
Our palette is rooted in the depth of `surface` (#070d1f) and the clarity of `primary` (#c4c7c9). We use color as a functional signal, not a decorative one.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section your layouts. Structural separation is achieved through:
- **Background Shifts:** A `surface_container_low` section sitting on a `surface` background.
- **Tonal Transitions:** Using the Spacing Scale (e.g., `8` or `12`) to allow the background to define the edges of the content.

### Surface Hierarchy & Nesting
Think of the UI as stacked sheets of architectural glass.
- **Base:** `surface` (#070d1f)
- **Primary Layout Blocks:** `surface_container_low` (#09122b)
- **Actionable Cards:** `surface_container` (#0a1839)
- **High-Interaction Modals:** `surface_container_high` (#0b1d48)

### The "Glass & Gradient" Rule
To ensure the system feels "alive," floating elements (like sidebars or popovers) must use **Glassmorphism**. Apply a 20px-40px backdrop blur with a semi-transparent `surface_variant` (#0a2257 at 60% opacity). Main CTAs should utilize a subtle linear gradient from `primary` (#c4c7c9) to `primary_container` (#444749) at a 135-degree angle to provide a metallic, machined finish.

---

## 3. Typography: The Editorial Voice
We pair the geometric authority of **Manrope** with the utilitarian precision of **Inter**.

- **The Command Center (Display & Headline):** Use **Manrope** for `display-lg` through `headline-sm`. These should be set with tight letter-spacing (-0.02em) to create an authoritative, "printed" feel.
- **The Intelligence (Title & Body):** Use **Inter** for all functional text. `body-md` is our workhorse. 
- **The Metadata (Label):** `label-sm` should be used for status updates and micro-copy, often in `on_surface_variant` (#96a9e6) to keep the hierarchy clean.

The contrast between a `display-md` (2.75rem) headline and a `body-sm` (0.75rem) caption creates the "Editorial" look that differentiates this system from generic dashboards.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are forbidden. We define depth through light physics.

### The Layering Principle
Stack containers to create natural lift. For instance, an input field using `surface_container_lowest` (#000000) inside a card using `surface_container` (#0a1839) creates a "recessed" look that feels more premium than a stroke.

### Ambient Shadows
When an object must float (e.g., a dropdown), use a dual-shadow approach:
1. **The Core:** 0px 4px 12px `surface_container_lowest` at 20% opacity.
2. **The Ambient Glow:** 0px 20px 40px `surface_container_lowest` at 10% opacity.
The shadow color is always a derivative of the surface, never a neutral gray.

### The "Ghost Border" Fallback
If a border is required for accessibility, it must be a **Ghost Border**: use the `outline_variant` (#32457c) at **15% opacity**. It should be felt, not seen.

---

## 5. Components: Refined Primitives

### Buttons
- **Primary:** Gradient fill (Primary to Primary Container), `on_primary` text. No border. `rounded-md` (0.375rem).
- **Secondary:** `surface_container_high` background. On hover, lift 2px with an Ambient Shadow.
- **Tertiary:** Pure text using `tertiary` (#679cff) for high-impact accents (the 'Build' badge).

### Input Fields
- **Style:** Background `surface_container_low`, `rounded-md`. 
- **State:** On focus, the background shifts to `surface_container` and the "Ghost Border" opacity increases to 40%. No heavy blue outlines.

### Cards & Lists
- **Rule:** Never use divider lines.
- **Implementation:** Separate list items using the Spacing Scale `2` (0.7rem). Use a subtle `surface_bright` (#082768) hover state that fades in over 200ms to indicate selection.

### Glass Modals
- Floating containers must use `surface_variant` with a 20px backdrop blur. 
- Edge treatment: A 1px top-inner-shadow (white at 10% opacity) to simulate a "light-catching edge."

---

## 6. Do’s and Don’ts

### Do
- **Do** use asymmetrical layouts (e.g., a left-aligned headline with a right-aligned CTA) to create a custom feel.
- **Do** use the Spacing Scale `16` (5.5rem) or `20` (7rem) for section vertical padding.
- **Do** use `tertiary` (#679cff) sparingly—only for final "commit" actions or success states.

### Don't
- **Don't** use 100% opaque borders.
- **Don't** use "pure black" shadows; always tint them with the surface color.
- **Don't** cram information. If a view feels busy, increase the spacing by two increments on the scale.
- **Don't** use standard easing. Use a custom cubic-bezier `(0.22, 1, 0.36, 1)` for all transitions to ensure a "snappy yet fluid" motion profile.