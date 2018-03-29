const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

const logMessage = message => {
    console.log('***********************');
    console.log(message);
    console.log('***********************')
};

const errorMessage = message => {
    console.error('***********************');
    console.log(message);
    console.error('***********************')
}

const choosePageTemplate = (page, createPage) => {
    if (!page) {
        return;
    }
    if (page.path === '/') {
        page.layout = "index";
    } else {
        page.layout = "home";
    }
    logMessage(`
        Creating page for: 
        path - ${page.path}
        layout - ${page.layout}
    `);
    createPage(page);
};

const createWordPressPages = (
    resolve,
    reject,
    graphql,
    createPage
) => {
    graphql(
        `
            {
              allWordpressPost {
                edges {
                  node {
                    id
                    slug
                    status
                    template
                    format
                  }
                }
              }
            }
          `
    ).then(result => {
        console.log(JSON.stringify(result, null, 4));
        if (result.errors) {
            errorMessage(result.errors);
            reject(result.errors)
        }
        const postTemplate = path.resolve(`./src/layouts/blog/post.js`);
        _.each(result.data.allWordpressPost.edges, edge => {
            logMessage(`
                Creating blog page
                slug - ${edge.node.slug}
            `);
            createPage({
                path: `blog/${edge.node.slug}`,
                component: slash(postTemplate),
                layout: 'home',
                context: {
                    id: edge.node.id,
                },
            })
        });
        resolve()
    })
};

exports.createPages = ({
                           graphql,
                           boundActionCreators,
                           page
}) => {
    console.log(JSON.stringify({
        graphql,
        boundActionCreators,
        page
    }, null, 4));
    const {createPage} = boundActionCreators;
    return new Promise((resolve, reject) => {
        choosePageTemplate(page, createPage);
        createWordPressPages(resolve, reject, graphql, createPage);
    })
};

exports.onCreatePage = async ({ page, boundActionCreators }) => {
    const { createPage } = boundActionCreators;

    return new Promise((resolve) => {
        choosePageTemplate(page, createPage);
        resolve();
    });
};