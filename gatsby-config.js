module.exports = {
  siteMetadata: {
    title: `Optik-Tack`,
    description: `Mediengestalter Abschlussprüfung 2020`,
    author: `Calvin Hinzer`,
  },
  plugins: [
    //{
    //  resolve: `gatsby-plugin-google-analytics`,
    //  options: {
    //    trackingId: "UA-98664399-2",
    //  },
    //},
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Optik-Tack`,
        short_name: `Optik-Tack`,
        start_url: `/`,
        background_color: `#26354B`,
        theme_color: `#FFE6A6`,
        display: `standalone`,
        icon: `src/images/logo-black.png`,
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
