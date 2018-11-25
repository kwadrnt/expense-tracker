const {
    GraphQLFloat,
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} = require('graphql')

const { getTransactions, getBalance } = require('../resolvers/account')

// ****************
// Constructor Type
// ****************
const AccountType = new GraphQLObjectType({
    name: 'Account',
    description: 'This repsents an account',
    fields: () => {
        const { TransactionType } = require('./transaction')

        return {
            id: {type: new GraphQLNonNull(GraphQLID)},
            name: {type: new GraphQLNonNull(GraphQLString)},
            balance: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: 'Current balance of the account',
                resolve: getBalance,
            },
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
const AccountMutationInputType = new GraphQLInputObjectType({
    name: 'AccountMutationInputType',
    description: 'Account payload definition for mutations',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        balance: { type: GraphQLFloat },
    }),
})

const AccountQueryInputType = new GraphQLInputObjectType({
    name: 'AccountQueryInputType',
    description: 'Account payload definition for queries',
    fields: () => ({
        id: { type: GraphQLID },
    }),
})

module.exports = {
    AccountType,
    AccountMutationInputType,
    AccountQueryInputType,
}
