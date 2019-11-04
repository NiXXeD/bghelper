import React from 'react'
import Tabs from '../../shared/Tabs'
import Setup from './setup/Setup'

function Barenpark() {
    const tabs = [
        {label: 'Setup', content: <Setup/>},
        {label: 'Achievements', content: <div/>},
    ]
    return <Tabs title={'Bärenpark'} tabs={tabs}/>

}

export default Barenpark
