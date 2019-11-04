import React, {useState} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tooltip from '@material-ui/core/Tooltip'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import ExpandIcon from './ExpandIcon'
import githubSvg from './github.svg'
import {makeStyles} from '@material-ui/styles'
import {Link} from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ExtensionIcon from '@material-ui/icons/Extension'
import BuildIcon from '@material-ui/icons/Build'
import Collapse from '@material-ui/core/Collapse'
import SiteSearch from './SiteSearch'

function Nav() {
    const classes = useStyles()
    const [expandedMenu, setExpandedMenu] = useState(null)
    const [drawerOpen, setDrawerOpen] = useState(false)

    const openDrawer = () => setDrawerOpen(true)
    const closeDrawer = () => setDrawerOpen(false)

    const handleExpand = value => () => setExpandedMenu(expandedMenu === value ? null : value)

    return (
        <React.Fragment>
            <AppBar position='static'>
                <Toolbar className={classes.toolbar}>
                    {/* Menu button */}
                    <IconButton className={classes.menuButton} onClick={openDrawer}>
                        <MenuIcon/>
                    </IconButton>

                    {/* Title bar */}
                    <Typography variant='h6' className={classes.title}>
                        Board Game Helper
                    </Typography>

                    {/* Search */}
                    <SiteSearch/>

                    {/* Top right icons */}
                    <Tooltip title='Contribute on GitHub!'>
                        <IconButton target='_blank' href='https://github.com/NiXXeD/bghelper'>
                            <img alt='github link' width='24' height='24' src={githubSvg}/>
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>

            {/* Left Drawer*/}
            <SwipeableDrawer open={drawerOpen} onOpen={openDrawer} onClose={closeDrawer} className={classes.drawer}>
                <List>
                    {/* Games list */}
                    <ListItem button onClick={handleExpand('games')}>
                        <ListItemIcon><ExtensionIcon/></ListItemIcon>
                        <ListItemText primary='Games'/>
                        <ExpandIcon open={expandedMenu === 'games'}/>
                    </ListItem>
                    <Collapse in={expandedMenu === 'games'} timeout='auto'>
                        <Link className={classes.link} to='/barenpark'>
                            <ListItem className={classes.nested} button onClick={closeDrawer}>
                                <ListItemText primary='Bärenpark'/>
                            </ListItem>
                        </Link>
                        <Link className={classes.link} to='/foodChainMagnate'>
                            <ListItem className={classes.nested} button onClick={closeDrawer}>
                                <ListItemText primary='Food Chain Magnate'/>
                            </ListItem>
                        </Link>
                    </Collapse>

                    {/* Utilities */}
                    <ListItem button onClick={handleExpand('utils')}>
                        <ListItemIcon><BuildIcon/></ListItemIcon>
                        <ListItemText primary='Utilities'/>
                        <ExpandIcon open={expandedMenu === 'utils'}/>
                    </ListItem>
                    <Collapse in={expandedMenu === 'utils'} timeout='auto'>
                        <ListItem className={classes.nested} button onClick={closeDrawer}>
                            <ListItemText primary='TBD'/>
                        </ListItem>
                    </Collapse>
                </List>
            </SwipeableDrawer>
        </React.Fragment>
    )
}

const useStyles = makeStyles(theme => ({
    drawer: {
        width: 300
    },
    toolbar: {
        paddingLeft: 8,
        paddingRight: 8
    },
    title: {
        paddingLeft: 12,
        flex: 1
    },
    nested: {
        paddingLeft: theme.spacing(4)
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
}))

export default Nav
