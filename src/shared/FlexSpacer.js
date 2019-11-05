import React from 'react'

function FlexSpacer({width}) {
    const style = width ? {width} : {flex: 1}
    return (
        <div style={style}/>
    )
}

export default FlexSpacer
