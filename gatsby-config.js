module.exports = {
    siteMetadata: {
        title: 'CWC - Creative Wedding Company'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        {
            resolve: "gatsby-source-wordpress",
            options: {
                baseUrl: "cwc.liffydesigns.co.uk",
                protocol: "https",
                hostingWPCOM: false,
                useACF: true,
                verboseOutput: false,
                auth: {
                    // If auth.user and auth.pass are filled, then the source plugin will be allowed
                    // to access endpoints that are protected with .htaccess.
                    htaccess_user: "your-htaccess-username",
                    htaccess_pass: "your-htaccess-password",
                    htaccess_sendImmediately: false,

                    // If hostingWPCOM is true then you will need to communicate with wordpress.com API
                    // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
                    // then add your clientId, clientSecret, username, and password here
                    wpcom_app_clientSecret:
                        "NMPnXYFtj2gKas7V1kZyMxr7oLry9V5ZxIyBQGu2txjVHg0GhFz6RYcKopkHICYg",
                    wpcom_app_clientId: "54793",
                    wpcom_user: "gatsbyjswpexample@gmail.com",
                    wpcom_pass: "very-secured-password",
                },
                // // Search and Replace Urls across WordPress content
                // searchAndReplaceContentUrls: {
                //     sourceUrl: "https://source-url.com",
                //     replacementUrl: "https://replacement-url.com",
                // },
            },
        }
    ],
    pathPrefix: `/cwc`
};
