import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import {makeStyles} from '@material-ui/styles'
import React from 'react'
import MuiTextField from '@material-ui/core/TextField'

function TextField({label, value, onChange, type, error, errorText, helperText}) {
    const classes = useStyles()
    return (
        <FormControl className={classes.textField}>
            <MuiTextField
                label={label}
                value={value}
                type={type}
                onChange={({target}) => onChange(target.value)}
            />
            {!error && helperText && <FormHelperText className={classes.helperText}>{helperText}</FormHelperText>}
            {error && <FormHelperText error className={classes.helperText}>{errorText}</FormHelperText>}
        </FormControl>
    )
}

const useStyles = makeStyles({
    textField: {
        marginBottom: 16
    },
    helperText: {
        cursor: 'default',
        userSelect: 'none'
    }
})

export default TextField
