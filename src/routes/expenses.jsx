import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { EXPENSES_PATH } from 'constants/urls'

import ExpensesPage from 'components/ExpensesPage'

const expenses = (
    <React.Fragment>
        <Route exact path={EXPENSES_PATH} component={ExpensesPage} />
    </React.Fragment>
)

export default expenses
