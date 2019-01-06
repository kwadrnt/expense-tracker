import React from 'react'
import PropTypes from 'prop-types'

import Modal from 'common/Modal'

const AddAccountModal = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div>asdf</div>
            <div>qwerty</div>
        </Modal>
    )
}

AddAccountModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default AddAccountModal
