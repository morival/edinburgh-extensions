module.exports = {
  siteMetadata: {
    siteUrl: `https://www.edinburgh-extensions.co.uk`,
    title: `Edinburgh Extensions`,
    description: `New builds, Extensions, Renovations, Bathrooms, Finishing Joinery, Masonry (Some Description...)`,
    contact: {
      street: `street`,
      city: `Edinburgh`,
      postcode: `postcode`,
      phone_1: `07841 581 119`,
      phone_2: `07508 953 012`,
      email: `edinburghextensions@yahoo.com`,
    },
    images: {
      
    },
    links: {
      link_1: `home`,
      link_2: `services`,
      link_3: `our work`,
      link_4: `about us`,
      link_5: `contact us`,
    },
    services: [
      {
        title: `construction`,
        description: `Steel fitting is not an alien task for us. With multiple beams fitted across the city, we make structures stable and safe. We can alternate or take down any wall in your house no matter what its function is. No matter what weight or size the beam is, we can fit it.`,
        relativePath: `services/con-example.jpg`,
      }, {
        title: `extensions`,
        description: `If you are looking to expand your space for more freedom, you are in the right place. We can help you to take the first steps. We will run your dream project from day one to day finish. Providing high quality work across all the stages. We minimise the use of outside contractors to maintain a high level of detail and quality.`,
        relativePath: `services/ext-example.jpg`,
      }, {
        title: `new builds`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        relativePath: `services/ref-example.jpg`,
      },
    ],
    slogans: {
      slogan_home_1: `Build your Dreams with us`,
      slogan_home_2: `The roof is our limit`,
      slogan_home_3: `We nailed it!`,
      slogan_home_4: `What Our Clients Have To Say`,
      slogan_services: `Creating dreams with beams`,
      slogan_projects: `Adding Quality in every project`,
      slogan_about: `Catchy Slogan (ethos, manifesto)`,
      slogan_contact: `Catchy Slogan (encouraging to get in touch)`,
    },
    social: {
      facebook: `https://facebook.com`,
      instagram: `https://instagram.com`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
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
        icon: 'src/images/Favicon.png',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `metadata`,
        path: `${__dirname}/src/markdown/metadata/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/markdown/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `testimonials`,
        path: `${__dirname}/src/markdown/testimonials/`,
      },
    },
  ],
}
