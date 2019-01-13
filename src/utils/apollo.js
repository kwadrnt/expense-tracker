import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

let client

export function getApolloClient() {
    if (!client) {
        client = new ApolloClient({
            link: createHttpLink({ uri: `http://localhost:3001/graphql` }),
            cache: new InMemoryCache(),
            connectToDevTools: true,
            queryDeduplication: true,
            dataIdFromObject: o => o.id,
        })
    }

    return client
}
