import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Provider} from "react-redux"
import store from "./store/resources"
import './index.scss'
import 'fomantic-ui-css/semantic.css'
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)