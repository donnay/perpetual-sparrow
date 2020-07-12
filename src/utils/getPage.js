import _ from 'lodash';

export default function(pages, pagePath) {
    pagePath = pagePath.replace(/^\//, '');
    return _.find(pages, {relativePath: pagePath});
}
