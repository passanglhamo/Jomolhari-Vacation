import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as React from "react";
import WebsitesMainPage from "./websites/mainPage/websites";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <Routes>
            <Route exact path="/" element={<WebsitesMainPage />} />
            {/* <Route
              path="/authenticatedViewWrapper/*"
              element={<AuthenticatedViewWrapper />}
            /> */}
            <Route path="/websites" element={<WebsitesMainPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
