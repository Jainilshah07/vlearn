// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:
         {
           'hero': "url('https://img.freepik.com/free-vector/gradient-abstract-colorful-shapes-background_23-2149120340.jpg?w=900&t=st=1674781379~exp=1674781979~hmac=5ebd99d809c178d70fbd1118a81be626c10e447cb6447fc3c325a9d3f9593adc')"
         }
    },
  },
  plugins: [],
}