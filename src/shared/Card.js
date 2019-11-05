import React from 'react'
import MuiCard from '@material-ui/core/Card'

function Card({children, width = 300, maxWidth = width}) {
    const style = {width, maxWidth, margin: 16}
    return <MuiCard style={style}>{children}</MuiCard>
}

export default Card
