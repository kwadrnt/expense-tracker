import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ACCOUNTS_PATH } from 'constants/urls'

import AccountsPage from 'components/AccountsPage'
import TestPage from 'components/TestPage'

const accounts = (
    <React.Fragment>
        <Route exact path={'/'} component={TestPage} />
        <Route exact path={ACCOUNTS_PATH} component={AccountsPage} />
    </React.Fragment>   
)

export default accounts
