import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)'],
      },
      backgroundImage: {
        'landing': "url('/image/ev/hero.jpg')",
        'about': "url('/image/ev/aboutus.jpg')",
        'contact': "url('/image/ev/contactus.jpg')",
        'product': "url('/image/ev/productpagebackground.jpg')",
      }
    },
  },
  plugins: [],
});

export default config;
