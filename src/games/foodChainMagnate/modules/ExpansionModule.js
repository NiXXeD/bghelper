import makeStyles from '@material-ui/core/styles/makeStyles'
import React from 'react'
import Checkbox from '../../../shared/Checkbox'

function ExpansionModule({label, prop, modules, setModules}) {
    const classes = useStyles()
    const handleChange = value => setModules({...modules, [prop]: value})
    return (
        <Checkbox
            className={classes.checkbox}
            label={label}
            checked={modules[prop] || false}
            onChange={handleChange}
        />
    )
}

const useStyles = makeStyles({
    checkbox: {
        minWidth: 225
    }
})

export default ExpansionModule
