import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './container.module.scss'

const Container = ({ className, children }) => (
    <div className={cx(className, styles.container)}>
        {children}
    </div>
)

Container.propTypes = {
    className: PropTypes.string,
}

export default Container
