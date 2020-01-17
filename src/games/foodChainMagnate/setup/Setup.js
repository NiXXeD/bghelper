import {CardActions, Tooltip} from '@material-ui/core'
import React, {useMemo, useState} from 'react'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import FormGroup from '@material-ui/core/FormGroup'
import IconButton from '@material-ui/core/IconButton'
import Collapse from '@material-ui/core/Collapse'
import ExpandIcon from '../../../nav/ExpandIcon'
import Card from '../../../shared/Card'
import Dropdown from '../../../shared/Dropdown'
import LabelValueDisplay from '../../../shared/LabelValueDisplay'
import {makeStyles} from '@material-ui/styles'
import setupData from './setupData'
import expansionModuleData from '../modules/expansionModuleData'

function Setup({modules}) {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [players, setPlayers] = useState(2)
    const {mapSize, employees, billboards, reserve} = setupData.byPlayer[players]

    const moduleSetup = useMemo(() => {
        return expansionModuleData
            .filter(({prop}) => modules[prop])
            .map(({label, prop}) => ({
                label,
                value: setupData.byModule[prop]
            }))
    }, [modules])

    const handleExpand = () => setOpen(!open)

    return (
        <Card width='auto' maxWidth={400}>
            <CardHeader title='Setup Reference'/>
            <CardContent>
                <FormGroup>
                    <Dropdown
                        label='Players'
                        value={players}
                        onChange={setPlayers}
                        items={playersMenuItems}
                    />
                </FormGroup>

                <Grid container>
                    <LabelValueDisplay className={classes.playerItem} label='Map Size' value={mapSize}/>
                    <LabelValueDisplay className={classes.playerItem} label='1x Employees' value={employees}/>
                    <LabelValueDisplay className={classes.playerItem} label='Billboards Removed' value={billboards}/>
                    <LabelValueDisplay className={classes.playerItem} label='Reserve' value={reserve}/>
                </Grid>
            </CardContent>

            {
                moduleSetup.length > 0 &&
                <CardActions>
                    <Tooltip title='Expand for expansion setup information.' enterDelay={350}>
                        <IconButton className={classes.expandButton} onClick={handleExpand}>
                            <ExpandIcon open={open}/>
                        </IconButton>
                    </Tooltip>
                </CardActions>
            }

            <Collapse in={open} timeout="auto" unmountOnExit>
                <CardContent>
                    {moduleSetup.map(({label, value}) =>
                        <LabelValueDisplay
                            key={label}
                            className={classes.moduleItem}
                            label={label}
                            value={value}
                        />
                    )}
                </CardContent>
            </Collapse>
        </Card>
    )
}

const playersMenuItems = Object.keys(setupData.byPlayer)
    .map(value => ({label: `${value} players`, value}))

const useStyles = makeStyles({
    expandButton: {
        marginLeft: 'auto'
    },
    playerItem: {
        width: 175
    }
})

export default Setup
