import React from 'react'
import { Router, Route, BrowserRouter } from 'react-router-dom'
import Files from './Files.js';

export default () => {
    return <Router history={BrowserRouter}>
        <Route path='/(:id)' component={Files} />
    </Router>
}