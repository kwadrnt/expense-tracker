import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'

import routes from 'routes'

import Container from 'components/common/Container'
import Header from 'components/common/Header'

import { BASE_PATH, ACCOUNTS_PATH } from 'constants/urls'

import { getApolloClient } from 'utils/apollo'

import './app.module.scss'

const App = () => (
    <ApolloProvider client={getApolloClient()}>
        <Container className={'h-100'}>
            <BrowserRouter>
                <React.Fragment>
                    <Header />

                    <Switch>
                        <Redirect exact from={BASE_PATH} to={ACCOUNTS_PATH} />

                        {routes.map((route, idx) => (
                            <Route key={idx} exact {...route} />
                        ))}

                        <Redirect from={'*'} to={'/'} />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        </Container>
    </ApolloProvider>
)

export default App
