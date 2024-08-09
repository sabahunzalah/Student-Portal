import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import AssignmentsAndExams from "layouts/dashboard/data/AssignmentsAndExams";
import Attendance from "layouts/dashboard/data/Attendance";
import AcademicPerformance from "layouts/dashboard/data/AcademicPerformance";
import { Line } from "react-chartjs-2";
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import quizIcon from "assets/images/quiiz.jpeg";
import projectIcon from "assets/images/projects.jpeg";
import resultIcon from "assets/images/result.jpeg";
import feedbackIcon from "assets/images/feedbacks.jpeg";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDTypography from "components/MDTypography";
import Image from "../../assets/images/amna1.png";
import webpic from "../../assets/images/webpic.jpeg";
import { borderRadius, display } from "@mui/system";
import Color from "color";

function Dashboard() {
  const greenColor = Color("#82bd3e");
  const blueColor = Color("#127168");
  const mixedColor = greenColor.mix(blueColor, 0.5);
  const newGradient = `linear-gradient(30deg, ${mixedColor.hex()}, #FFF)`;
  const academicPerformanceData = {
    labels: ["Course 1", "Course 2", "Course 3"],
    datasets: [
      {
        label: "Grades",
        data: [88, 92, 85],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const assignmentsAndExamsData = {
    labels: ["Assignment 1", "Assignment 2", "Mid-term", "Final Exam"],
    datasets: [
      {
        label: "Grades",
        data: [85, 90, 75, 80],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const attendanceData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Attendance",
        data: [95, 85, 90, 88],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const academicPerformanceDetails = [
    { course: "Course 1", grade: 88 },
    { course: "Course 2", grade: 92 },
    { course: "Course 3", grade: 85 },
  ];

  const assignmentsAndExamsDetails = [
    { name: "Assignment 1", grade: 85 },
    { name: "Assignment 2", grade: 90 },
    { name: "Mid-term", grade: 75 },
    { name: "Final Exam", grade: 80 },
  ];

  const attendanceDetails = [
    { week: "Week 1", attendance: 95 },
    { week: "Week 2", attendance: 85 },
    { week: "Week 3", attendance: 90 },
    { week: "Week 4", attendance: 88 },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox
        sx={{
          border: "2px solid green",
          borderRadius: "10px",
          // backgroundColor: "white",
          marginTop: 1,
          padding: 2,

          backgroundImage: newGradient,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <MDBox
          sx={{
            display: "flex",
            justifyContent: "flex start",
            gap: "10px",
            // backgroundColor: "#ffffff",
            // border: "2px solid black",
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

                // border: "2px solid black",
              }}
            >
              {/* <Projects /> */}
              <MDTypography
                sx={{
                  height: 50,
                  width: 50,
                }}
              >
                <img src={Image} style={{ height: "100%", width: "100%", borderRadius: "50px" }} />
              </MDTypography>
              <MDTypography>
                <h2>Welcome Smit</h2>
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox
          sx={{
            borderRadius: "10px",
            backgroundColor: "white",
            marginTop: 1,
            padding: 2,
          }}
        >
          <Grid container spacing={3}>
            {Array(3)
              .fill("")
              .map((_, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Card
                    sx={{
                      height: 260,
                      width: "100%",
                      maxWidth: 300,
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      transition: "box-shadow 0.3s ease-in-out",
                      "&:hover": {
                        boxShadow: "0 4px 12px rgba(0, 200, 200, 0.5)", // Mixture of light green and blue
                      },
                    }}
                  >
                    <CardMedia
                      sx={{
                        height: 140,
                        backgroundColor: "#ffb534",
                        display: "block",
                        boxShadow: "inherit",
                        margin: "0",
                      }}
                      image={webpic}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="div">
                        Enrolled course
                      </Typography>
                      <Typography variant="h6" color="text.primary">
                        Web & App Development
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </MDBox>

        <MDBox py={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="success"
                  icon={quizIcon}
                  count="Quizzes"
                  countColor="success"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="success"
                  icon={projectIcon}
                  count="Projects"
                  countColor="success"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="success"
                  icon={resultIcon}
                  count="Results"
                  countColor="success"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="success"
                  icon={feedbackIcon}
                  count="Feedbacks"
                  countColor="success"
                />
              </MDBox>
            </Grid>
          </Grid>
          <MDBox mt={4.5}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mb={3}>
                  <Line
                    data={academicPerformanceData}
                    options={{ plugins: { legend: { display: false } } }}
                  />
                  <AcademicPerformance data={academicPerformanceDetails} />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mb={3}>
                  <Line
                    data={assignmentsAndExamsData}
                    options={{ plugins: { legend: { display: false } } }}
                  />
                  <AssignmentsAndExams data={assignmentsAndExamsDetails} />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mb={3}>
                  <Line
                    data={attendanceData}
                    options={{ plugins: { legend: { display: false } } }}
                  />
                  <Attendance data={attendanceDetails} />
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>
      </MDBox>

      {/* <MDBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
          </Grid>
             <Projects /> 
          <Grid item xs={12} md={6} lg={4}>
            <OrdersOverview />
          </Grid>
        </Grid>
      </MDBox> */}

      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
