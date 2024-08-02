import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";
import { useTheme } from "@mui/material/styles";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import breakpoints from "assets/theme/base/breakpoints";
import burceMars from "assets/images/bruce-mars.jpg";
import backgroundImage from "assets/images/create-vector-graphic-students-analyzing-data-computers-technologyequipped-lab-vector-illustration-flat-styleexperiments_839035-826332.avif";

function Header({ children, tabValue, handleSetTabValue }) {
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

  const theme = useTheme();

  return (
    <MDBox position="relative" mb={5}>
      <MDBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.6),
              rgba(gradients.info.state, 0.6)
            )}, url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />
      <Card
        sx={{
          position: "relative",
          mt: -8,
          mx: 3,
          py: 2,
          px: 2,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <MDAvatar
              src={burceMars}
              alt="profile-image"
              size="xl"
              shadow="sm"
              sx={{ border: `2px solid ${theme.palette.success.main}` }} // Green border
            />
          </Grid>
          <Grid item>
            <MDBox height="100%" mt={0.5} lineHeight={1}>
              <MDTypography
                variant="h5"
                fontWeight="medium"
                sx={{ color: theme.palette.success.main }} // Green text
              >
                Innovative Souls
              </MDTypography>
              <MDTypography
                variant="button"
                fontWeight="regular"
                sx={{ color: theme.palette.success.light }} // Light green text
              >
                Computer Science
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <Tabs
                orientation={tabsOrientation}
                value={tabValue}
                onChange={handleSetTabValue}
                sx={{
                  "& .MuiTabs-flexContainer": {
                    gap: "10px", // Add 10px space between tabs
                  },
                }}
              >
                <Tab
                  label="Overview"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25, color: theme.palette.info.main }}>
                      person
                    </Icon>
                  }
                  sx={{
                    color: theme.palette.info.main, // Blue text
                    border: `2px solid ${theme.palette.success.main}`, // Green border
                    borderRadius: "4px", // Optional: to make the border look better
                  }}
                />
                <Tab
                  label="Personal Info"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25, color: theme.palette.info.main }}>
                      info
                    </Icon>
                  }
                  sx={{
                    color: theme.palette.info.main, // Blue text
                    border: `2px solid ${theme.palette.success.main}`, // Green border
                    borderRadius: "4px", // Optional: to make the border look better
                  }}
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

Header.defaultProps = {
  children: "",
};

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

// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import Card from "@mui/material/Card";
// import Grid from "@mui/material/Grid";
// import AppBar from "@mui/material/AppBar";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Icon from "@mui/material/Icon";
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";
// import breakpoints from "assets/theme/base/breakpoints";
// import burceMars from "assets/images/bruce-mars.jpg";
// import backgroundImage from "assets/images/bg-profile.jpeg";

// function Header({ children, tabValue, handleSetTabValue }) {
//   const [tabsOrientation, setTabsOrientation] = useState("horizontal");

//   useEffect(() => {
//     function handleTabsOrientation() {
//       return window.innerWidth < breakpoints.values.sm
//         ? setTabsOrientation("vertical")
//         : setTabsOrientation("horizontal");
//     }
//     window.addEventListener("resize", handleTabsOrientation);
//     handleTabsOrientation();
//     return () => window.removeEventListener("resize", handleTabsOrientation);
//   }, []);

//   return (
//     <MDBox position="relative" mb={5}>
//       <MDBox
//         display="flex"
//         alignItems="center"
//         position="relative"
//         minHeight="18.75rem"
//         borderRadius="xl"
//         sx={{
//           backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
//             `${linearGradient(
//               rgba(gradients.info.main, 0.6),
//               rgba(gradients.info.state, 0.6)
//             )}, url(${backgroundImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "50%",
//           overflow: "hidden",
//         }}
//       />
//       <Card
//         sx={{
//           position: "relative",
//           mt: -8,
//           mx: 3,
//           py: 2,
//           px: 2,
//         }}
//       >
//         <Grid container spacing={3} alignItems="center">
//           <Grid item>
//             <MDAvatar src={burceMars} alt="profile-image" size="xl" shadow="sm" />
//           </Grid>
//           <Grid item>
//             <MDBox height="100%" mt={0.5} lineHeight={1}>
//               <MDTypography variant="h5" fontWeight="medium">
//                 Innovative Souls
//               </MDTypography>
//               <MDTypography variant="button" color="text" fontWeight="regular">
//                 CEO / Co-Founder
//               </MDTypography>
//             </MDBox>
//           </Grid>
//           <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
//             <AppBar position="static">
//               <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
//                 <Tab
//                   label="Overview"
//                   icon={
//                     <Icon fontSize="small" sx={{ mt: -0.25 }}>
//                       person
//                     </Icon>
//                   }
//                 />
//                 <Tab
//                   label="Academic Records"
//                   icon={
//                     <Icon fontSize="small" sx={{ mt: -0.25 }}>
//                       school
//                     </Icon>
//                   }
//                 />
//                 <Tab
//                   label="Achievements"
//                   icon={
//                     <Icon fontSize="small" sx={{ mt: -0.25 }}>
//                       star
//                     </Icon>
//                   }
//                 />
//                 <Tab
//                   label="Applications"
//                   icon={
//                     <Icon fontSize="small" sx={{ mt: -0.25 }}>
//                       assignment
//                     </Icon>
//                   }
//                 />
//               </Tabs>
//             </AppBar>
//           </Grid>
//         </Grid>
//         {children}
//       </Card>
//     </MDBox>
//   );
// }

