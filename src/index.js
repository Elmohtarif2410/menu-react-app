// import class and liprary
import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// import App commponent
import App from './App';

// import links 
import "../node_modules/font-awesome/css/font-awesome.min.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./css/style.css"

const rootElement = document.getElementById("root");

ReactDOM.render(

    <BrowserRouter>
        <App />
    </BrowserRouter>

, rootElement)