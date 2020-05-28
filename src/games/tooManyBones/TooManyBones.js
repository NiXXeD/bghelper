import React from 'react'
import Tabs from '../../shared/Tabs'
import BuildATyrant from './buildATyrant/BuildATyrant'

function TooManyBones() {
    const tabs = [
        {label: 'Build A Tyrant', content: <BuildATyrant/>}
    ]
    return <Tabs title='Too Many Bones' tabs={tabs}/>

}

export default TooManyBones
