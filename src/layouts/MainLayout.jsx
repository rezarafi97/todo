/* eslint-disable react/prop-types */
import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import { prefixer } from "stylis";
import { theme } from "./theme";
import { Outlet } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={cacheRtl}>
          <Navbar />

          <div>
            <Outlet />
          </div>
      </CacheProvider>
    </ThemeProvider>
  );
};

export default MainLayout;
