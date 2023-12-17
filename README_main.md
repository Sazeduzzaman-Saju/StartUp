<!-- Start To Last Documentation And Steps How I Install And Build  -->

Step 1. Installed The Vite Latest In My Desire Project Folder With CMD.
    NB: https://vitejs.dev/guide/ (Site Link)  NPM = npm create vite@latest

Step 2. Remove All Css From "index.css" Style Sheet From "src" Folder.
    NB: "src/index.css" (Remove All CSS).

Step 3. App.js Remove All Code and Press "rsc & clt+space". With This Command Auto Make React Boilar Plate.

Step 4. Now Install CSS Libery Tailwind Css & Daysi UI For Frontend Design .
Step 5. Installed The Tailwind CSS In My Desire Project Folder With CMD.
    NB: https://tailwindui.com/documentation (Site Link)  NPM = npm install tailwin dcss@latest

Step 6. Same Installed The Daysi Ui In My Desire Project Folder With CMD.
    NB: https://daisyui.com/docs/install/ (Site Link)  NPM = npm i -D daisyui@latest


Step 7. Now Configure The Whole Tailwind. Go The tailwind.config.js Folder And Past The Code
    NB: 
        /** @type {import('tailwindcss').Config} */
        module.exports = {
        content: ["./src/**/*.{html,js}"],
        theme: {
            extend: {},
        },
        plugins: [require("daisyui")],
        }
    
Step 8. Hit The Command In You CMD or Power Shell.
    NB: npm run dev

Step 8. If All Gose Well Then You See In THe Localhost port:5173 or what ever your port Blnk White Screen With Your Testing Text. 
    NB: http://localhost:5173/