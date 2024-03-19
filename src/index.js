import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from 'react-toastify';

import Routes from "./routes/routes";
import { UserProvider } from './hooks/UserContext'
import GlobalStyles from "./styles/globalStyles";

ReactDOM.render(
    <>
        <UserProvider>
            <Routes />
        </UserProvider>
        <ToastContainer autoClose={2000} theme="colored" />
        <GlobalStyles />
    </>,

    document.getElementById("root")

);

