import React from 'react'
import MuiCard from '@material-ui/core/Card'

function Card({children, width = 300, maxWidth = width, ...props}) {
    const style = {width, maxWidth, margin: 16, transition: 'width 1s'}
    return <MuiCard style={style} {...props}>{children}</MuiCard>
}

export default Card
