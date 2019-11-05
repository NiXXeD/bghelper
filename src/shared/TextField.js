import {makeStyles} from '@material-ui/styles'
import React from 'react'
import MuiTextField from '@material-ui/core/TextField'

function TextField({label, value, onChange, type}) {
    const classes = useStyles()
    return (
        <MuiTextField
            className={classes.textField}
            label={label}
            value={value}
            type={type}
            onChange={({target}) => onChange(target.value)}
        />
    )
}

const useStyles = makeStyles({
    textField: {
        marginBottom: 16
    }
})

export default TextField
