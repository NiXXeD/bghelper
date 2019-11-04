import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
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
    const [monorails, setMonorails] = useState(false)
    const [grizzlies, setGrizzlies] = useState(false)
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
                            className={classes.select}
                            value={players}
                            onChange={event => setPlayers(event.target.value)}
                            input={<Input id="players"/>}
                        >
                            {Object.keys(playerData).map(count =>
                                <MenuItem key={count} value={count}>{`${count} players`}</MenuItem>
                            )}
                        </Select>
                    </FormControl>

                    <div className={classes.row}>
                        {/* Monorails */}
                        <FormControlLabel
                            className={classes.switch}
                            label="Monorails"
                            control={
                                <Switch
                                    checked={monorails}
                                    onChange={event => setMonorails(event.target.checked)}
                                />
                            }
                        />

                        {/* Grizzlies */}
                        <FormControlLabel
                            className={classes.switch}
                            label="Grizzlies"
                            control={
                                <Switch
                                    checked={grizzlies}
                                    onChange={event => setGrizzlies(event.target.checked)}
                                />
                            }
                        />
                    </div>

                    <div className={classes.row}>
                        <div className={classes.col}>
                            <LabelValueDisplay label='Toilets' value={grizzlies ? data.grizzlyToilets : data.toilets}/>
                            <LabelValueDisplay label='Playgrounds' value={data.playgrounds}/>
                            <LabelValueDisplay
                                label='Animal Houses'
                                value={grizzlies ? data.grizzlyAnimalHouses : data.animalHouses}
                            />
                            {monorails && <LabelValueDisplay label='Monorail Towers' value={data.monorailTowers}/>}
                        </div>

                        <div className={classes.col}>
                            <LabelValueDisplay label='Food Streets' value={data.foodStreets}/>
                            <LabelValueDisplay label='Rivers' value={data.rivers}/>
                            <LabelValueDisplay
                                label='Bear Statues'
                                value={grizzlies ? data.grizzlyBearStatues : data.bearStatues}
                            />
                            {monorails && <LabelValueDisplay label='Monorail Cars' value={data.monorailCars}/>}
                        </div>
                    </div>
                </FormGroup>
            </CardContent>
        </Card>
    )
}

const useStyles = makeStyles({
    card: {
        margin: 16,
        maxWidth: 350
    },
    subheading: {
        marginTop: 16
    },
    select: {
        marginBottom: 8
    },
    switch: {
        marginRight: 32
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    col: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: 24
    }
})

export default Setup
