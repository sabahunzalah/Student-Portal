import { useState, useEffect, useMemo } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";
import themeDark from "assets/theme-dark";
import themeDarkRTL from "assets/theme-dark/theme-rtl";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import routes from "routes";
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";
import LandingPage from "LandingPage/LandingPage";
import AdminDashboard from "layouts/AdminDashboard"; // Adjust the path as needed
import Dashboard from "layouts/dashboard"; // Adjust the path as needed
import RegisterForm from "layouts/authentication/RegisterForm/register";
import { AdminRoutes } from "routes";

export default function DashboardMain() {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor, darkMode } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  const role = localStorage.getItem("role");

  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });
    setRtlCache(cacheRtl);
  }, []);

  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }
      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }
      return null;
    });

  let path = location.pathname;
  console.log(path, path);
  return direction === "rtl" ? (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
        <CssBaseline />
        {layout === "dashboard" && path !== "/" && (
          <>
            <Configurator />
          </>
        )}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {role === "register" && (
            <Route path="/authentication/register1" element={<RegisterForm />} />
          )}
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
    </CacheProvider>
  ) : (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {layout === "dashboard" && path !== "/" && (
        <>
          <Sidenav
            color={sidenavColor}
            brandName={role === "student-portal" ? "Student Portal" : "Admin Portal"}
            routes={role === "student-portal" ? routes : AdminRoutes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          {/* <Configurator />
          {configsButton} */}
        </>
      )}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        {role === "register" && (
          <Route path="/authentication/register1" element={<RegisterForm />} />
        )}
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
}
