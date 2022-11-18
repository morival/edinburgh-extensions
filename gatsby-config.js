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
    links: [
      { name: `home`, link: `home` },
      { name: `services`, link: `services` },
      { name: `our work`, link: `projects` },
      { name: `about us`, link: `about` },
      { name: `contact us`, link: `contact` }
      // link_1: `home`,
      // link_2: `services`,
      // link_3: `our work`,
      // link_4: `about us`,
      // link_5: `contact us`,
    ],
    services: [
      {
        title: `extensions`,
        description: `If you are looking to expand your space for more freedom, you are in the right place. We can help you to take the first steps. We will run your dream project from day one to day finish. Providing high quality work across all the stages. We minimise the use of outside contractors to maintain a high level of detail and quality.`,
        relativePath: `services/ext-example.jpg`,
      }, {
        title: `renovations`,
        description: `Steel fitting is not an alien task for us. With multiple beams fitted across the city, we make structures stable and safe. We can alternate or take down any wall in your house no matter what its function is. No matter what weight or size the beam is, we can fit it.`,
        relativePath: `services/con-example.jpg`,
      }, {
        title: `new builds`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        relativePath: `services/ref-example.jpg`,
      }, {
        title: `conversions`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        relativePath: `services/ref-example.jpg`,
      },
    ],
    social: {
      instagram: `https://instagram.com`,
    },
    quotes: {
      quote_about: `We pride ourselves in finding innovative solutions to challenging projects`,
      quote_contact: `We are happy to hear your thoughts about your project at any time. You can ...`,
      quote_home_about: `Build Your Dreams With Us`,
      quote_home_services: `The roof is our limit`,
      quote_home_projects: `We nailed it!`,
      quote_home_testimonials: `What Our Clients Have To Say`,
      quote_projects: `Adding Quality in every project`,
      quote_services: `Creating dreams with beams`,
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
