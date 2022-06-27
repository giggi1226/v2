module.exports = {
  siteMetadata: {
    title: `Giselle Pacheco`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
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
      resolve: `gatsby-transformer-remark`,
    },
  ],
}
