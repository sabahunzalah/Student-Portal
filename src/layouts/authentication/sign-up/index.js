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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/Student-logo.jpg";
import logo from "assets/images/smit-stud.png";
import BasicLayout from "../components/BasicLayout";
function Cover() {
  const handleNav = () => {
    window.location.href = "/dashboard";
  };
  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="contained"
          bgColor="light"
          borderRadius="lg"
          coloredShadow="#8dc63f"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDBox variant="contained" circular bgColor="light" borderRadius="sm" p={0}>
            <img src={logo} style={{ width: "150px", height: "100px" }} onClick={handleNav} />
          </MDBox>
          <MDTypography
            variant="h3"
            fontWeight="medium"
            color="success"
            my={0}
            component={Link}
            to="/dashboard"
          >
            Sign Up
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 0, mb: 0 }}>
            <Grid item xs={3}>
              <MDTypography component={MuiLink} href="#" variant="h1" color="success">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={3}>
              <MDTypography component={MuiLink} href="#" variant="h1" color="success">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={3}>
              <MDTypography component={MuiLink} href="#" variant="h1" color="success">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid>
          {/* <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography> */}
        </MDBox>
        <MDBox pt={1} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text" label="Name" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="email" label="Email" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" variant="standard" fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="success"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="success" fullWidth>
                sign up
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="success"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Cover;
