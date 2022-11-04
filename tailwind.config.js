module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontweight: {
      thin: 200,
      extralight: 200,
      light: 300,
      Regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      "extra-bold": 800,
      black: 900,
    },
    colors: {
      dark: "#13111a",
      black: "#000000",
      dark_light: "#1d1a27",
      purple_light: "#c7c5f2",
      neutral: "#fff",
      gradient:
        "linear-gradient(110.52deg, rgba(248, 202, 202, 0.44) 9%, rgba(207, 163, 241, 0.22) 47.77%, #7C7BF4 90.75%))",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
