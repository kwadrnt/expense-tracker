const {
    GraphQLFloat,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLString,
} = require('graphql')

const {
    AccountMutationInputType,
    AccountQueryInputType,
    AccountType,
} = require('../types/account.js')

const Accounts = require('../../db/schema/account.js')

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
        resolve: (rootValue, { input }) => Accounts.findOne({ id: input.id }, (err, account) => account),
    },
    getAccounts: {
        type: new GraphQLList(AccountType),
        description: 'Get all accounts',
        resolve: (rootValue, { input }) => Accounts.find({}, (err, accounts) => accounts),
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
            return {
                id: 2304384,
                name: input.name,
            }
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
