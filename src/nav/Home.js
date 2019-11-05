import {CardHeader} from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import Card from '../shared/Card'

function Home() {
    return (
        <Card>
            <CardHeader title='Welcome!'/>
            <CardContent>
                <Typography>
                    Welcome to BGHelper!

                    Select a game in the menu to the left or search for one above.
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Home
