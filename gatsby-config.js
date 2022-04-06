module.exports = {
  siteMetadata: {
    title: `Borj-e Kabotar`,
    description: `Borj–e Kabotar is a project born to focus on architecture and anthropology of the pigeons towers in the Isfahan province and to study these imposing buildings with a diameter that can reach 20 meters and a height that touches 15 m.`,
    author: `Domizia D'Erasmo`,
    siteUrl: `https://borjekabotar.com/`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-leaflet`,
    `gatsby-transformer-geojson`,
    "gatsby-plugin-next-seo",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/static/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/geojson/ptowers.json`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Cinzel Decorative\:400`,
          `Montserrat\:100,200,300,400,500,600,700,800`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "markdown",
        path: `${__dirname}/contents/`,
      },
    },
  ],
};
