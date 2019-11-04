import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

function ExpandIcon({open}) {
    const classes = useStyles()
    return <ExpandLessIcon className={open ? classes.open : classes.closed}/>
}

const useStyles = makeStyles(theme => ({
    closed: {
        transition: 'transform .2s',
        transform: 'rotate(180deg)',
        color: `${theme.palette.text.primary} !important`
    },
    open: {
        transition: 'transform .2s',
        transform: 'rotate(0deg)',
        color: `${theme.palette.text.primary} !important`
    }
}))

export default ExpandIcon
