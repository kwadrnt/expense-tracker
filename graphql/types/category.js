const {
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} = require('graphql')

const { getTransactions } = require('../resolvers/category')

// ****************
// Constructor Type
// ****************
const CategoryType = new GraphQLObjectType({
    name: 'Category',
    description: 'This represents a category',
    fields: () => {
        const { TransactionType } = require('./transaction')

        return {
            id: { type: new GraphQLNonNull(GraphQLID) },
            name: { type: new GraphQLNonNull(GraphQLString) },
            transactions: {
                type: new GraphQLList(TransactionType),
                description: 'List of all transactions',
                resolve: getTransactions,
            },
        }
    },
})

// ***********
// Input Types
// ***********
const CategoryQueryInputType = new GraphQLInputObjectType({
    name: 'CategoryQueryInputType',
    description: 'Category payload definition for queries',
    fields: () => ({
        id: { type: GraphQLID },
    }),
})

module.exports = {
    CategoryType,
    CategoryQueryInputType,
}
