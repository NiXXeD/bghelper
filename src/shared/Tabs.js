import React, {useContext, useEffect, useState} from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import AppBar from '@material-ui/core/AppBar'
import MuiTabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import TitleContext from './TitleContext'

function Tabs({tabs, title}) {
    const classes = useStyles()
    const [tabValue, setTabValue] = useState(0)
    const handleChange = (event, value) => setTabValue(value)

    const {setTitle, clearTitle} = useContext(TitleContext)
    useEffect(() => {
        setTitle(title)
        return () => clearTitle()
    })

    return (
        <React.Fragment>
            {/* Tabs */}
            <AppBar position='static' color='default' className={classes.appBar}>
                <MuiTabs
                    value={tabValue}
                    onChange={handleChange}
                    variant='scrollable'
                    scrollButtons='auto'
                >
                    {tabs.map(({label}, index) => <Tab key={index} label={label}/>)}
                </MuiTabs>
            </AppBar>

            {/* Content area */}
            {tabs.map(({content}, index) =>
                tabValue === index ? <React.Fragment key={index}>{content}</React.Fragment> : null
            )}
        </React.Fragment>
    )
}

const useStyles = makeStyles({
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        maxHeight: 48
    },
    spacer: {
        flex: 1
    },
    toolbar: {
        minHeight: 48
    },
    title: {
        wordWrap: 'none'
    }
})

export default Tabs
