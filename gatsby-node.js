/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, boundActionCreators }) => {
    const { createPage } = boundActionCreators;

    return new Promise((resolve, reject) => {
        if (page.path === '/') {
            console.log('page.path  ', page.path);
            console.log('page.path  : using INDEX layout');
            // It's assumed that `landingPage.js` exists in the `/layouts/` directory
            page.layout = "index";

            // Update the page.
            createPage(page);
        } else {
            console.log('page.path  ', page.path);
            console.log('page.path  : using HOME layout');
            page.layout = "home";

            // Update the page.
            createPage(page);
        }

        resolve();
    });
};