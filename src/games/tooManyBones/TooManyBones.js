import React from 'react'
import Tabs from '../../shared/Tabs'
import BuildATyrant from './buildATyrant/BuildATyrant'
import ScenarioRandomizer from './scenarioRandomizer/ScenarioRandomizer'

function TooManyBones() {
    const tabs = [
        {label: 'Scenario Randomizer', content: <ScenarioRandomizer/>},
        {label: 'Build A Tyrant', content: <BuildATyrant/>}
    ]
    return <Tabs title='Too Many Bones' tabs={tabs}/>

}

export default TooManyBones
