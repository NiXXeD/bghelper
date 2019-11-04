import React from 'react'
import {createMuiTheme} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/styles'
import {HashRouter, Route} from 'react-router-dom'
import Barenpark from './games/barenpark/Barenpark'
import FoodChainMagnate from './games/foodChainMagnate/FoodChainMagnate'
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

                        {/* TODO: some sort of default route */}
                        <Route exact path="/">
                            <div/>
                        </Route>

                        {/* Game routes*/}
                        <Route exact path="/barenpark"><Barenpark/></Route>
                        <Route exact path="/foodChainMagnate"><FoodChainMagnate/></Route>
                    </div>
                </TitleContextProvider>
            </ThemeProvider>
        </HashRouter>
    )
}

export default App
