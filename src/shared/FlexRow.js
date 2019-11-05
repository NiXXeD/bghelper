import {makeStyles} from '@material-ui/styles'
import React from 'react'

function FlexRow({children}) {
    const classes = useStyles()
    return (
        <div className={classes.row}>{children}</div>
    )
}

const useStyles = makeStyles({
    row: {
        display: 'flex',
        flexDirection: 'row'
    }
})

export default FlexRow
