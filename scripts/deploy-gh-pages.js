'use strict';

var ghpages = require('gh-pages');

main();

function main() {
    ghpages.publish('./gh-pages', (err) => {
        if (err) {
            console.error('Deployment failed:', err);
        } else {
            console.log('Deployment successful!');
        }
    });
}