const { GraphQLList, GraphQLNonNull } = require('graphql')

const { getCategory, getCategories } = require('../resolvers/category')
const { CategoryType, CategoryQueryInputType } = require('../types/category')

// *******
// QUERIES
// *******
const categoryQueries = {
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

module.exports = {
    categoryQueries,
}
