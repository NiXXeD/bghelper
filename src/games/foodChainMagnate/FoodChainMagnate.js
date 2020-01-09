import React from 'react'
import Tabs from '../../shared/Tabs'
import BulkHouseSales from './calc/BulkHouseSales'
import SingleHouseSales from './calc/SingleHouseSales'
import Milestones from './milestones/Milestones'
import Setup from './setup/Setup'

function FoodChainMagnate() {
    const tabs = [
        {label: 'Milestones', content: <Milestones/>},
        {label: 'Single House Sales', content: <SingleHouseSales/>},
        {label: 'Bulk House Sales', content: <BulkHouseSales/>},
        {label: 'Setup', content: <Setup/>}
    ]
    return <Tabs title={'Food Chain Magnate'} tabs={tabs}/>
}

export default FoodChainMagnate
