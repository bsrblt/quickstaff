/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const plugin = require("tailwindcss/plugin");
const flattenColorPalette = require("tailwindcss/src/util/flattenColorPalette");
const toColorValue = require("tailwindcss/src/util/toColorValue");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/layout/Button.tsx",
    "./app/**/*.{js,css,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      colors: {
        transparent: "trans",
        current: "currentColor",
        white: "#ffffff",
        color1: "#9c2270",
        color2: "#501e98",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        bubblegum: "#ff77e9",
        bermuda: "#78dcca",
      },
      screens: {
        xs: "440px",
      },
    },
    plugins: [
      plugin(function ({ matchUtilities, e, config, theme }) {
        const textBorderSize = `--tw${config("prefix")}-text-border-size`;

        matchUtilities(
          {
            "text-border": (value) => ({
              "text-shadow": `0 0 var(${textBorderSize},1px) ${toColorValue(
                value
              )}`,
            }),
          },
          {
            values: (({ DEFAULT: _, ...colors }) => colors)(
              flattenColorPalette(theme("borderColor"))
            ),
            type: "color",
          }
        );

        matchUtilities(
          {
            "text-border-size": (value) => ({
              [textBorderSize]: value,
            }),
          },
          { values: theme("borderWidth") }
        );
      }),
    ],
    purge: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  },
});
