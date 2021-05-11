/* eslint-disable global-require */
module.exports = {
    purge: ['./src/**/*.js', './src/**/*.jsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        h1: {
                            color: 'brand-1',
                        },
                        h2: {
                            color: 'brand-1',
                        },
                        h3: {
                            color: 'brand-1',
                        },
                        h4: {
                            color: 'brand-1',
                        },
                    },
                },
            },
            colors: {
                'brand-1': '#306184',
                'brand-2': '#739663',
                'brand-3': '#56959E',
                'brand-4': '#C4E7E7',
                'brand-5': '#A3C1BF',
                'brand-6': '#FCAF1B',
            },
            fontSize: {
                'ts-h1': ['2.488rem', '2.488rem'],
                'ts-h2': ['2.074rem', '3.11rem'],
                'ts-h3': ['1.728rem', '2.16rem'],
                'ts-h4': ['1.44rem', '1.801rem'],
                'ts-h5': ['1.2rem', '1.5rem'],
                'ts-body': ['1rem', '1.5rem'],
                'ts-sub-detail': ['0.833rem', '1.04rem'],
                'ts-caption': ['0.694rem', '0.868rem'],
                'ts-citation': ['0.579rem', '0.724rem'],
            },
            gridTemplateRows: {
                7: 'repeat(7, minmax(0, fr))',
            },
            height: {
                '3/4-screen': '75vh',
            },
            minHeight: {
                '3/4-screen': '75vh',
                '1/2-screen': '50vh',
                '1/4-screen': '25vh',
            },
            lineHeight: {
                12: '3rem',
            },
        },
        container: (theme) => ({
            center: true,
            padding: theme('spacing.5'),
        }),
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
};
