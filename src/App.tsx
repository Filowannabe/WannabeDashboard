import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import TopBar from "./scenes/global/TopBar";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const { theme, colorMode } = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
