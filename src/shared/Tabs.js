import React, {useState} from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import AppBar from '@material-ui/core/AppBar'
import MuiTabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

function Tabs({tabs}) {
    const classes = useStyles()
    const [tabValue, setTabValue] = useState(0)
    const handleChange = (event, value) => setTabValue(value)

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
            {tabs.map(({content}, index) => tabValue === index ? content : null)}
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
