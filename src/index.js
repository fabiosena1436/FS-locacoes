import React from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from 'react-toastify';

import Routes from "./routes/routes";
import GlobalStyles from "./styles/globalStyles";
import AppProvider from "./hooks";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <AppProvider>
        <Routes />
      </AppProvider>
      <ToastContainer autoClose={2000} theme="colored" />
      <GlobalStyles />
    </>
  </React.StrictMode>
);
