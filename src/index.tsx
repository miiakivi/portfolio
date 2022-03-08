import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import './index.css';
import WrappedApp from './App';
import './i18n';


ReactDOM.render(
    <React.StrictMode>
        <WrappedApp/>
    </React.StrictMode>,
    document.getElementById( 'root' )
);


