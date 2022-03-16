import React, { Suspense } from 'react';
import { render } from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";

import './index.css';

import profile from "./assets/profile.jpg";
import { BrowserRouter, Route, Routes, } from "react-router-dom";

import App from './App';

function ProfileImage() {
    return <img src={profile} alt="profile img"/>
}

render(
    <BrowserRouter>
        <React.StrictMode>
            <Suspense fallback="loading...">
                <Routes>
                    <Route path="/" element={ <App/> }/>
                    <Route path="/profile.jpg" element={ <ProfileImage/> }/>
                </Routes>
            </Suspense>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById( 'root' )
);


