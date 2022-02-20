'use strict';

const server = require("../../config/server");

module.exports = {
    link: function (collectionName, id) {
        let serverHost = strapi.config.get('server.host', 'defaultValueIfUndefined');
        let serverPort = strapi.config.get('server.port', 'defaultValueIfUndefined');
        return `http://${serverHost}:${serverPort}/${collectionName}/${id}`;
    }
}