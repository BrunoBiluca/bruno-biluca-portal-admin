'use strict';

const categoriesSettings = require("../models/categories.settings.json");
const linkBuilder = require("../../utils/linkBuilder")

module.exports = {
    async find(params, populate){
        let results = await strapi
            .query(categoriesSettings.collectionName)
            .find(params, populate);

        return results.map(r => {
            return {
                ...r,
                link: linkBuilder.link(categoriesSettings.collectionName, r.id)
            }
        });

    },
    async findOne(params, populate) {
        let result = await strapi
            .query(categoriesSettings.collectionName)
            .findOne(params, populate);

        return {
            ...result,
            link: linkBuilder.link(categoriesSettings.collectionName, result.id)
        };
    }
};
