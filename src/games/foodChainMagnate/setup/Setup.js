import React, {useState} from 'react'
import Card from '@material-ui/core/Card/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import LabelValueDisplay from '../../../shared/LabelValueDisplay'
import playerData from './playerData'
import {makeStyles} from '@material-ui/styles'

function Setup() {
    const classes = useStyles()
    const [players, setPlayers] = useState(2)
    const data = playerData[players]

    return (
        <Card className={classes.card}>
            <CardHeader title="Setup Reference"/>
            <CardContent>
                <FormGroup>
                    {/* Players */}
                    <FormControl>
                        <InputLabel htmlFor="players">Players</InputLabel>
                        <Select
                            value={players}
                            onChange={event => setPlayers(event.target.value)}
                            input={<Input id="players"/>}
                        >
                            {Object.keys(playerData).map(count =>
                                <MenuItem key={count} value={count}>{`${count} players`}</MenuItem>
                            )}
                        </Select>
                    </FormControl>

                    <LabelValueDisplay label='Map Size' value={data.mapSize}/>
                    <LabelValueDisplay label='1x Employees' value={data.employees}/>
                    <LabelValueDisplay label='Billboards Removed' value={data.billboards}/>
                    <LabelValueDisplay label='Reserve' value={data.reserve}/>
                </FormGroup>
            </CardContent>
        </Card>
    )
}

const useStyles = makeStyles({
    card: {
        margin: 16,
        maxWidth: 225
    }
})

export default Setup
