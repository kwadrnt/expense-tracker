const {
    GraphQLFloat,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLString,
} = require('graphql')

const db = require('../../mongo/index.js')

const { 
    AccountMutationInputType,
    AccountQueryInputType,
    AccountType,
} = require('../types/account.js')

module.exports = {}

// *******
// QUERIES
// *******
module.exports.accountQueries = {
    getAccount: {
        type: AccountType,
        description: 'Get a specific account',
        args: {
            input: { type: new GraphQLNonNull(AccountQueryInputType) },
        },
        resolve: (rootValue, { input }) => {
            return {}
        },
    },
    getAccounts: {
        type: new GraphQLList(AccountType),
        description: 'Get all accounts',
        args: {
            input: { type: new GraphQLNonNull(AccountQueryInputType) },
        },
        resolve: (rootValue, { input }) => {
            return []
        },
    },
}

// *********
// MUTATIONS
// *********
module.exports.accountMutations = {
    createAccount: {
        type: AccountType,
        description: 'Create a new account',
        args: {
            input: { type: new GraphQLNonNull(AccountMutationInputType) },
        },
        resolve: (rootValue, { input }) => {
            return {}
        },
    },
    deleteAccount: {
        type: AccountType,
        description: 'Delete an existing account',
        args: {
            input: { type: new GraphQLNonNull(AccountMutationInputType) },
        },
        resolve: (rootValue, { input }) => {
            return {}
        },
    },
    updateAccount: {
        type: AccountType,
        description: 'Update an existing account',
        args: {
            input: { type: new GraphQLNonNull(AccountMutationInputType) },
        },
        resolve: (rootValue, { input }) => {
            return {}
        },
    },
}
