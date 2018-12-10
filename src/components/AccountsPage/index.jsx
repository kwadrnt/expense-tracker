import React from 'react'

import Container from 'common/Container'

const AccountsPage = ({ accounts }) => (
    <Container>
        {accounts && accounts.map((account) => (
            <div key={account.id}>{account.name}</div>
        ))}
    </Container>
)

export default AccountsPage
