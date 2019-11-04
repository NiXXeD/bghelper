import React, {useCallback, useMemo, useState} from 'react'
import TitleContext from './TitleContext'

function TitleContextProvider({children}) {
    const [title, setTitle] = useState(defaultTitle)
    const clearTitle = useCallback(() => setTitle(defaultTitle), [])
    const value = useMemo(() => ({title, setTitle, clearTitle}), [title, clearTitle])

    return (
        <TitleContext.Provider value={value}>
            {children}
        </TitleContext.Provider>
    )
}

const defaultTitle = 'Board Game Helper'

export default TitleContextProvider
