/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "hero-image":
          "url(https://www.istockphoto.com/photo/the-mother-sits-on-the-floor-and-watches-something-on-the-digital-tablet-with-her-gm1616062552-531293094?utm_source=pixabay&utm_medium=affiliate&utm_campaign=ADP_photo_sponsored_P1&utm_content=https%3A%2F%2Fpixabay.com%2Fphotos%2Ffurniture-living-room-modern-998265%2F&utm_term=furniture+living+room)",
      },
    },
  },
  plugins: [],
};
