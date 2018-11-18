const { GraphQLList, GraphQLNonNull } = require('graphql')

const { CategoryType, CategoryQueryInputType } = require('../types/category')

const { getCategory, getCategories } = require('../resolvers/category')

module.exports = {}

// *******
// QUERIES
// *******
module.exports.categoryQueries = {
    getCategory: {
        type: CategoryType,
        description: 'Get a specific category',
        args: {
            input: { type: new GraphQLNonNull(CategoryQueryInputType) },
        },
        resolve: getCategory,
    },
    getCategories: {
        type: new GraphQLList(CategoryType),
        description: 'Get all categories',
        resolve: getCategories,
    },
}
