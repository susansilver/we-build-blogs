/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ebffff",
          100: "#cefdff",
          200: "#a2f9ff",
          300: "#63f2fd",
          400: "#1ce0f4",
          500: "#00b7cc",
          600: "#039cb7",
          700: "#0a7c94",
          800: "#126378",
          900: "#145265",
          950: "#063746",
        },
        secondary: {
          50: "#fef3f2",
          100: "#ffe3e1",
          200: "#ffd0cc",
          300: "#feaaa3",
          400: "#fb796e",
          500: "#f24f41",
          600: "#e03122",
          700: "#bc2619",
          800: "#9b2319",
          900: "#81231b",
          950: "#460e09",
        },
        accent: {
          50: "#fef1f6",
          100: "#fee5f0",
          200: "#ffcbe3",
          300: "#ffa1ca",
          400: "#ff6fa9",
          500: "#fa3a82",
          600: "#ea185c",
          700: "#cc0a44",
          800: "#a80c38",
          900: "#8c0f32",
          950: "#560119",
        },

        "white-50": "#FAFAFA",
        "black-900": "#212121",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
