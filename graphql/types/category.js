const {
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} = require('graphql')

const { getExpenses } = require('../resolvers/category')

module.exports = {}

// ****************
// Constructor Type
// ****************
module.exports.CategoryType = new GraphQLObjectType({
    name: 'Category',
    description: 'This represents a category',
    fields: () => {
        const { ExpenseType } = require('./expense')

        return {
            id: { type: new GraphQLNonNull(GraphQLID) },
            name: { type: new GraphQLNonNull(GraphQLString) },
            expenses: {
                type: new GraphQLList(ExpenseType),
                description: 'List of all Expenses',
                resolve: getExpenses,
            },
        }
    },
})

// ***********
// Input Types
// ***********
module.exports.CategoryQueryInputType = new GraphQLInputObjectType({
    name: 'CategoryQueryInputType',
    description: 'Category payload definition for queries',
    fields: () => ({
        id: { type: GraphQLID },
    }),
})
