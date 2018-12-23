import React from 'react'
import cx from 'classnames'

import styles from './container.module.scss'

const Container = ({ className, children }) => (
    <div className={cx(className, styles.container)}>
        {children}
    </div>
)

export default Container
