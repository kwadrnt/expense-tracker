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
        const { AccountType } = require('./account')
        const { CategoryType } = require('./category')

        return {
            id: { type: new GraphQLNonNull(GraphQLID) },
            account: {
                type: AccountType,
                description: 'The account this expense belongs to',
                resolve: getAccount,
            },
            category: {
                type: CategoryType,
                description: 'The category this expense is under',
                resolve: () => ({}),
            },
            date: { type: new GraphQLNonNull(GraphQLDate) },
            description: { type: GraphQLString },
            price: { type: new GraphQLNonNull(GraphQLFloat) },
            type: { type: new GraphQLNonNull(GraphQLString) },
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
        account: { type: GraphQLID },
        category: { type: GraphQLID },
        date: { type: GraphQLDate },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat },
    }),
})

module.exports.ExpenseQueryInputType = new GraphQLInputObjectType({
    name: 'ExpenseQueryInputType',
    description: 'Expense payload definition for queries',
    fields: () => ({
        id: { type: GraphQLID },
        account: { type: GraphQLID },
        category: { type: GraphQLID },
        date: { type: GraphQLDate },
    }),
})
