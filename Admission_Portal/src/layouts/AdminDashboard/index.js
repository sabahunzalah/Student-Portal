import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import quizIcon from "assets/images/quiiz.jpeg";
import projectIcon from "assets/images/projects.jpeg";
import resultIcon from "assets/images/result.jpeg";
import feedbackIcon from "assets/images/feedbacks.jpeg";
import Image from "../../assets/images/studentbg.jpeg";
import Image2 from "../../assets/images/cour10.jpeg";
import Image3 from "../../assets/images/time2.jpeg";
import Color from "color";
import MDTypography from "components/MDTypography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import TickPlacementBars from "../dashboard/data/BarGrapgh";
import authorsTableData from "../dashboard/data/authorsTableData";
import projectsTableData from "../dashboard/data/projectsTableData";
function AdminDashboard() {
  const greenColor = Color("#82bd3e");
  const blueColor = Color("#127168");
  const mixedColor = greenColor.mix(blueColor, 0.5);
  const newGradient = `linear-gradient(180deg, ${mixedColor.hex()}, #FFF)`;
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
  const cardDetails = [
    {
      image: Image2, // Your image import
      title: "Courses",
      description: "Courses Offered.",
    },
    {
      image: Image, // Your image import
      title: "Students",
      description: "Smit Students.",
    },
    {
      image: Image3, // Your image import
      title: "Class schedule",
      description: "Timings and Days.",
    },
  ];

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
      <MDBox
        sx={{
          // border: "2px solid green",
          borderRadius: "10px",
          backgroundColor: "#ececec",
          marginTop: 1,
          padding: 2,
        }}
      >
        <MDBox
          sx={{
            display: "flex",
            justifyContent: "flex start",
            gap: "10px",
            backgroundColor: "#ffffff",
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem", // Adjust font size to fit the container
                }}
              >
                👋
              </MDTypography>
              <MDTypography>Hello Welcome To SMIT!</MDTypography>
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
            {cardDetails.map((card, index) => (
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
                      boxShadow: "0 4px 12px rgba(0, 200, 200, 0.5)",
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      height: "160px", // Adjust height as needed
                      width: "100%",
                      display: "block",
                      boxShadow: "inherit",
                      margin: "0",
                      overflow: "hidden", // Ensure that the content does not overflow
                    }}
                    component="img"
                    image={card.image}
                    alt={card.title}
                    style={{ objectFit: "fill" }} // Ensure the image covers the entire area
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                      {card.description}
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
                  amount={2}
                  label={10}
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
                  amount={2}
                  label={25}
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
                  amount={75}
                  label={100}
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
                  amount={1}
                  label={3}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox py={3}>
          <Grid container>
            <TickPlacementBars />
          </Grid>
        </MDBox>
        {/* here is the render component for teacher  */}
      </MDBox>
    </DashboardLayout>
  );
}

export default AdminDashboard;
