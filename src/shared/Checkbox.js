import makeStyles from '@material-ui/core/styles/makeStyles'
import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

function Checkbox({className, label, checked, onChange}) {
    const classes = useStyles()
    const combinedClass = classes.checkbox + (className ? ' ' + className : '')
    return (
        <FormControlLabel
            label={label}
            className={combinedClass}
            control={
                <Switch
                    checked={checked}
                    onChange={({target}) => onChange(target.checked)}
                />
            }
        />
    )
}

const useStyles = makeStyles({
    checkbox: {
        display: 'block'
    }
})

export default Checkbox
