import React from 'react'
import {createMuiTheme} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/styles'
import {HashRouter, Route} from 'react-router-dom'
import games from './games/games'
import Home from './nav/Home'
import Nav from './nav/Nav'
import TitleContextProvider from './shared/TitleContextProvider'

const theme = createMuiTheme({
    palette: {
        type: 'dark'
    }
})

function App() {
    return (
        <HashRouter>
            <ThemeProvider theme={theme}>
                <TitleContextProvider>
                    <div>
                        <Nav/>

                        <Route exact path="/"><Home/></Route>

                        {/* Game routes*/}
                        {games.map(({path, component: Component}) =>
                            <Route exact path={path} key={path}>
                                <Component/>
                            </Route>
                        )}
                    </div>
                </TitleContextProvider>
            </ThemeProvider>
        </HashRouter>
    )
}

export default App
