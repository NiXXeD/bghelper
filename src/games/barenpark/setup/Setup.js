import React, {useState} from 'react'
import {CardHeader} from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent'
import FormGroup from '@material-ui/core/FormGroup'
import Card from '../../../shared/Card'
import Checkbox from '../../../shared/Checkbox'
import Dropdown from '../../../shared/Dropdown'
import FlexCol from '../../../shared/FlexCol'
import FlexRow from '../../../shared/FlexRow'
import FlexSpacer from '../../../shared/FlexSpacer'
import LabelValueDisplay from '../../../shared/LabelValueDisplay'
import setupData from './setupData'

function Setup() {
    const [players, setPlayers] = useState(2)
    const [monorails, setMonorails] = useState(true)
    const [grizzlies, setGrizzlies] = useState(true)
    const data = setupData[players]

    return (
        <Card width={350}>
            <CardHeader title="Setup Reference"/>
            <CardContent>
                <FormGroup>
                    <Dropdown label='Players' value={players} onChange={setPlayers} items={playersMenuItems}/>

                    <FlexRow>
                        <Checkbox label="Monorails" checked={monorails} onChange={setMonorails}/>
                        <FlexSpacer size={16}/>
                        <Checkbox label="Grizzlies" checked={grizzlies} onChange={setGrizzlies}/>
                    </FlexRow>

                    <FlexRow>
                        <LabelValueDisplay
                            label='Starting Tile'
                            value={
                                <FlexRow>
                                    <FlexCol width={140}>
                                        <span><b>P1:</b>&nbsp;{data.startingTile[0]}</span>
                                        {players > 2 && <span><b>P3:</b>&nbsp;{data.startingTile[2]}</span>}
                                    </FlexCol>
                                    <FlexCol width={140}>
                                        <span><b>P2:</b>&nbsp;{data.startingTile[1]}</span>
                                        {players > 3 && <span><b>P4:</b>&nbsp;{data.startingTile[3]}</span>}
                                    </FlexCol>
                                </FlexRow>
                            }
                        />
                    </FlexRow>

                    <FlexRow>
                        <FlexCol width={140}>
                            <LabelValueDisplay label='Toilets' value={grizzlies ? data.grizzlyToilets : data.toilets}/>
                            <LabelValueDisplay label='Playgrounds' value={data.playgrounds}/>
                            <LabelValueDisplay
                                label='Animal Houses'
                                value={grizzlies ? data.grizzlyAnimalHouses : data.animalHouses}
                            />
                            {monorails && <LabelValueDisplay label='Monorail Towers' value={data.monorailTowers}/>}
                        </FlexCol>

                        <FlexSpacer size={24}/>

                        <FlexCol width={140}>
                            <LabelValueDisplay label='Food Streets' value={data.foodStreets}/>
                            <LabelValueDisplay label='Rivers' value={data.rivers}/>
                            <LabelValueDisplay
                                label='Bear Statues'
                                value={grizzlies ? data.grizzlyBearStatues : data.bearStatues}
                            />
                            {monorails && <LabelValueDisplay label='Monorail Cars' value={data.monorailCars}/>}
                        </FlexCol>
                    </FlexRow>
                </FormGroup>
            </CardContent>
        </Card>
    )
}

const playersMenuItems = Object.keys(setupData).map(value => ({label: `${value} players`, value}))

export default Setup
