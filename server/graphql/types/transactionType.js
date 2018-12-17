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
const TransactionTypeType = new GraphQLObjectType({
    name: 'TransactionType',
    description: 'Either EXPENSE, INCOME, or TRANSFER',
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
const TransactionTypeQueryInputType = new GraphQLInputObjectType({
    name: 'TransactionTypeQueryInputType',
    description: 'Transaction type payload definition for queries',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
    }),
})

module.exports = {
    TransactionTypeType,
    TransactionTypeQueryInputType,
}
