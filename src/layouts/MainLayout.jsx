/* eslint-disable react/prop-types */
import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Grid from "@mui/material/Unstable_Grid2";

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
        <Grid container sx={{ height: "100vh" }}>
          <Navbar />

          <div>
            <Outlet />
          </div>
        </Grid>
      </CacheProvider>
    </ThemeProvider>
  );
};

export default MainLayout;
