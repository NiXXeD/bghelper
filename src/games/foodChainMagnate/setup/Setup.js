import React, {useState} from 'react'
import Card from '@material-ui/core/Card/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import FormGroup from '@material-ui/core/FormGroup'
import Dropdown from '../../../shared/Dropdown'
import LabelValueDisplay from '../../../shared/LabelValueDisplay'
import setupData from './setupData'
import {makeStyles} from '@material-ui/styles'

function Setup() {
    const classes = useStyles()
    const [players, setPlayers] = useState(2)
    const data = setupData[players]

    return (
        <Card className={classes.card}>
            <CardHeader title="Setup Reference"/>
            <CardContent>
                <FormGroup>
                    <Dropdown
                        label='Players'
                        value={players}
                        onChange={setPlayers}
                        items={playersMenuItems}
                    />

                    <LabelValueDisplay label='Map Size' value={data.mapSize}/>
                    <LabelValueDisplay label='1x Employees' value={data.employees}/>
                    <LabelValueDisplay label='Billboards Removed' value={data.billboards}/>
                    <LabelValueDisplay label='Reserve' value={data.reserve}/>
                </FormGroup>
            </CardContent>
        </Card>
    )
}

const playersMenuItems = Object.keys(setupData).map(value => ({label: `${value} players`, value}))

const useStyles = makeStyles({
    card: {
        margin: 16,
        maxWidth: 275
    }
})

export default Setup
