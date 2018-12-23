import PropTypes from 'prop-types'

import TransactionInAccountType from 'types/transactionInAccount'

export default PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    transactions: PropTypes.arrayOf(TransactionInAccountType),
})
