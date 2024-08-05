import { useState, useEffect } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import Color from "color";

// Material Dashboard 2 React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
import marie from "assets/images/marie.jpg";
import backgroundImage from "assets/images/green-curve-frame-template-vector_53876-113965.avif";
import logo from "assets/images/smit-stud-removebg-preview.png";

function Header({ children, tabValue, handleSetTabValue }) {
  const greenColor = Color("#82bd3e");
  const blueColor = Color("#127168");
  const mixedColor = greenColor.mix(blueColor, 0.5);
  const newGradient = `linear-gradient(180deg, ${mixedColor.hex()}, #FFF)`;
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");

  useEffect(() => {
    function handleTabsOrientation() {
      if (window.innerWidth < breakpoints.values.sm) {
        setTabsOrientation("vertical");
      } else {
        setTabsOrientation("horizontal");
      }
    }

    window.addEventListener("resize", handleTabsOrientation);
    handleTabsOrientation();
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, []);

  return (
    <MDBox position="relative" mb={5}>
      <MDBox
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        minHeight="16.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "270px",
            height: "auto",
            position: "absolute",
            bottom: "70px",
          }}
        />
      </MDBox>

      <Card
        sx={{
          position: "relative",
          mt: -8,
          mx: 3,
          py: 4,
          px: 4,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid
            item
            style={{ position: "relative" }}
            sx={{
              backgroundImage: newGradient,
              backgroundSize: "100% 50%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <MDAvatar src={marie} alt="profile-image" size="xxl" shadow="sm" />
          </Grid>
          <Grid item style={{ position: "relative" }}>
            <MDBox height="100%">
              <MDTypography variant="h5" fontWeight="medium">
                Innovative Souls
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
                <Tab
                  label="App"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      home
                    </Icon>
                  }
                />
                <Tab
                  label="Message"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      email
                    </Icon>
                  }
                />
                <Tab
                  label="Settings"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      settings
                    </Icon>
                  }
                />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>

        {children}
      </Card>
    </MDBox>
  );
}

// Setting default props for the Header
Header.defaultProps = {
  children: "",
};

// Typechecking props for the Header
Header.propTypes = {
  children: PropTypes.node,
  tabValue: PropTypes.number.isRequired,
  handleSetTabValue: PropTypes.func.isRequired,
};

function StudentProfile() {
  const [tabValue, setTabValue] = useState(0);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <Header tabValue={tabValue} handleSetTabValue={handleSetTabValue}>
      <MDBox p={3}>
        {tabValue === 0 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <MDBox p={2}>
                  <MDTypography
                    variant="h4"
                    fontWeight="medium"
                    sx={{ color: "green", fontFamily: "Arial, sans-serif" }} // Green color and new font style
                  >
                    Student Details
                  </MDTypography>

                  <MDBox mt={1.5}>
                    <MDTypography
                      variant="body1" // Increase text size
                      sx={{
                        color: "#0000FF",
                        fontFamily: "Arial, sans-serif",
                        fontSize: "18px",
                      }} // Blue color, font style, and larger font size
                    >
                      Name: Innovative Souls
                    </MDTypography>
                    <MDTypography
                      variant="body1" // Increase text size
                      sx={{
                        color: "#0000FF",
                        fontFamily: "Arial, sans-serif",
                        fontSize: "18px",
                      }} // Blue color, font style, and larger font size
                    >
                      Course: Web Development
                    </MDTypography>
                    <MDTypography
                      variant="body1" // Increase text size
                      sx={{
                        color: "#0000FF",
                        fontFamily: "Arial, sans-serif",
                        fontSize: "18px",
                      }} // Blue color, font style, and larger font size
                    >
                      Roll Number: WMA-123456
                    </MDTypography>
                    <MDTypography
                      variant="body1" // Increase text size
                      sx={{
                        color: "#0000FF",
                        fontFamily: "Arial, sans-serif",
                        fontSize: "18px",
                      }} // Blue color, font style, and larger font size
                    >
                      Batch: 10-0030
                    </MDTypography>
                    <MDTypography
                      variant="body1" // Increase text size
                      sx={{
                        color: "#0000FF",
                        fontFamily: "Arial, sans-serif",
                        fontSize: "18px",
                      }} // Blue color, font style, and larger font size
                    >
                      Email: abc@example.com
                    </MDTypography>
                    <MDTypography
                      variant="body1" // Increase text size
                      sx={{
                        color: "#0000FF",
                        fontFamily: "Arial, sans-serif",
                        fontSize: "18px",
                      }} // Blue color, font style, and larger font size
                    >
                      Gender: Female
                    </MDTypography>
                  </MDBox>
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        )}
        {tabValue === 1 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <MDBox p={2}>
                  <MDTypography variant="h6" fontWeight="medium">
                    Personal Information
                  </MDTypography>
                  <MDBox mt={1.5}>
                    <MDTypography variant="body2" color="text">
                      Address: 123 Main St, New York, NY
                    </MDTypography>
                    <MDTypography variant="body2" color="text">
                      Phone: (123) 456-7890
                    </MDTypography>
                    <MDTypography variant="body2" color="text">
                      Emergency Contact: (987) 654-3210
                    </MDTypography>
                  </MDBox>
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        )}
      </MDBox>
    </Header>
  );
}

export default StudentProfile;
