import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MenuLateral } from "./shared/components/menu-lateral/manuLateral";
import { LightTheme } from "./shared/themes/light";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={LightTheme}>
      <MenuLateral>
        <App />
      </MenuLateral>
    </ThemeProvider>
  </React.StrictMode>
);
