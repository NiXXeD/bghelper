import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App/>, document.getElementById('root'))

function render(Component) {
    ReactDOM.render(<Component/>, document.getElementById('root'))
}

render(App)

if (module.hot) {
    module.hot.accept('./App', () => {
        const next = require('./App').default
        render(next)
    })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
