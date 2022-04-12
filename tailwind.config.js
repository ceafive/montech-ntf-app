module.exports = {
  content: ["./src/**/*", "./pages/**/*"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        avenir: ["Avenir", "sans-serif"],
      },
      colors: {
        brandBlue1: "#1E1A2F",
        brandGreen1: "#14F195",
        brandGray1: "#9D9D9D",
      },
      backgroundImage: {
        "banner-bg": "url('./public/images/hero_banner.png')",
      },
    },
  },
  plugins: [],
};
