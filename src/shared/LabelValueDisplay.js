import {makeStyles} from '@material-ui/styles'
import React from 'react'
import Typography from '@material-ui/core/Typography'

function LabelValueDisplay({label, value}) {
    const classes = useStyles()
    return (
        <div className={classes.subheading}>
            <Typography variant="subtitle1" color="textSecondary">
                {label}
            </Typography>
            <Typography variant="body2">
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
