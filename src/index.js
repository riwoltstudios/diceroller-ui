import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './index.scss'
import 'fomantic-ui-css/semantic.css'
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
)