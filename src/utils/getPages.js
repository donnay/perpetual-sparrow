import _ from "lodash";

export default function(pages, folderPath) {
    folderPath = _.trim(folderPath, '/');
    const folderPathParts = _.split(folderPath, '/');
    return _.filter(pages, page => {
        const url = _.trim(page.url, '/');
        const urlParts = _.split(url, '/');
        return urlParts.length > folderPathParts.length && _.isEqual(urlParts.slice(0, folderPathParts.length), folderPathParts);
    });
}
