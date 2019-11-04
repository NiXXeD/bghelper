import React, {useState} from 'react'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import Tooltip from '@material-ui/core/Tooltip'

function SiteSearch() {
    const [searchOpen, setSearchOpen] = useState(false)
    const toggleSearch = () => setSearchOpen(!searchOpen)

    return (
        <Tooltip title='Site Search'>
            <IconButton onClick={toggleSearch}>
                <SearchIcon/>
            </IconButton>
        </Tooltip>
    )
}

export default SiteSearch
