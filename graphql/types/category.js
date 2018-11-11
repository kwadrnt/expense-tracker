const {
    GraphQLID,
    GraphQLString,
    GraphQLObjectType,
    GraphQLNonNull,
} = require('graphql')

module.exports = {}

module.exports.CategoryType = new GraphQLObjectType({
    name: 'Category',
    description: 'This represents a category',
    fields: () => {
        return {
            id: { type: new GraphQLNonNull(GraphQLID) },
            name: { type: new GraphQLNonNull(GraphQLString) },
        }
    },
})
