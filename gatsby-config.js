module.exports = {
    siteMetadata: {
        title: 'Silverado Policy Accelerator',
        titleTemplate: '%s',
        url: 'https://www.silverado.org',
        description: `Silverado is a think tank dedicated to securing enduring American prosperity and competitiveness by investing in innovative bipartisan policy solutions.`,
        image: '',
        twitter: '@SilveradoPolicy',
    },
    plugins: [
        {
            resolve: 'gatsby-background-image',
            options: {
                // add your own characters to escape, replacing the default ':/'
                specialChars: '/:',
            },
        },
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                test: /\.js$|\.jsx$/,
                exclude: /(node_modules|.cache|public)/,
                stages: ['develop'],
                options: {
                    emitWarning: true,
                    failOnError: false,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint:
                    'https://gmail.us2.list-manage.com/subscribe/post?u=a087c748c5de48bd623e1be32&id=56260e3441',
                timeout: 3500,
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-postcss',
    ],
};
