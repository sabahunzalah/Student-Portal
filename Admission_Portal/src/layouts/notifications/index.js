/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Notifications() {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  const alertContent = (title, description) => (
    <MDTypography variant="body2" color="white">
      {description}{" "}
      <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        Read more
      </MDTypography>
      .
    </MDTypography>
  );

  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="Project Marks Updated"
      content="Congratulations! Your project marks have been updated."
      dateTime="Just now"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  const renderInfoSB = (
    <MDSnackbar
      icon="notifications"
      title="Class Schedule Updated"
      content="Your class schedule has been updated. Check the new timings."
      dateTime="5 mins ago"
      open={infoSB}
      onClose={closeInfoSB}
      close={closeInfoSB}
    />
  );

  const renderWarningSB = (
    <MDSnackbar
      color="warning"
      icon="star"
      title="Upcoming Test"
      content="Don't forget your upcoming test next week. Prepare well!"
      dateTime="15 mins ago"
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
      bgWhite
    />
  );

  const renderErrorSB = (
    <MDSnackbar
      color="error"
      icon="warning"
      title="Due Fees Alert"
      content="You have overdue fees. Please clear your dues to avoid penalties."
      dateTime="30 mins ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );

  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      <MDBox
        sx={{
          display: "flex",
          justifyContent: "flex start",
          gap: "10px",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          padding: 2,
        }}
      >
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={6}
            lg={12}
            style={{
              display: "flex",
              justifyContent: "flex start",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {/* <Projects /> */}
            <MDTypography
              sx={{
                height: 50,
                width: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem", // Adjust font size to fit the container
              }}
            >
              👋
            </MDTypography>
            <MDTypography>Hi student, welcome to SMIT!</MDTypography>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2}>
                <MDTypography variant="h5">Alerts</MDTypography>
              </MDBox>
              <MDBox pt={2} px={2}>
                <MDAlert color="primary" dismissible sx={{ "&:hover": { backgroundColor: "#e0e0e0" } }}>
                  {alertContent("Project Marks", "Your project marks have been updated.")}
                </MDAlert>
                <MDAlert color="secondary" dismissible sx={{ "&:hover": { backgroundColor: "#e0e0e0" } }}>
                  {alertContent("Class Schedule", "Your class schedule has been updated.")}
                </MDAlert>
                <MDAlert color="success" dismissible sx={{ "&:hover": { backgroundColor: "#e0e0e0" } }}>
                  {alertContent("Upcoming Test", "Prepare for your upcoming test next week.")}
                </MDAlert>
                <MDAlert color="error" dismissible sx={{ "&:hover": { backgroundColor: "#e0e0e0" } }}>
                  {alertContent("Due Fees", "You have overdue fees. Please clear your dues.")}
                </MDAlert>
              </MDBox>
            </Card>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2} lineHeight={0}>
                <MDTypography variant="h5">Notifications</MDTypography>
                <MDTypography variant="button" color="text" fontWeight="regular">
                  Notifications on this page use Toasts from Bootstrap. Read more details here.
                </MDTypography>
              </MDBox>
              <MDBox p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton variant="gradient" color="success" onClick={openSuccessSB} fullWidth>
                      Project Marks
                    </MDButton>
                    {renderSuccessSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton variant="gradient" color="info" onClick={openInfoSB} fullWidth>
                      Class Schedule
                    </MDButton>
                    {renderInfoSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton variant="gradient" color="warning" onClick={openWarningSB} fullWidth>
                      Upcoming Test
                    </MDButton>
                    {renderWarningSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton variant="gradient" color="error" onClick={openErrorSB} fullWidth>
                      Due Fees
                    </MDButton>
                    {renderErrorSB}
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;
