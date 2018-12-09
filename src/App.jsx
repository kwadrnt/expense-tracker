import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import accounts from 'routes/accounts'
import expenses from 'routes/expenses'

const App = () => (
    <BrowserRouter>
        <React.Fragment>
            {accounts}
            {expenses}
        </React.Fragment>
    </BrowserRouter>
)

export default App
