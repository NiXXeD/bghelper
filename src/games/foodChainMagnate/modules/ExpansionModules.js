import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import makeStyles from '@material-ui/core/styles/makeStyles'
import React from 'react'
import Card from '../../../shared/Card'
import FlexSpacer from '../../../shared/FlexSpacer'
import LabelValueDisplay from '../../../shared/LabelValueDisplay'
import ExpansionModule from './ExpansionModule'
import Grid from '@material-ui/core/Grid'
import expansionModuleData from './expansionModuleData'

function ExpansionModules({modules, onModulesChanged}) {
    const classes = useStyles()
    const handleClear = () => onModulesChanged({})
    const handleInvert = () => {
        const value = expansionModuleData.reduce((acc, {prop}) => {
            acc[prop] = !modules[prop]
            return acc
        }, {})
        onModulesChanged(value)
    }
    const handleSelectAll = () => {
        const value = expansionModuleData.reduce((acc, {prop}) => {
            acc[prop] = true
            return acc
        }, {})
        onModulesChanged(value)
    }

    return (
        <Card width='auto' maxWidth={500}>
            <CardHeader title='Expansion Modules'/>
            <LabelValueDisplay
                className={classes.description}
                dense
                label='Description'
                value='Select which modules are in play. This will allow the other helpers to show the correct
                information. Changing these may reset data in other helpers.'
            />
            <CardContent>
                <Grid container>
                    {expansionModuleData.map(({label, prop}) =>
                        <ExpansionModule
                            key={label}
                            modules={modules}
                            setModules={onModulesChanged}
                            label={label}
                            prop={prop}
                        />
                    )}
                </Grid>
            </CardContent>
            <CardActions>
                <Button color='secondary' onClick={handleClear}>Clear</Button>
                <FlexSpacer/>
                <Button onClick={handleInvert}>Invert</Button>
                <Button onClick={handleSelectAll}>Select All</Button>
            </CardActions>
        </Card>
    )
}

const useStyles = makeStyles({
    description: {
        margin: '0 16px 0 16px'
    },
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    leftColumn: {
        minWidth: 225,
        marginRight: 12
    },
    rightColumn: {
        minWidth: 225
    }
})

export default ExpansionModules
