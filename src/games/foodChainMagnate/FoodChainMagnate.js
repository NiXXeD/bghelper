import React from 'react'
import Tabs from '../../shared/Tabs'
import BulkCalc from './calc/BulkCalc'
import Calc from './calc/Calc'
import Milestones from './milestones/Milestones'
import Setup from './setup/Setup'

function FoodChainMagnate() {
    const tabs = [
        {label: 'Simple Sales', content: <Calc/>},
        {label: 'Bulk Sales', content: <BulkCalc/>},
        {label: 'Milestones', content: <Milestones/>},
        {label: 'Setup', content: <Setup/>}
    ]
    return <Tabs tabs={tabs}/>
}

export default FoodChainMagnate
