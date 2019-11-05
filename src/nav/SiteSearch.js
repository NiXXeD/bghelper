import React, {useCallback, useEffect, useRef, useState} from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import Tooltip from '@material-ui/core/Tooltip'
import Dialog from '@material-ui/core/Dialog'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import {useHistory} from 'react-router-dom'

function SiteSearch() {
    const classes = useStyles()
    const history = useHistory()
    const [dialogOpen, setDialogOpen] = useState(false)
    const [value, setValue] = useState(null)
    const openDialog = () => setDialogOpen(true)
    const closeDialog = () => setDialogOpen(false)
    const autocomplete = useRef(null)

    const handleKeyUp = useCallback(event => {
        if (event.key === '.' && !excludedTags.includes(event.target.tagName)) {
            openDialog()
        }
    }, [])

    useEffect(() => {
        if (dialogOpen && autocomplete && autocomplete.current) {
            setTimeout(() => autocomplete.current.focus(), 125)
        }
    }, [dialogOpen, autocomplete])

    useEffect(() => {
        document.addEventListener('keyup', handleKeyUp)
        return () => document.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp])

    const handleChange = (event, value) => {
        if (value) {
            history.push(value.path)
            setValue(null)
            closeDialog()
        }
    }

    return (
        <React.Fragment>
            <Tooltip title='Site Search'>
                <IconButton onClick={openDialog}>
                    <SearchIcon/>
                </IconButton>
            </Tooltip>

            <Dialog
                keepMounted
                open={dialogOpen}
                onClose={closeDialog}
                classes={{
                    paper: classes.dialogPaper,
                    root: classes.dialogRoot
                }}
            >
                <Autocomplete
                    className={classes.autocomplete}
                    autoComplete
                    autoHightlight
                    clearOnEscape
                    options={games}
                    value={value}
                    onChange={handleChange}
                    onClose={closeDialog}
                    getOptionLabel={option => option.label}
                    renderInput={params => (
                        <TextField
                            {...params}
                            label='Site Search'
                            variant='outlined'
                            fullWidth
                            inputRef={autocomplete}
                        />
                    )}
                    classes={{
                        popup: classes.popup
                    }}
                />
            </Dialog>
        </React.Fragment>
    )
}

const games = [
    {label: 'Home', path: '/'},
    {label: 'Bärenpark', path: '/barenpark'},
    {label: 'Food Chain Magnate', path: '/foodChainMagnate'}
]

const excludedTags = [
    'INPUT',
    'TEXTAREA',
    'SELECT'
]

const useStyles = makeStyles({
    autocomplete: {
        width: 300
    },
    dialogPaper: {
        overflowY: 'visible'
    },
    dialogRoot: {
        top: '48px !important',
        bottom: 'unset !important'
    },
    popup: {
        zIndex: 1301
    }
})

export default SiteSearch
