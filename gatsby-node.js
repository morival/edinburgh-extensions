const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql(`
    query ProjectNodesQuery {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
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
    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: '/services/' + node.frontmatter.slug,
            component: path.resolve('./src/templates/service-template.js'),
            context: { slug: node.frontmatter.slug }
        })
    });

}