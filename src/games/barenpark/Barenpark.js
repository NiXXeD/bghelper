import React from 'react'
import Tabs from '../../shared/Tabs'

function Barenpark() {
    const tabs = [
        {label: 'Setup', content: <div/>},
        {label: 'Achievements', content: <div/>},
    ]
    return <Tabs title={'Bärenpark'} tabs={tabs}/>

}

export default Barenpark
