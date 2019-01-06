import React from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root')

import './modal.module.scss'

const Modal = ({
    isOpen,
    onClose,
    contentLabel,
    children,
}) => {
    return (
        <ReactModal 
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel={contentLabel}
            style={{
                content: {
                    top: '0px',
                    bottom: '0px',
                    right: '0px',
                    left: '0px',
                    padding: '0px'
                },
            }}
            shouldFocusAfterRender={true}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            shouldReturnFocusAfterClose={true}>
            {children}
        </ReactModal>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    contentLabel: PropTypes.string,
    children: PropTypes.node,
}

export default Modal
