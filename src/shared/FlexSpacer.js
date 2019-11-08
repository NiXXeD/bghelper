import React from 'react'

function FlexSpacer({size}) {
    const style = size ? {height: size, width: size} : {flex: 1}
    return (
        <div style={style}/>
    )
}

export default FlexSpacer