// Header.defaultProps = {
//   children: "",
// };

// Header.propTypes = {
//   children: PropTypes.node,
//   tabValue: PropTypes.number.isRequired,
//   handleSetTabValue: PropTypes.func.isRequired,
// };

// function StudentProfile() {
//   const [tabValue, setTabValue] = useState(0);

//   const handleSetTabValue = (event, newValue) => setTabValue(newValue);

//   return (
//     <Header tabValue={tabValue} handleSetTabValue={handleSetTabValue}>
//       <MDBox p={3}>
//         {tabValue === 0 && (
//           <Grid container spacing={3}>
//             <Grid item xs={12} md={6}>
//               <Card>
//                 <MDBox p={2}>
//                   <MDTypography variant="h6" fontWeight="medium">
//                     Personal Information
//                   </MDTypography>
//                   <MDBox mt={1.5}>
//                     <MDTypography variant="body2" color="text">
//                       Name: Innovative Souls
//                     </MDTypography>
//                     <MDTypography variant="body2" color="text">
//                       Email: richard@example.com
//                     </MDTypography>
//                     <MDTypography variant="body2" color="text">
//                       Phone: (123) 456-7890
//                     </MDTypography>
//                     <MDTypography variant="body2" color="text">
//                       Address: 123 Main St, New York, NY
//                     </MDTypography>
//                   </MDBox>
//                 </MDBox>
//               </Card>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Card>
//                 <MDBox p={2}>
//                   <MDTypography variant="h6" fontWeight="medium">
//                     Educational Background
//                   </MDTypography>
//                   <MDBox mt={1.5}>
//                     <MDTypography variant="body2" color="text">
//                       Previous School: ABC High School
//                     </MDTypography>
//                     <MDTypography variant="body2" color="text">
//                       GPA: 3.8
//                     </MDTypography>
//                     <MDTypography variant="body2" color="text">
//                       Major: Science
//                     </MDTypography>
//                   </MDBox>
//                 </MDBox>
//               </Card>
//             </Grid>
//             <Grid item xs={12}>
//               <Card>
//                 <MDBox p={2}>
//                   <MDTypography variant="h6" fontWeight="medium">
//                     Goals and Interests
//                   </MDTypography>
//                   <MDBox mt={1.5}>
//                     <MDTypography variant="body2" color="text">
//                       Career Goals: To become a software engineer
//                     </MDTypography>
//                     <MDTypography variant="body2" color="text">
//                       Interests: Coding, Basketball, Reading
//                     </MDTypography>
//                   </MDBox>
//                 </MDBox>
//               </Card>
//             </Grid>
//           </Grid>
//         )}
//         {tabValue === 1 && (
//           <Grid container spacing={3}>
//             <Grid item xs={12}>
//               <Card>
//                 <MDBox p={2}>
//                   <MDTypography variant="h6" fontWeight="medium">
//                     Academic Records
//                   </MDTypography>
//                   <MDBox mt={1.5}>
//                     <MDTypography variant="body2" color="text">
//                       Course List: Math, Science, English, History
//                     </MDTypography>
//                     <MDTypography variant="body2" color="text">
//                       Grades: A, B+, A-, B
//                     </MDTypography>
//                   </MDBox>
//                 </MDBox>
//               </Card>
//             </Grid>
//           </Grid>
//         )}
//         {tabValue === 2 && (
//           <Grid container spacing={3}>
//             <Grid item xs={12}>
//               <Card>
//                 <MDBox p={2}>
//                   <MDTypography variant="h6" fontWeight="medium">
//                     Achievements
//                   </MDTypography>
//                   <MDBox mt={1.5}>
//                     <MDTypography variant="body2" color="text">
//                       Certifications: Java Programming, Web Development
//                     </MDTypography>
//                     <MDTypography variant="body2" color="text">
//                       Awards: Math Olympiad Winner, Science Fair 2nd Place
//                     </MDTypography>
//                   </MDBox>
//                 </MDBox>
//               </Card>
//             </Grid>
//           </Grid>
//         )}
//         {tabValue === 3 && (
//           <Grid container spacing={3}>
//             <Grid item xs={12}>
//               <Card>
//                 <MDBox p={2}>
//                   <MDTypography variant="h6" fontWeight="medium">
//                     Applications
//                   </MDTypography>
//                   <MDBox mt={1.5}>
//                     <MDTypography variant="body2" color="text">
//                       Application to XYZ University: Under Review
//                     </MDTypography>
//                     <MDTypography variant="body2" color="text">
//                       Application to ABC College: Accepted
//                     </MDTypography>
//                   </MDBox>
//                 </MDBox>
//               </Card>
//             </Grid>
//           </Grid>
//         )}
//       </MDBox>
//     </Header>
//   );
// }

