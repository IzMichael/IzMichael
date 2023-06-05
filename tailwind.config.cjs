/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            height: {
                screen: '100svh'
            },
        },
        fontFamily: {
            sans: ['Rubik']
        },
    },
    plugins: [],
}
