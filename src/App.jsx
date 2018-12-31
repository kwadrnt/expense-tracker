import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'

import Container from 'components/common/Container'

import AccountsPageContainer from 'containers/AccountsPage'
import HeaderContainer from 'containers/common/Header'

import { BASE_PATH, ACCOUNTS_PATH } from 'constants/urls'

import { getApolloClient } from 'utils/apollo'

import './app.module.scss'

const App = () => (
    <ApolloProvider client={getApolloClient()}>
        <BrowserRouter>
            <Container className={'h-100'}>
                <HeaderContainer />

                <Switch>
                    <Redirect exact from={BASE_PATH} to={ACCOUNTS_PATH} />
                    <Route exact path={ACCOUNTS_PATH} component={AccountsPageContainer} />
                    {/*eslint-disable */}
                    <Route exact path={'/accounts/:id'} component={(props) => (<div>{props.match.params.id}</div>)} />
                    {/*eslint-enable */}
                    <Route component={() => (<div>not found</div>)} />
                </Switch>
            </Container>
        </BrowserRouter>
    </ApolloProvider>
)

export default App
