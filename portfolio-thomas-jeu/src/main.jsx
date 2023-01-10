import React from 'react'
import App from './App'
import './style/index.scss'
import { createRoot } from "react-dom/client";
import {BrowserRouter} from "react-router-dom"

const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
