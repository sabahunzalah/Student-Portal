// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import AssignmentsAndExams from "layouts/dashboard/components/AssignmentsAndExams";
import Attendance from "layouts/dashboard/components/Attendance";
import AcademicPerformance from "layouts/dashboard/components/AcademicPerformance";

// Chart components
import { Line } from "react-chartjs-2";

// Data
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Configure chart.js
import Chart from "chart.js/auto";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import Projects from "layouts/dashboard/components/Projects";

function Dashboard() {
  // const { sales, tasks } = reportsLineChartData;

  const assignmentsAndExamsData = {
    labels: ["Assignment 1", "Assignment 2", "Mid-term", "Final Exam"],
    datasets: [
      {
        label: "Grades",
        data: [85, 90, 75, 80],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  const academicPerformanceData = {
    labels: ["Course 1", "Course 2", "Course 3"],
    datasets: [
      {
        label: "Grades",
        data: [88, 92, 85],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  const attendanceData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Attendance",
        data: [95, 85, 90, 88],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  // Data for components
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
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard color="dark" icon="" count="Success Stories" />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard icon="" count=" Blogs" />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard color="success" icon="" count=" Technologies" />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard color="primary" icon="" count="Career" />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <Line data={academicPerformanceData} />
                <br />
                <AcademicPerformance data={academicPerformanceDetails} />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <Line data={assignmentsAndExamsData} />
                <br />
                <AssignmentsAndExams data={assignmentsAndExamsDetails} />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <Line data={attendanceData} />
                <br />
                <Attendance data={attendanceDetails} />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
