module.exports = {
  variants: {
    zIndex: ["responsive", "hover", "focus"]
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["Poppins", "sans-serif"]
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px"
    },
    container: {
      center: true,
      padding: "4rem"
    },
    zIndex: {
      "-10": "-10",
      "-20": "-20",
      "-30": "-30",
      "-40": "-40",
      "-50": "-50"
    },
    extend: {
      colors: {
        cyan: "#9cdbff"
      },
      spacing: {
        "96": "24rem",
        "128": "32rem"
      }
    }
  },
  plugins: [require("tailwindcss-pseudo"), require("tailwindcss-accessibility")]
};
