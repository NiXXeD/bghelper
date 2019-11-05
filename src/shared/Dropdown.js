import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import {makeStyles} from '@material-ui/styles'
import React from 'react'

function Dropdown({label, value, onChange, items, error, errorText}) {
    const classes = useStyles()
    return (
        <FormControl className={classes.select}>
            <InputLabel htmlFor={label}>{label}</InputLabel>
            <Select
                value={value}
                onChange={({target}) => onChange(target.value)}
                input={<Input id={label}/>}
                MenuProps={{
                    MenuListProps: {
                        style: {
                            maxHeight: 256
                        }
                    }
                }}
            >
                {items.map(({label, value}, key) => <MenuItem key={key} value={value}>{label}</MenuItem>)}
            </Select>
            {error && <FormHelperText error>{errorText}</FormHelperText>}
        </FormControl>
    )
}

const useStyles = makeStyles({
    select: {
        marginBottom: 16
    }
})

export default Dropdown
