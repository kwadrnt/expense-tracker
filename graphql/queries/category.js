const {
    GraphQLList,
} = require('graphql')

const { CategoryType } = require('../types/category.js')

// Queries
module.exports = {}

module.exports.categoryQueries = {
    categories: {
        type: new GraphQLList(CategoryType),
        description: 'Get all categories',
        resolve: () => {
            return []
        },
    },
}
