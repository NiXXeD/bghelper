import {makeStyles} from '@material-ui/styles'
import React from 'react'
import Typography from '@material-ui/core/Typography'

function LabelValueDisplay({className, label, value, dense}) {
    const classes = useStyles()
    const containerClass = (className || '') + (dense ? '' : ' ' + classes.subheading)
    return (
        <div className={containerClass}>
            <Typography variant="subtitle1" color="textSecondary" component="div">
                {label}
            </Typography>
            <Typography variant="body2" component="div">
                {value}
            </Typography>
        </div>
    )
}

const useStyles = makeStyles({
    subheading: {
        marginTop: 16
    }
})

export default LabelValueDisplay
