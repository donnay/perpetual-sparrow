import _ from 'lodash';

export default function(...pathParts) {
    const result = _.compact(pathParts).join('/').replace(/\/{2,}/g, '/');
    return result || '.';
}
