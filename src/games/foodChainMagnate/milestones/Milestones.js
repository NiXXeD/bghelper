import {makeStyles} from '@material-ui/styles'
import React, {useCallback, useEffect, useMemo, useState} from 'react'
import Card from '../../../shared/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import milestoneData from './milestoneData'
import Milestone from './Milestone'

function Milestones({modules, data, onDataChanged}) {
    const classes = useStyles()
    const [milestoneState, setMilestoneState] = useState(data.milestones || [])

    const milestones = useMemo(() => {
        return [
            ...(!modules.hardChoices && !modules.newMilestones ? milestoneData.base : []),
            ...(modules.hardChoices && !modules.newMilestones ? milestoneData.hardChoices : []),
            ...(milestoneModules
                    .map(module => modules[module] ? milestoneData[module] : null)
                    .filter(x => x)
                    .reduce((acc, val) => ([...acc, ...val]), [])
            ),
        ].sort((a, b) => a.color.localeCompare(b.color))
    }, [modules])

    const updateMilestoneType = useCallback(() => {
        const milestoneTypeData = milestoneModules.reduce((acc, val) => {
            acc[val] = modules[val]
            return acc
        }, {})
        onDataChanged('milestoneType', milestoneTypeData)
    }, [modules, onDataChanged])

    const milestoneChanged = (index, value) => {
        const newMilestoneState = [...milestoneState]
        newMilestoneState[index] = value
        setMilestoneState(newMilestoneState)
        onDataChanged('milestones', newMilestoneState)
        updateMilestoneType()
    }

    const handleReset = useCallback(() => {
        setMilestoneState([])
        onDataChanged('milestones', [])
        updateMilestoneType()
    }, [onDataChanged, updateMilestoneType])

    useEffect(() => {
        const {milestoneType = {}} = data
        const modulesChanged = milestoneModules.some(module => milestoneType[module] !== modules[module])
        if (modulesChanged) handleReset()
    }, [data, modules, handleReset])

    return (
        <Card width='auto' maxWidth={845}>
            <CardHeader title='Milestone Tracker'/>
            <CardContent className={classes.content}>
                <Grid container>
                    {milestones.map((value, index) =>
                        <Milestone
                            key={index}
                            index={index}
                            milestone={value}
                            value={milestoneState[index]}
                            onChange={milestoneChanged}
                        />
                    )}
                </Grid>
            </CardContent>
            <CardActions>
                <Button color='secondary' onClick={handleReset}>Reset</Button>
            </CardActions>
        </Card>
    )
}

const milestoneModules = [
    'newMilestones',
    'coffee',
    'lobbyists',
    'ruralMarketers',
    'ketchup'
]

const useStyles = makeStyles({
    content: {
        padding: 8
    }
})

export default Milestones
