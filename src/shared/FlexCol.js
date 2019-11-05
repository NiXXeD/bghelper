import {makeStyles} from '@material-ui/styles'
import React from 'react'

function FlexCol({children, width}) {
    const classes = useStyles()
    const style = width ? {width} : null
    return (
        <div className={classes.col} style={style}>{children}</div>
    )
}

const useStyles = makeStyles({
    col: {
        display: 'flex',
        flexDirection: 'column'
    }
})

export default FlexCol
