/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        // fontFamily: {
        //   "'Open Sans'": ["'Open Sans'", 'sans-serif'],
        // }
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
