import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'

import AddAccountModal from 'components/common/AddAccountModal'

import { withCreateAccount } from 'queries/createAccount'

import { serializeData } from 'utils/form'

const AddAccountModalContainer = compose(
    withCreateAccount,
    withHandlers({
        onSubmit: ({ createAccount, onClose }) => (event) => {
            event.preventDefault()

            const data = serializeData(event)
            createAccount(data)
                .then(onClose)
        }
    })
)(AddAccountModal)

export default AddAccountModalContainer
