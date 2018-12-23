import get from 'lodash/get'

import { transformToDateObject } from 'utils/time'

export default (accounts) => {
    if (!accounts) { return [] }

    return accounts.map((account) => {
        const transactions = get(account, 'transactions', [])

        account.transactions = transactions.map((transaction) => {
            transaction.date = transformToDateObject(transaction.date)

            return transaction
        })

        return account
    })
}
