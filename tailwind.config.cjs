/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            height: {
                screen: '100dvh'
            },
            brand: {
                primary: "#416EB1",
                secondary: "#51678C",
                tertiary: "#6A41AB",
                quaternary: "#E4E8EF",
                quinary: "#ADBDCC",
                senary: "#2E6BC6"
            }
        },
        fontFamily: {
            sans: ['Lexend', 'Rubik', 'sans-serif'],
            mono: ['Spline Sans Mono', 'monospace'],

            lexend: ['Lexend'],
            splinesans: ['Spline Sans Mono'],
            rubik: ['Rubik'],
        },
    },
    plugins: [],
}
