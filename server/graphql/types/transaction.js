const {
    GraphQLFloat,
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} = require('graphql')
const { GraphQLDate } = require('graphql-iso-date')

const { getAccount, getCategory, getTransactionType } = require('../resolvers/Transaction')

// ****************
// Constructor Type
// ****************
const TransactionType = new GraphQLObjectType({
    name: 'Transaction',
    description: 'This represents an transacton',
    fields: () => {
        const { AccountType } = require('./account')
        const { CategoryType } = require('./category')
        const { TransactionTypeType } = require('./transactionType')

        return {
            id: { type: new GraphQLNonNull(GraphQLID) },
            accountFrom: {
                type: new GraphQLNonNull(AccountType),
                description: 'The account this transacton happens applies to',
                resolve: (ownProps) => getAccount(ownProps, 'accountFrom'),
            },
            accountTo: {
                type: AccountType,
                description: 'The account this transacton transfer expense to',
                resolve: (ownProps) => getAccount(ownProps, 'accountTo'),
            },
            category: {
                type: CategoryType,
                description: 'The category this transacton is under',
                resolve: getCategory,
            },
            date: { type: new GraphQLNonNull(GraphQLDate) },
            description: { type: GraphQLString },
            price: { type: new GraphQLNonNull(GraphQLFloat) },
            type: {
                type: TransactionTypeType,
                description: 'Transaction type',
                resolve: getTransactionType,
            },
        }
    },
})

// ***********
// Input Types
// ***********
const TransactionMutationInputType = new GraphQLInputObjectType({
    name: 'TransactionMutationType',
    description: 'Transaction payload definition for mutations',
    fields: () => ({
        id: { type: GraphQLID },
        accountFrom: { type: GraphQLID },
        accountTo: { type: GraphQLID },
        category: { type: GraphQLID },
        date: { type: GraphQLDate },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat },
        type: { type: GraphQLString },
    }),
})

const TransactionQueryInputType = new GraphQLInputObjectType({
    name: 'TransactionQueryInputType',
    description: 'Transaction payload definition for queries',
    fields: () => ({
        id: { type: GraphQLID },
        accountFrom: { type: GraphQLID },
        accountTo: { type: GraphQLID },
        category: { type: GraphQLID },
        date: { type: GraphQLDate },
        type: { type: GraphQLString },
    }),
})

module.exports = {
    TransactionType,
    TransactionMutationInputType,
    TransactionQueryInputType,
}
