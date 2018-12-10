const { GraphQLObjectType, GraphQLSchema } = require('graphql')

const { accountMutations, accountQueries } = require('./queries/account')
const { categoryQueries } = require('./queries/category')
const { transactionMutations, transactionQueries } = require('./queries/transaction')

module.exports = new GraphQLSchema({
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            ...accountMutations,
            ...transactionMutations,
        },
    }),
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            ...accountQueries,
            ...categoryQueries,
            ...transactionQueries,
        },
    }),
})
