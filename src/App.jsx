import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import routes from 'routes'

const App = () => (
    <BrowserRouter>
        <Switch>
            {routes.map((route, idx) => (
                <Route key={idx} exact {...route} />
            ))}

            <Redirect from={'*'} to={'/'} />
        </Switch>
    </BrowserRouter>
)

export default App
