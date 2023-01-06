/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 5s linear infinite',
            },
        },
    },
    plugins: [],
};
