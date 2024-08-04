import React from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  const gradientCardStyle = {
    background: "linear-gradient(to bottom right, green, white)",
    height: "100%", // Make sure the gradient covers the whole card
    width: "100%",
    padding: "20px",
    borderRadius: "10px", // Optional: to make the corners rounded
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox
        py={3}
        sx={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1661302846246-e8faef18255d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <div style={gradientCardStyle}>
                <ComplexStatisticsCard
                  icon="S"
                  color="success"
                  count=""
                  percentage={{
                    color: "success",
                    label: <h3>Manage Applications</h3>,
                  }}
                />
              </div>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <div style={gradientCardStyle}>
                <ComplexStatisticsCard
                  icon="M"
                  count=""
                  percentage={{
                    color: "success",
                    label: <h3>Review Applications (Approve/Reject)</h3>,
                  }}
                />
              </div>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <div style={gradientCardStyle}>
                <ComplexStatisticsCard
                  color="success"
                  icon="I"
                  count=""
                  percentage={{
                    color: "success",
                    label: <h3>Send Notifications to Users</h3>,
                  }}
                />
              </div>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <div style={gradientCardStyle}>
                <ComplexStatisticsCard
                  icon="T"
                  count=""
                  percentage={{
                    color: "success",
                    label: <h3>Manage Course / Catalog</h3>,
                  }}
                />
              </div>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <div style={gradientCardStyle}>
                <ComplexStatisticsCard
                  color="success"
                  icon="M"
                  count=""
                  percentage={{
                    color: "success",
                    label: <h3>Manage Inspirational Videos</h3>,
                  }}
                />
              </div>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <div style={gradientCardStyle}>
                <ComplexStatisticsCard
                  icon="A"
                  count=""
                  percentage={{
                    color: "success",
                    label: <h3>Admin Logs Out</h3>,
                  }}
                />
              </div>
            </MDBox>
          </Grid>
          <Grid item xs={10} md={6} lg={4}>
            <MDBox mb={1}>
              <ReportsBarChart
                color="success"
                title="Monthly Progress"
                chart={reportsBarChartData}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;

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

// // @mui material components
// import Grid from "@mui/material/Grid";

// // Material Dashboard 2 React components
// import MDBox from "components/MDBox";

// // Material Dashboard 2 React example components
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// // Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
// import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// // Dashboard components
// import Projects from "layouts/dashboard/components/Projects";
// import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
// // image

// function Dashboard() {
//   const { sales, tasks } = reportsLineChartData;

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <MDBox py={3}>
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={6} lg={3}>
//             <MDBox mb={1.5}>
//               <ComplexStatisticsCard
//                 icon="S"
//                 color="success"
//                 count=""
//                 percentage={{
//                   color: "success",
//                   label: <h3>Manage Applications</h3>,
//                 }}
//               />
//             </MDBox>
//           </Grid>
//           <Grid item xs={12} md={6} lg={3}>
//             <MDBox mb={1.5}>
//               <ComplexStatisticsCard
//                 icon="M"
//                 count=""
//                 percentage={{
//                   color: "success",
//                   label: <h3>Review Applications (Approve/Reject)</h3>,
//                 }}
//               />
//             </MDBox>
//           </Grid>
//           <Grid item xs={12} md={6} lg={3}>
//             <MDBox mb={1.5}>
//               <ComplexStatisticsCard
//                 color="success"
//                 icon="I"
//                 count=""
//                 percentage={{
//                   color: "success",
//                   label: <h3> Send Notifications to Users </h3>,
//                 }}
//               />
//             </MDBox>
//           </Grid>
//           <Grid item xs={12} md={6} lg={3}>
//             <MDBox mb={1.5}>
//               <ComplexStatisticsCard
//                 icon="T"
//                 count=""
//                 percentage={{
//                   color: "success",
//                   label: <h3>Manage Course / Catalog</h3>,
//                 }}
//               />
//             </MDBox>
//           </Grid>
//           <Grid item xs={12} md={6} lg={3}>
//             <MDBox mb={1.5}>
//               <ComplexStatisticsCard
//                 color="success"
//                 icon="M"
//                 count=""
//                 percentage={{
//                   color: "success",
//                   label: <h3> Manage Inspirational Videos </h3>,
//                 }}
//               />
//             </MDBox>
//           </Grid>
//           <Grid item xs={12} md={6} lg={3}>
//             <MDBox mb={1.5}>
//               <ComplexStatisticsCard
//                 icon="A"
//                 count=""
//                 percentage={{
//                   color: "success",
//                   label: <h3>Admin Logs Out </h3>,
//                 }}
//               />
//             </MDBox>
//           </Grid>
//           <Grid item xs={10} md={6} lg={4}>
//             <MDBox mb={1}>
//               <ReportsBarChart
//                 color="success"
//                 title="Monthly Progress"
//                 chart={reportsBarChartData}
//               />
//             </MDBox>
//           </Grid>
//         </Grid>
//         {/* <MDBox>
//           <Grid container spacing={3}>
//             <Grid item xs={12} md={6} lg={8}>
//               <Projects />
//             </Grid>
//             <Grid item xs={12} md={6} lg={4}>
//               <OrdersOverview />
//             </Grid>
//           </Grid>
//         </MDBox> */}
//       </MDBox>
//       <Footer />
//     </DashboardLayout>
//   );
// }

// export default Dashboard;
