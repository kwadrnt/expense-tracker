require('dotenv').config()
require('./db')

const express = require('express')
const graphqlHTTP = require('express-graphql')

const schema = require('./graphql/schema')

const PORT = process.env.PORT || 3001

const server = express()

server.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}))

server.listen(PORT, () => {
    console.log(`Magic happens on http://localhost:${PORT}`) // eslint-disable-line no-console
})
