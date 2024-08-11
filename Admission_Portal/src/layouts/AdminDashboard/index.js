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
import {
  academicPerformanceData,
  assignmentsAndExamsData,
  attendanceData,
  academicPerformanceDetails,
  assignmentsAndExamsDetails,
  attendanceDetails,
} from "./data";
import BgCardMain from "./components";
function AdminDashboard() {
  return (
    <DashboardLayout>
      <MDBox>
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            {/* <BgCardMain /> */}
            {/* <Projects /> */}
          </Grid>
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
                  options={{ plugins: { legend: { display: false } } ``}}
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
                <Line data={attendanceData} options={{ plugins: { legend: { display: false } } }} />
                <Attendance data={attendanceDetails} />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AdminDashboard;
