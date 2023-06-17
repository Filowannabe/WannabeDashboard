import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Contacts from "./scenes/contacts";
import Dashboard from "./scenes/dashboard";
import SideBar from "./scenes/global/SideBar";
import TopBar from "./scenes/global/TopBar";
import Invoices from "./scenes/invoices";
import Team from "./scenes/team";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const { theme, colorMode } = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
