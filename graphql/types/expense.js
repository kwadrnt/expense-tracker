const {
    GraphQLFloat,
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} = require('graphql')
const { GraphQLDate } = require('graphql-iso-date')

module.exports = {}

// ****************
// Constructor Type
// ****************
module.exports.ExpenseType = new GraphQLObjectType({
    name: 'Expense',
    description: 'This represents an expense',
    fields: () => {
        const { CategoryType } = require('./category.js')
        const { AccountType } = require('./account.js')

        return {
            id: { type: new GraphQLNonNull(GraphQLID) },
            date: { type: new GraphQLNonNull(GraphQLDate) },
            description: { type: GraphQLString },
            price: { type: new GraphQLNonNull(GraphQLFloat) },
            category: {
                type: CategoryType,
                description: 'The category this expense is under',
                resolve: () => {
                    return {}
                },
            },
            account: {
                type: AccountType,
                description: 'The account this expense belongs to',
                resolve: () => {
                    return {}
                },
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
        // userId: { type: new GraphQLNonNull(GraphQLID) },
        expenseId: { type: GraphQLID },
        categoryId: { type: GraphQLID },
        accountId: { type: GraphQLID },
        date: { type: GraphQLDate },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat },
    }),
})

module.exports.ExpenseQueryInputType = new GraphQLInputObjectType({
    name: 'ExpenseQueryInputType',
    description: 'Expense payload definition for queries',
    fields: () => ({
        // userId: { type: new GraphQLNonNull(GraphQLID) },
        expenseId: { type: GraphQLID },
        categoryId: { type: GraphQLID },
        accountId: { type: GraphQLID },
        date: { type: GraphQLDate },
    }),
})
