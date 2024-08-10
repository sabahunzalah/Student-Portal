import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
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
import Color from "color";

function Basic() {
  const greenColor = Color("#82bd3e");
  const blueColor = Color("#127168");
  const mixedColor = greenColor.mix(blueColor, 0.5);
  const newGradient = `linear-gradient(180deg, ${mixedColor.hex()}, #FFF)`;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // for programmatic navigation

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await axios.post("http://localhost:8080/api/login", {
  //       email,
  //       password,
  //     });

  //     if (response.data.success) {
  //       // alert(`Welcome, ${response.data.user.name}! You have been successfully logged in.`);
  //       // // Redirect to dashboard if login is successful
  //       // navigate("/dashboard");
  //       localStorage.setItem("token", response.data.jwtToken);
  //       localStorage.setItem("role", response.data.role);
  //       navigate("/dashboard");
  //     } else {
  //       // Handle login failure
  //       setErrorMessage("Invalid email or password. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error logging in:", error.response?.data || error.message);
  //     alert("An error occurred. Please try again later.");
  //   }
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email,
        password,
      });

      if (response.data.success) {
        // Store JWT token and user role in localStorage
        localStorage.setItem("token", response.data.jwtToken);
        localStorage.setItem("role", response.data.role);

        // Check the user's role and navigate accordingly
        if (response.data.role === "admin-portal") {
          navigate("/admin-dashboard"); // Navigate to AdminDashboard
        } else if (response.data.role === "student-portal") {
          navigate("/dashboard"); // Navigate to Student Dashboard
        } else {
          // Handle any other roles or show an error if the role is unexpected
          setErrorMessage("Invalid user role. Please contact support.");
        }
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error signing up:", error.response?.data || error.message);
    }
  };

  // Similarly for login, you should set the name and role in localStorage and navigate accordingly.

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
        <MDBox borderRadius="lg" coloredShadow="#8dc63f" mx={2} mt={-3} mb={1} textAlign="center">
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
          <MDBox component="form" role="form" onSubmit={handleSubmit}>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            {errorMessage && (
              <MDBox mb={2} textAlign="center" color="error">
                <MDTypography variant="body2" color="error">
                  {errorMessage}
                </MDTypography>
              </MDBox>
            )}
            <MDBox mt={4} mb={1} color="#127168">
              <MDButton type="submit" variant="gradient" fullWidth color="success" size="large">
                Sign In
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
