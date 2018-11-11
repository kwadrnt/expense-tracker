const {
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLList,
    GraphQLInputObjectType,
    GraphQLNonNull,
} = require('graphql')

const { AccountType } = require('../types/account.js')

// Input Types
const AccountQueryInputType = new GraphQLInputObjectType({
    name: 'AccountQueryInputType',
    description: 'Account payload definition for queries',
    fields: () => ({
        accountId: { type: GraphQLID },
    }),
})

const AccountMutationInputType = new GraphQLInputObjectType({
    name: 'AccountMutationInputType',
    description: 'Account payload definition for mutations',
    fields: () => ({
        accountId: { type: GraphQLID },
        name: { type: GraphQLString },
        balance: { type: GraphQLFloat },
    }),
})

// Queries
module.exports = {}

module.exports.accountQueries = {
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
}

// Mutations

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
}
