/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            height: {
                screen: '100dvh',
            },
            colors: {
                teal: '#00cccc',
            },
        },
        fontFamily: {
            sans: ['Urbanist', 'sans-serif'],
        },
    },
    plugins: [],
};
