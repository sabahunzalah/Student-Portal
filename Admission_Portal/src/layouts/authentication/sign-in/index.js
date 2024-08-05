import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/pngtree-school-computer-lab-background-vector-image-image_15717581.jpg";
import logo from "assets/images/smit-stud-removebg-preview.png";
import { BorderColor } from "@mui/icons-material";
import Color from "color";

function Basic() {
  const greenColor = Color("#82bd3e");
  const blueColor = Color("#127168");
  const mixedColor = greenColor.mix(blueColor, 0.5);
  const newGradient = `linear-gradient(180deg, ${mixedColor.hex()}, #FFF)`;
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <BasicLayout image={bgImage} style={{ border: "3px solid red", height: "100px" }}>
      <Card
        style={{
          paddingTop: "30px",
          paddingBottom: "130px",
          height: "550px",
          backgroundImage: newGradient,
          backgroundSize: "100% 50%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <MDBox
          borderRadius="lg"
          coloredShadow="#8dc63f"
          mx={2}
          mt={-3}
          // p={2}
          mb={1}
          textAlign="center"
        >
          <img src={logo} style={{ width: "140px", height: "100px" }} />

          <MDTypography
            variant="h3"
            fontWeight="medium"
            color="success"
            mt={0.5}
            style={{ color: "#127168" }}
          >
            Sign In
          </MDTypography>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ mt: 0.5, mb: 2 }}
            style={{ padding: "0px" }}
          >
            <Grid item xs={3}>
              <MDTypography
                component={MuiLink}
                href="#"
                variant="h2"
                style={{ color: "#127168", padding: "3px" }}
              >
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={3}>
              <MDTypography component={MuiLink} href="#" variant="h2" style={{ color: "#127168" }}>
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={3}>
              <MDTypography component={MuiLink} href="#" variant="h2" style={{ color: "#127168" }}>
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "darkgray",
                    },
                    "&:hover fieldset": {
                      borderColor: "#127168",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#127168",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    "&.Mui-focused": {
                      color: "#127168",
                    },
                  },
                }}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "darkgray",
                    },
                    "&:hover fieldset": {
                      borderColor: "#127168",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#127168",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    "&.Mui-focused": {
                      color: "#127168",
                    },
                  },
                }}
              />
            </MDBox>

            <MDBox mt={4} mb={1} color="#127168">
              <MDButton
                variant="gradient"
                fullWidth
                color="success"
                size="large"
                // style={{ border: "2px solid #127168" }}
              >
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="success"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;