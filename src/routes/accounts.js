import { BASE_PATH, ACCOUNTS_PATH } from 'constants/urls'

import AccountsPageContainer from 'containers/AccountsPage'
import TestPage from 'components/TestPage'

const accounts = [
    {
        path: BASE_PATH,
        component: TestPage,
    },
    {
        path: ACCOUNTS_PATH,
        component: AccountsPageContainer,
    },
]

export default accounts