// export default StudentProfile;

// /**
// =========================================================
// * Material Dashboard 2 React - v2.2.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/material-dashboard-react
// * Copyright 2023 Creative Tim (https://www.creative-tim.com)

// Coded by www.creative-tim.com

//  =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */

// import { useState, useEffect } from "react";

// // prop-types is a library for typechecking of props.
// import PropTypes from "prop-types";

// // @mui material components
// import Card from "@mui/material/Card";
// import Grid from "@mui/material/Grid";
// import AppBar from "@mui/material/AppBar";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Icon from "@mui/material/Icon";

// // Material Dashboard 2 React components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";

// // Material Dashboard 2 React base styles
// import breakpoints from "assets/theme/base/breakpoints";

// // Images
// import burceMars from "assets/images/bruce-mars.jpg";
// import backgroundImage from "assets/images/bg-profile.jpeg";

// function Header({ children }) {
//   const [tabsOrientation, setTabsOrientation] = useState("horizontal");
//   const [tabValue, setTabValue] = useState(0);

//   useEffect(() => {
//     // A function that sets the orientation state of the tabs.
//     function handleTabsOrientation() {
//       return window.innerWidth < breakpoints.values.sm
//         ? setTabsOrientation("vertical")
//         : setTabsOrientation("horizontal");
//     }

//     /**
//      The event listener that's calling the handleTabsOrientation function when resizing the window.
//     */
//     window.addEventListener("resize", handleTabsOrientation);

//     // Call the handleTabsOrientation function to set the state with the initial value.
//     handleTabsOrientation();

//     // Remove event listener on cleanup
//     return () => window.removeEventListener("resize", handleTabsOrientation);
//   }, [tabsOrientation]);

//   const handleSetTabValue = (event, newValue) => setTabValue(newValue);

//   return (
//     <MDBox position="relative" mb={5}>
//       <MDBox
//         display="flex"
//         alignItems="center"
//         position="relative"
//         minHeight="18.75rem"
//         borderRadius="xl"
//         sx={{
//           backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
//             `${linearGradient(
//               rgba(gradients.info.main, 0.6),
//               rgba(gradients.info.state, 0.6)
//             )}, url(${backgroundImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "50%",
//           overflow: "hidden",
//         }}
//       />
//       <Card
//         sx={{
//           position: "relative",
//           mt: -8,
//           mx: 3,
//           py: 2,
//           px: 2,
//         }}
//       >
//         <Grid container spacing={3} alignItems="center">
//           <Grid item>
//             <MDAvatar src={burceMars} alt="profile-image" size="xl" shadow="sm" />
//           </Grid>
//           <Grid item>
//             <MDBox height="100%" mt={0.5} lineHeight={1}>
//               <MDTypography variant="h5" fontWeight="medium">
//                 Innovative Souls
//               </MDTypography>
//               <MDTypography variant="button" color="text" fontWeight="regular">
//                 CEO / Co-Founder
//               </MDTypography>
//             </MDBox>
//           </Grid>
//           <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
//             <AppBar position="static">
//               <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
//                 <Tab
//                   label="App"
//                   icon={
//                     <Icon fontSize="small" sx={{ mt: -0.25 }}>
//                       home
//                     </Icon>
//                   }
//                 />
//                 <Tab
//                   label="Message"
//                   icon={
//                     <Icon fontSize="small" sx={{ mt: -0.25 }}>
//                       email
//                     </Icon>
//                   }
//                 />
//                 <Tab
//                   label="Settings"
//                   icon={
//                     <Icon fontSize="small" sx={{ mt: -0.25 }}>
//                       settings
//                     </Icon>
//                   }
//                 />
//               </Tabs>
//             </AppBar>
//           </Grid>
//         </Grid>
//         {children}
//       </Card>
//     </MDBox>
//   );
// }

// // Setting default props for the Header
// Header.defaultProps = {
//   children: "",
// };

// // Typechecking props for the Header
// Header.propTypes = {
//   children: PropTypes.node,
// };

// export default Header;
