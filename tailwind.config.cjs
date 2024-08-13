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
                    primary: '#333A71',
                    secondary: '#6E43AF',
                    tertiary: '#2B2D4C',
                    quaternary: '#A1B3C9',
                    quinary: '#D8E0EB',
                    senary: '#F8F8F8',
                },
            },
        },
        fontFamily: {
            sans: ['Urbanist', 'sans-serif'],
        },
    },
    plugins: [],
};
