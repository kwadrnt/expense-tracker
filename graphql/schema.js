const { GraphQLList, GraphQLObjectType, GraphQLSchema } = require('graphql')
const { accountQueries, accountMutations } = require('./queries/account.js')
const { categoryQueries } = require('./queries/category.js')
const { expenseQueries, expenseMutations } = require('./queries/expense.js')

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            ...accountQueries,
            ...categoryQueries,
            ...expenseQueries,
        },
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            ...accountMutations,
            ...expenseMutations,
        },
    }),
})
