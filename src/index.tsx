import React from 'react';
import ReactDOM from 'react-dom/client';
import 'rsuite/dist/rsuite.min.css';
import App from "./App";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Thanks from "./Thanks";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path={'/'} element={<App />} />
            <Route path={'/cancel'} element={<App />} />
            <Route path={'/thanks'} element={<Thanks />} />
        </Routes>
    </BrowserRouter>
);
