const withMT = require("@material-tailwind/react/utils/withMT");
const flowbite = require("flowbite-react/tailwind");

module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        heading: "rgb(24,24,29)",
        text: "rgba(29,29,29,0.8)",
        white: "#fff",
        black: "#212529",
        helper: "#8490ff",
        bg: "#F6F8FA",
        footer_bg: "#0a1435",
        btn: "rgb(98,84,243)",
        hr: "#fffff",
        border: "rgba(98, 84, 243, 0.5)",
        gradient:
          "linear-gradient(0deg, rgb(132, 144, 255) 0%, rgb(98, 189, 252) 100%)",
        shadow:
          "rgba(0,0,0,0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
      },
      media: {
        mobile: "768px",
        tab: "998px",
      },
      zIndex: {
        99: "99",
      },
    },
  },

  plugins: [flowbite.plugin()],
});
