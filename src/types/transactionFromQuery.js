import PropTypes from 'prop-types'

import AccountInTransactionType from 'types/accountInTransaction'
import CategoryType from 'types/category'
import TransactionTypeType from 'types/transactionType'

export default PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date),
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    category: CategoryType,
    type: TransactionTypeType.isRequired,
    accountFrom: AccountInTransactionType.isRequired,
    accountTo: AccountInTransactionType,
})
