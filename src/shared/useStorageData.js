import {useCallback, useState} from 'react'

function useStorageData({localStorageKey, onDataValidate}) {
    const [data = {}, setData] = useState(() => {
        try {
            const dataString = localStorage.getItem(localStorageKey) || '{}'
            const parsedData = JSON.parse(dataString) || {}
            if (onDataValidate && !onDataValidate(parsedData)) {
                localStorage.removeItem(localStorageKey)
                return {}
            }
            return parsedData
        } catch (ex) {
            console.warn('Error loading local storage data: ', ex)
            localStorage.removeItem(localStorageKey)
        }
        return {}
    })

    const onDataUpdate = useCallback((prop, value) => {
        const newData = {...data, [prop]: value}
        setData(newData)
        const newValue = JSON.stringify(newData)
        localStorage.setItem(localStorageKey, newValue)
    }, [data, localStorageKey])

    return {data, onDataUpdate}
}

export default useStorageData
