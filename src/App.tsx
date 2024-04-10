import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import rtlPlugin from "stylis-plugin-rtl";
import "./App.scss";
import AuthLayout from "./layout/AuthLayout";
import DashboardLayout from "./layout/DashboardLayout";
import BaseLayout from "./pages/BaseLayout";
import LoginPage from "./pages/Login";
import NotFound from "./pages/NotFound";
import { allDataLayout } from "./utils/layoutTable";
import { theme } from "./utils/theme";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});
const App = () => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Suspense>
          <Routes>
            <Route path="/login" element={<AuthLayout />}>
              <Route index element={<LoginPage />} />
            </Route>
            <Route path="/" element={<DashboardLayout />}>
              {Object.keys(allDataLayout).map((page,index) => 
                <Route path={allDataLayout[page].action} key={index} element={<BaseLayout  {...allDataLayout[page]} />} />
              
              )}
              {/* <Route path="/role" element={<Role />} />
              <Route path="/equipment" element={<Equipment />} /> */}
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;