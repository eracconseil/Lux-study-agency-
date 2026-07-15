/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-container-lowest": "#ffffff",
        "on-primary-fixed-variant": "#153ea3",
        "on-primary": "#ffffff",
        "tertiary-fixed-dim": "#ecbf88",
        "secondary-fixed-dim": "#bec7d7",
        "on-tertiary-container": "#caa06c",
        "surface-container-highest": "#e2e2e5",
        "secondary-container": "#dae3f4",
        "surface-tint": "#3557bc",
        "on-error": "#ffffff",
        "tertiary": "#3a2200",
        "on-surface": "#1a1c1e",
        "tertiary-fixed": "#ffddb6",
        "on-tertiary": "#ffffff",
        "on-secondary-fixed-variant": "#3e4755",
        "inverse-primary": "#b5c4ff",
        "on-tertiary-fixed-variant": "#5f4115",
        "surface": "#f9f9fc",
        "surface-variant": "#e2e2e5",
        "secondary-fixed": "#dae3f4",
        "surface-container-low": "#f3f3f6",
        "primary-container": "#003399",
        "on-primary-fixed": "#00164e",
        "on-primary-container": "#8aa4ff",
        "primary": "#002068",
        "on-secondary-fixed": "#131c28",
        "on-tertiary-fixed": "#2a1800",
        "surface-bright": "#f9f9fc",
        "inverse-surface": "#2f3133",
        "on-secondary-container": "#5c6573",
        "primary-fixed": "#dce1ff",
        "outline-variant": "#c4c5d5",
        "on-background": "#1a1c1e",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        "surface-dim": "#dadadc",
        "error": "#ba1a1a",
        "background": "#f9f9fc",
        "on-surface-variant": "#444653",
        "secondary": "#565f6d",
        "primary-fixed-dim": "#b5c4ff",
        "surface-container": "#eeeef0",
        "outline": "#747684",
        "inverse-on-surface": "#f0f0f3",
        "tertiary-container": "#54370c",
        "surface-container-high": "#e8e8ea"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        base: "8px",
        "section-gap-desktop": "120px",
        "section-gap-mobile": "64px",
        gutter: "24px",
        "container-max-width": "1280px"
      },
      maxWidth: {
        "container-max-width": "1280px"
      },
      fontFamily: {
        serif: ['"Source Serif 4"', "serif"],
        sans: ['"Hanken Grotesk"', "sans-serif"]
      },
      fontSize: {
        "display-lg": ["40px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg-desktop": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "1.2", fontWeight: "600" }],
        "headline-lg-desktop": ["48px", { lineHeight: "1.2", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "600" }]
      }
    }
  },
  plugins: []
};
