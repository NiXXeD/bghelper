import React, {useMemo, useState} from 'react'
import Button from '@material-ui/core/Button'
import {CardActions, CardHeader} from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent'
import FormGroup from '@material-ui/core/FormGroup'
import Card from '../../../shared/Card'
import Dropdown from '../../../shared/Dropdown'
import FlexCol from '../../../shared/FlexCol'
import FlexRow from '../../../shared/FlexRow'
import FlexSpacer from '../../../shared/FlexSpacer'
import LabelValueDisplay from '../../../shared/LabelValueDisplay'
import gearlocData from './gearlocData'
import tyrantData from './tyrantData'
import sample from '../../../shared/sample'

function ScenarioRandomizer() {
    const [increment, setIncrement] = useState(0)
    const [gearlocCount, setGearlocCount] = useState(2)

    const {gearlocs, tyrant} = useMemo(() => {
        const gearlocPool = [...gearlocData]
        const gearlocs = [...Array(gearlocCount)].map(() => sample(gearlocPool))
        const tyrantPool = [...tyrantData]
        const tyrant = sample(tyrantPool)
        return {increment, gearlocs, tyrant}
    }, [increment, gearlocCount])

    return (
        <Card width={275}>
            <CardHeader title="Scenario Randomizer"/>
            <CardContent>
                <FormGroup>
                    <Dropdown label='Gearlocs' value={gearlocCount} onChange={setGearlocCount} items={gearlocMenuItems}/>
                </FormGroup>

                <FlexRow>
                    <FlexCol width={120}>
                        <LabelValueDisplay label='Gearlocs' value={
                            gearlocs.map(gearloc => <FlexRow>{gearloc}</FlexRow>)
                        }/>
                    </FlexCol>

                    <FlexCol width={120}>
                        <LabelValueDisplay label='Tyrant' value={tyrant}/>
                    </FlexCol>
                </FlexRow>
            </CardContent>
            <CardActions>
                <FlexSpacer/>
                <Button color="primary" onClick={() => setIncrement(increment + 1)}>
                    Randomize
                </Button>
            </CardActions>
        </Card>
    )
}

const gearlocMenuItems = [1, 2, 3, 4].map(value => ({label: `${value} gearloc(s)`, value}))

export default ScenarioRandomizer
