import React from 'react'
import Tabs from '../../shared/Tabs'
import Achievements from './achievements/Achievements'
import Setup from './setup/Setup'

function Barenpark() {
    const tabs = [
        {label: 'Setup', content: <Setup/>},
        {label: 'Achievements', content: <Achievements/>},
    ]
    return <Tabs title={'Bärenpark'} tabs={tabs}/>

}

export default Barenpark
