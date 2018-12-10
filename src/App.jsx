import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'

import routes from 'routes'

import { getApolloClient } from 'utils/apollo'

const App = () => (
    <ApolloProvider client={getApolloClient()}>
        <BrowserRouter>
            <Switch>
                {routes.map((route, idx) => (
                    <Route key={idx} exact {...route} />
                ))}
                <Redirect from={'*'} to={'/'} />
            </Switch>
        </BrowserRouter>
    </ApolloProvider>
)

export default App
