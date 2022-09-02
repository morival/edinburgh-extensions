module.exports = {
  siteMetadata: {
    siteUrl: `https://www.edinburgh-extensions.co.uk`,
    title: `Edinburgh Extensions`,
    description: `New builds, Extensions, Renovations, Bathrooms, Finishing Joinery, Masonry`,
    links: {
      link_1: `Our Services`,
      link_2: `Our Projects`,
      link_3: `About Us`,
      link_4: `Contact Us`,
    },
    contact: {
      address: `address details`,
      phone_1: `phone number 1`,
      phone_2: `phone number 2`,
      email: `email address`,
    },
    social: {
      facebook: `https://facebook.com`,
      instagram: `https://instagram.com`,
    },
    images: {
      
    }
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat:300,400`, `source sans pro\:300,400,400i,700`],
        display: `swap`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/gatsby-icon.png',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
