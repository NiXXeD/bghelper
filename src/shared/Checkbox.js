import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

function Checkbox({label, checked, onChange}) {
    return (
        <FormControlLabel
            label={label}
            control={
                <Switch
                    checked={checked}
                    onChange={({target}) => onChange(target.checked)}
                />
            }
        />
    )
}

export default Checkbox
