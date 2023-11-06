/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Giselle Pacheco`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `content`,
                path: `${__dirname}/content`,
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `projects`,
                path: `${__dirname}/content/projects`,
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
        },
        {
            resolve: "gatsby-plugin-react-svg",

            options: {
                rule: {
                    include: /\.inline\.svg$/,
                },
            },
        },
    ]
};