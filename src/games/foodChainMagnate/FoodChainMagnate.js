import React, {useCallback, useState} from 'react'
import Tabs from '../../shared/Tabs'
import useStorageData from '../../shared/useStorageData'
import BulkHouseSales from './calc/BulkHouseSales'
import SingleHouseSales from './calc/SingleHouseSales'
import Milestones from './milestones/Milestones'
import ExpansionModules from './modules/ExpansionModules'
import Setup from './setup/Setup'

function FoodChainMagnate() {
    // TODO: validate data
    const {data, onDataUpdate} = useStorageData({localStorageKey})
    const [modules, setModules] = useState(data.modules || {})

    const handleModulesChanged = useCallback(newModules => {
        setModules(newModules)
        onDataUpdate('modules', newModules)
    }, [onDataUpdate])

    const tabs = [
        {
            label: 'Milestones',
            alwaysRender: false,
            content: <Milestones
                data={data}
                onDataChanged={onDataUpdate}
                modules={modules}
            />
        },
        {label: 'Single House Sales', content: <SingleHouseSales modules={modules}/>},
        {label: 'Bulk House Sales', content: <BulkHouseSales modules={modules}/>},
        {label: 'Setup', content: <Setup modules={modules}/>},
        {
            label: 'Modules',
            content: <ExpansionModules
                data={data}
                onDataChanged={onDataUpdate}
                onDataUpdate={onDataUpdate}
                modules={modules}
                onModulesChanged={handleModulesChanged}
            />
        }
    ]
    return <Tabs title='Food Chain Magnate' tabs={tabs}/>
}

const localStorageKey = 'foodChainMagnateData'

export default FoodChainMagnate
