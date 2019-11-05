import React from 'react'
import Dropdown from '../../../shared/Dropdown'

function UnitPrices(props) {
    const items = [...new Array(26)]
        .map((v, i) => i - 5)
        .map(value => ({label: `$${value}`, value}))

    return (
        <Dropdown
            label='Unit Price'
            items={items}
            {...props}
        />
    )
}

export default UnitPrices
