import React from 'react'
import Dropdown from '../../../shared/Dropdown'

function UnitPrices(props) {
    const items = [...new Array(36)]
        .map((v, i) => i - 5)
        .map(value => ({label: `$${value}`, value}))

    return (
        <Dropdown
            label='Unit Price'
            items={items}
            helperText='Final sale price of goods sold.'
            {...props}
        />
    )
}

export default UnitPrices
