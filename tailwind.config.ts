// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            keyframes: {
                stretch: {
                    '0%, 100%': { transform: 'scaleY(0.5)' },
                    '50%': { transform: 'scaleY(1)' },
                },
            },
            animation: {
                'stretch': 'stretch 1s ease-in-out infinite',
            },
        },
    },
}
