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
      { name: `contact us`, link: `contact` },
    ],
    services: [
      {
        title: `extensions`,
        description: `Enhance your house with additional space. With us you will have the opportunity to optimise your extensions to your needs.`,
        types: [`kitchen extension`, `rear extension`, `side return extension`, `single storey extension`, `double storey extension`],
        subServices: [`substructure`, `superstructure`, `steel fitting`, `foundation`, `masonry`, `roof`, `structural frame`, `tiling`, `wall: load bearing walls, compartment walls, external walls, retaining walls`, `finishing joinery`],
        relativePath: `services/ext-example.jpg`,
      }, {
        title: `renovations`,
        description: `Restoring the past is not an easy task. Wherever you want to retain original character or bring a new life, at Edinburgh Extensions we will make it come true.`,
        types: [`kitchen renovation`, `bathroom renovation`, `bedroom renovation`],
        subServices: [`plastering & bonding`, `refit solutions`, `structural changes`, `property modernisation`, `tiling`, `removal and erection of partition walls`, `carpentry`, `finishing joinery`],
        relativePath: `services/ren-example.jpg`,
      }, {
        title: `new builds`,
        description: `...`,
        types: [`house`, `garden office`, `summer house`],
        subServices: [`substructure`, `superstructure`, `steel fitting`, `foundation`, `masonry`, `roof`, `structural frame`, `tiling`, `wall: load bearing walls, compartment walls, external walls, retaining walls`, `finishing joinery`],
        relativePath: `services/new-example.jpg`,
      }, {
        title: `conversions`,
        description: `Attic conversions can generate a substantial amount of extra living space. With a little bit of thought you can turn your useless space into a hub in your house.`,
        types: [`attic conversion`, `dormer formation`],
        subServices: [`steel fitting`, `structural frame`, `roof`, `finishing joinery`],
        relativePath: `services/con-example.jpg`,
      },
    ],
    social: {
      instagram: `https://www.instagram.com/edinburghextensions/`,
    },
    quotes: {
      quote_about: `We pride ourselves in finding innovative solutions to challenging projects`,
      quote_contact: `We are happy to hear your thoughts about your project at any time. You can ...`,
      quote_home_about: `Build Your Dreams With Us`,
      quote_home_services: `The roof is our limit`,
      quote_home_projects: `We nailed it!`,
      quote_home_testimonials: `What Our Clients Have To Say`,
      quote_projects: `Adding Quality in every project`,
      quote_services: `A lasting value`,
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
