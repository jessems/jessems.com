const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-code": "#435c93",
            code: {
              "&::before": {
                content: '"" !important',
              },
              "&::after": {
                content: '"" !important',
              },
            },
          },
        },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
