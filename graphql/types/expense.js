const {
    GraphQLFloat,
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} = require('graphql')
const { GraphQLDate } = require('graphql-iso-date')

const { getAccount } = require('../resolvers/expense')

module.exports = {}

// ****************
// Constructor Type
// ****************
module.exports.ExpenseType = new GraphQLObjectType({
    name: 'Expense',
    description: 'This represents an expense',
    fields: () => {
        const { CategoryType } = require('./category')
        const { AccountType } = require('./account')

        return {
            id: { type: new GraphQLNonNull(GraphQLID) },
            date: { type: new GraphQLNonNull(GraphQLDate) },
            description: { type: GraphQLString },
            price: { type: new GraphQLNonNull(GraphQLFloat) },
            category: {
                type: CategoryType,
                description: 'The category this expense is under',
                resolve: () => ({}),
            },
            account: {
                type: AccountType,
                description: 'The account this expense belongs to',
                resolve: getAccount,
            },
        }
    },
})

// ***********
// Input Types
// ***********
module.exports.ExpenseMutationInputType = new GraphQLInputObjectType({
    name: 'ExpenseMutationInputType',
    description: 'Expense payload definition for mutations',
    fields: () => ({
        id: { type: GraphQLID },
        category: { type: GraphQLID },
        account: { type: GraphQLID },
        date: { type: GraphQLDate },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat },
    }),
})

module.exports.ExpenseQueryInputType = new GraphQLInputObjectType({
    name: 'ExpenseQueryInputType',
    description: 'Expense payload definition for queries',
    fields: () => ({
        expense: { type: GraphQLID },
        categord: { type: GraphQLID },
        account: { type: GraphQLID },
        date: { type: GraphQLDate },
    }),
})
