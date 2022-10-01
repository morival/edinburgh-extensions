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
    data.site.siteMetadata.services.forEach(node => {
        actions.createPage({
            path: '/services/' + node.title,
            component: path.resolve('./src/templates/service-template.js'),
            context: { slug: node.node.title }
        })
    });

}