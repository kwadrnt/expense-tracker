const { GraphQLList } = require('graphql')

const { CategoryType } = require('../types/category')

const { findCategories } = require('../resolvers/category')

module.exports = {}

// *******
// QUERIES
// *******
module.exports.categoryQueries = {
    getCategories: {
        type: new GraphQLList(CategoryType),
        description: 'Get all categories',
        resolve: findCategories,
    },
}
