import React from 'react'
import PropTypes from 'prop-types'

import Modal from 'common/Modal'

const AddAccountModal = ({ isOpen, onClose, onSubmit }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={onSubmit}>
                <input type={'text'} name={'name'} />
                <button type={'submit'}>click me</button>
            </form>
        </Modal>
    )
}

AddAccountModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default AddAccountModal
