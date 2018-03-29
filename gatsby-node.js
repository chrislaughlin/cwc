const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

const realWeddingsQuery = require('./src/queries/realWeddings');
const blogPosts = require('./src/queries/blogPosts');
const logger = require('./src/utils/logger');


const choosePageTemplate = (
    page,
    createPage
) => {
    if (!page) {
        return;
    }
    if (page.path === '/') {
        page.layout = "index";
    } else {
        page.layout = "home";
    }
    logger.logMessage(`
        Creating page for: 
        path - ${page.path}
        layout - ${page.layout}
    `);
    createPage(page);
};

const createRealWeddingsPages = (
    resolve,
    reject,
    graphql,
    createPage
) => {
    const postTemplate = path.resolve(`./src/layouts/blog/post.js`);
    graphql(realWeddingsQuery.query).then(result => {
        if (result.errors) {
            logger.errorMessage(result.errors);
            reject(result.errors)
        }
        _.each(result.data.allWordpressPost.edges, edge => {
            logger.logMessage(`
                Creating wedding page
                slug - ${edge.node.slug}
            `);
            createPage({
                path: `weddings/${edge.node.slug}`,
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

const createBlogPostPages = (
    resolve,
    reject,
    graphql,
    createPage
) => {
    const postTemplate = path.resolve(`./src/layouts/blog/post.js`);
    graphql(blogPosts.query).then(result => {
        if (result.errors) {
            logger.errorMessage(result.errors);
            reject(result.errors)
        }
        _.each(result.data.allWordpressPost.edges, edge => {
            logger.logMessage(`
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
        createRealWeddingsPages(resolve, reject, graphql, createPage);
        createBlogPostPages(resolve, reject, graphql, createPage);
    })
};

exports.onCreatePage = async ({
    page,
    boundActionCreators
}) => {
    const { createPage } = boundActionCreators;

    return new Promise((resolve) => {
        choosePageTemplate(page, createPage);
        resolve();
    });
};