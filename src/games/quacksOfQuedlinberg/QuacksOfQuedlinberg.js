import React from 'react'
import Tabs from '../../shared/Tabs'

function QuacksOfQuedlinberg() {
    const tabs = [
        {label: 'Setup', content: <div/>}
    ]
    return <Tabs title={'Quacks of Quedlinberg'} tabs={tabs}/>

}

export default QuacksOfQuedlinberg
