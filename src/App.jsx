import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'

import Container from 'components/common/Container'
import Header from 'components/common/Header'

import AccountsPageContainer from 'containers/AccountsPage'

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

                        <Route exact to={ACCOUNTS_PATH} component={AccountsPageContainer} />

                        <Redirect from={'*'} to={'/'} />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        </Container>
    </ApolloProvider>
)

export default App
