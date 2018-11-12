const {
    GraphQLID,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} = require('graphql')

module.exports = {}

// ****************
// Constructor Type
// ****************
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
