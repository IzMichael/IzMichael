/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            height: {
                screen: '100dvh',
            },
            colors: {
                brand: {
                    primary: '#416EB1', // Blue
                    secondary: '#51678C', // Grey
                    tertiary: '#6A41AB', // Purple
                    quaternary: '#E4E8EF', // White-ish
                    quinary: '#ADBDCC', // Pale Grey
                    senary: '#2E6BC6', // Paler Blue
                },
            },
        },
        fontFamily: {
            jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        },
    },
    plugins: [],
};
