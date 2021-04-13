module.exports = {
    siteMetadata: {
        title: 'Silverado Policy Accelerator',
        titleTemplate: '%s',
        siteUrl: 'https://www.silverado.org',
        description: `Silverado is a think tank dedicated to securing enduring American prosperity and competitiveness by investing in innovative bipartisan policy solutions.`,
        image: '',
        twitter: '@SilveradoPolicy',
    },
    pathPrefix: '/blog',
    plugins: [
        {
            resolve: `gatsby-plugin-breadcrumb`,
            options: {
                // defaultCrumb: optional To create a default crumb
                // see Click Tracking default crumb example below
                defaultCrumb: {
                    location: {
                        pathname: '/',
                    },
                    crumbLabel: 'HomeCustom',
                    crumbSeparator: ' / ',
                },
                // usePathPrefix: optional, if you are using pathPrefix above
                usePathPrefix: '/blog',
            },
        },
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
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    'G-V9QQ8RT79P', // Google Analytics / GA
                    'AW-CONVERSION_ID', // Google Ads / Adwords / AW
                    'DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
                ],
                // This object gets passed directly to the gtag config command
                // This config will be shared across all trackingIds
                gtagConfig: {
                    // optimize_id: 'OPT_CONTAINER_ID',
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: true,
                    // Setting this parameter is also optional
                    respectDNT: true,
                    // Avoids sending pageview hits from custom paths
                    // exclude: ['/preview/**', '/do-not-track/me/too/'],
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
