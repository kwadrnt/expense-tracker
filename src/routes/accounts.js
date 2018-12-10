import { BASE_PATH, ACCOUNTS_PATH } from 'constants/urls'

import AccountsPage from 'components/AccountsPage'
import TestPage from 'components/TestPage'

const accounts = [
    {
        path: BASE_PATH,
        component: TestPage,
    },
    {
        path: ACCOUNTS_PATH,
        component: AccountsPage,
    },
]

export default accounts
