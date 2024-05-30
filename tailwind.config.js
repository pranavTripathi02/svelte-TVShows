/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--color-background) / <alpha-value>)",
        "background-nav": "hsl(var(--color-background-nav) / <alpha-value>)",
        "background-secondary":
          "hsl(var(--color-background-seconary) / <alpha-value>)",
        "text-primary": "hsl(var(--color-text-primary) / <alpha-value>)",
        "text-secondary": "hsl(var(--color-text-secondary) / <alpha-value>)",
        accent: "hsl(var(--color-accent) / <alpha-value>)",
        "accent-secondary":
          "hsl(var(--color-accent-secondary) / <alpha-value>)",
        "accent-2": "hsl(var(--color-accent-2) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
