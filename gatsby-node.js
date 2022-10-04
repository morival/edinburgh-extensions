const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql(`
    query NodesQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      site {
        siteMetadata {
          services {
            title
            relativePath
          }
        }
      }
    }
    `)

    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: '/projects/' + node.frontmatter.slug,
            component: path.resolve('./src/templates/project-template.js'),
            context: { slug: node.frontmatter.slug }
        })
    });
    // data.site.siteMetadata.services.forEach(service => {
    //     actions.createPage({
    //         path: '/services/' + service.relativePath,
    //         component: path.resolve('./src/templates/service-template.js'),
    //         context: { slug: service.relativePath }
    //     })
    // });

}