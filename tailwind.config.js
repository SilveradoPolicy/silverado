module.exports = {
    purge: ['./src/**/*.js', './src/**/*.jsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'brand-1': '#306184',
                'brand-2': '#739663',
                'brand-3': '#56959E',
                'brand-4': '#C4E7E7',
                'brand-5': '#A3C1BF',
                'brand-6': '#FCAF1B',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
