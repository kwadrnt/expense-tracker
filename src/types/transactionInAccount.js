import PropTypes from 'prop-types'

import CategoryType from 'types/category'
import TransactionTypeType from 'types/transactionType'

export default PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date),
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    category: CategoryType,
    type: TransactionTypeType.isRequired,
})
