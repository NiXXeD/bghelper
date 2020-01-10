import React from 'react'
import {makeStyles} from '@material-ui/styles'
import FlexSpacer from '../../../shared/FlexSpacer'

function Milestone({index, milestone, onChange, value}) {
    const classes = useStyles()
    const {color, title, text, maxRound} = milestone

    const handleClick = () => {
        let nextValue
        if (!value || value === 'available') nextValue = 'mine'
        else if (value === 'mine') nextValue = 'unavailable'
        else nextValue = 'available'

        return onChange(index, nextValue)
    }

    return (
        <div
            className={classes.milestone}
            style={{backgroundColor: color}}
            onClick={handleClick}
        >
            {value === 'mine' && <div className={classes.checkmark}>✓</div>}
            {value === 'unavailable' && <div className={classes.x}>✗</div>}
            <div className={classes.container}>
                <div className={classes.title}>First {title}</div>
                <div className={classes.text}>{text}</div>
                <FlexSpacer/>
                {
                    maxRound && <div className={classes.maxRound}>Remove after <br/>round {maxRound}</div>}
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    milestone: {
        margin: 4,
        width: 155,
        height: 155,
        userSelect: 'none',
        cursor: 'pointer',
        border: '1px solid black',
        borderRadius: 10
    },
    container: {
        margin: 4,
        height: 145,
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        textAlign: 'center',
        fontWeight: 600,
        textTransform: 'uppercase',
        marginBottom: 12,
        color: '#000'
    },
    text: {
        textAlign: 'center',
        fontSize: 'small',
        color: '#000'
    },
    maxRound: {
        width: 145,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 'small',
        color: '#f00'
    },
    checkmark: {
        fontSize: 'xx-large',
        color: '#0f0',
        position: 'absolute',
        marginTop: 115,
        marginLeft: 7
    },
    x: {
        fontSize: 'xx-large',
        color: '#f00',
        position: 'absolute',
        marginTop: 115,
        marginLeft: 7
    }
})

export default Milestone
