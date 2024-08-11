// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

// Import images
import image1 from "../../assets/images/react2.png";
import image2 from "../../assets/images/node.png";
import image3 from "../../assets/images/monsmall.jpeg";
import image4 from "../../assets/images/expic.png";
import image5 from "../../assets/images/fl1.jpeg";
import image6 from "../../assets/images/fl2.jpeg";
import image7 from "../../assets/images/fl3.jpeg";
import image8 from "../../assets/images/fl4.jpeg";
import image9 from "../../assets/images/seo1.jpeg";
import image10 from "../../assets/images/seo2.jpeg";
import image11 from "../../assets/images/seo3.jpeg";
import image12 from "../../assets/images/seo4.jpeg";
import image13 from "../../assets/images/ui1.jpeg";
import image14 from "../../assets/images/ui11.png";
import image15 from "../../assets/images/ui3.jpeg";
import image16 from "../../assets/images/ui4.jpeg";

const courses = [
  {
    title: "React.js",
    image: image1,
    description: "Learn how to build powerful user interfaces using React.js.",
  },
  {
    title: "Node.js",
    image: image2,
    description: "Master backend development with Node.js and Express.",
  },
  {
    title: "MongoDB",
    image: image3,
    description: "Learn efficient data management with MongoDB.",
  },
  {
    title: "Express.js",
    image: image4,
    description: "Understand the fundamentals of building APIs with Express.js.",
  },
];

const flutterCourses = [
  {
    title: "Introduction to Flutter",
    image: image5,
    description:
      "Learn the basics of Flutter and Dart to build beautiful and performant mobile applications.",
  },
  {
    title: "Advanced Flutter Development",
    image: image6,
    description:
      "Dive deeper into Flutter for more advanced topics like state management, custom widgets, and animations.",
  },
  {
    title: "Flutter and Firebase Integration",
    image: image7,
    description:
      "Integrate Flutter with Firebase for authentication, database, and cloud functions.",
  },
  {
    title: "Building UI with Flutter",
    image: image8,
    description:
      "Focus on creating responsive and visually appealing user interfaces using Flutter's rich widget library.",
  },
];

const seoCourses = [
  {
    title: "Introduction to SEO",
    image: image9,
    description:
      "Learn the fundamentals of SEO, including keyword research, on-page and off-page optimization.",
  },
  {
    title: "Advanced SEO Techniques",
    image: image10,
    description:
      "Explore advanced SEO strategies, including technical SEO, link building, and competitive analysis.",
  },
  {
    title: "SEO for Content Marketing",
    image: image11,
    description:
      "Understand how to optimize content for search engines and create content that drives traffic.",
  },
  {
    title: "Local SEO Strategies",
    image: image12,
    description:
      "Learn how to optimize your website for local search results and attract local customers.",
  },
];

const uiUxCourses = [
  {
    title: "User Experience (UX) Design",
    image: image13,
    description:
      "Learn how to create user-centered designs to improve the user experience of digital products.",
  },
  {
    title: "User Interface (UI) Design",
    image: image14,
    description: "Design visually appealing and functional interfaces with a focus on usability.",
  },
  {
    title: "Prototyping with Figma",
    image: image15,
    description: "Learn to create interactive prototypes and collaborate on designs using Figma.",
  },
  {
    title: "Wireframing with Adobe XD",
    image: image16,
    description:
      "Create wireframes and interactive prototypes with Adobe XD for streamlined design processes.",
  },
];

function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
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
            <MDTypography>Hi student welcome to SMIT!</MDTypography>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox pt={3} pb={3}>
        <Grid container spacing={6}>
          {/* <Grid item xs={12}>
            <MDTypography variant="h4" color="textPrimary" mb={1}>
              Courses details
            </MDTypography>
          </Grid> */}

          {/* UI/UX Courses Section */}
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Card
              style={{
                // border: "2px solid black",
                paddingBottom: "20px",
              }}
            >
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h4" color="white">
                  What is UiUX?
                </MDTypography>
              </MDBox>
              <MDBox pt={3} px={3}>
                <Grid container spacing={3}>
                  {uiUxCourses.map((course) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={course.title}>
                      <Card
                        sx={{
                          // border: "2px solid black",
                          width: "100%", // Full width within the grid item
                          height: "250px", // Auto height to fit content
                          display: "flex",
                          flexDirection: "column",
                          transition: "0.3s",
                          "&:hover": {
                            transform: "scale(1.05)", // Zoom effect on hover
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                          },
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="140" // Fixed height for image
                          image={course.image}
                          alt={course.title}
                          sx={{
                            objectFit: "cover",
                            borderBottom: "2px solid black",
                          }}
                        />
                        <CardContent
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            padding: 2, // Responsive padding
                            height: "100%",
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
                          >
                            {course.title}
                          </Typography>
                          {/* <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              flex: 1,
                              textAlign: "left",
                              fontSize: { xs: "0.875rem", sm: "1rem" },
                            }} // Responsive font size
                          >
                            {course.description}
                          </Typography> */}
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </MDBox>
            </Card>
          </Grid>

          {/* Flutter Courses Section */}
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Card
              style={{
                // border: "2px solid black",
                paddingBottom: "20px",
              }}
            >
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="warning"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h4" color="white">
                  What is Flutter?
                </MDTypography>
              </MDBox>
              <MDBox pt={3} px={3}>
                <Grid container spacing={3}>
                  {flutterCourses.map((course) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={course.title}>
                      <Card
                        sx={{
                          // border: "2px solid black",
                          width: "100%", // Full width within the grid item
                          height: "250px", // Auto height to fit content
                          display: "flex",
                          flexDirection: "column",
                          transition: "0.3s",
                          "&:hover": {
                            transform: "scale(1.05)", // Zoom effect on hover
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                          },
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="140" // Fixed height for image
                          image={course.image}
                          alt={course.title}
                          sx={{
                            objectFit: "cover",
                            borderBottom: "2px solid black",
                          }}
                        />
                        <CardContent
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            padding: 2, // Responsive padding
                            height: "100%",
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
                          >
                            {course.title}
                          </Typography>
                          {/* <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              flex: 1,
                              textAlign: "left",
                              fontSize: { xs: "0.875rem", sm: "1rem" },
                            }} // Responsive font size
                          >
                            {course.description}
                          </Typography> */}
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </MDBox>
            </Card>
          </Grid>

          {/* SEO Courses Section */}
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Card
              style={{
                // border: "2px solid black",
                paddingBottom: "20px",
              }}
            >
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="error"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h4" color="white">
                  What is SEO?
                </MDTypography>
              </MDBox>
              <MDBox pt={3} px={3}>
                <Grid container spacing={3}>
                  {seoCourses.map((course) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={course.title}>
                      <Card
                        sx={{
                          // border: "2px solid black",
                          width: "100%", // Full width within the grid item
                          height: "250px", // Auto height to fit content
                          display: "flex",
                          flexDirection: "column",
                          transition: "0.3s",
                          "&:hover": {
                            transform: "scale(1.05)", // Zoom effect on hover
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                          },
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="140" // Fixed height for image
                          image={course.image}
                          alt={course.title}
                          sx={{
                            objectFit: "cover",
                            borderBottom: "2px solid black",
                          }}
                        />
                        <CardContent
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            padding: 2, // Responsive padding
                            height: "100%",
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
                          >
                            {course.title}
                          </Typography>
                          {/* <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              flex: 1,
                              textAlign: "left",
                              fontSize: { xs: "0.875rem", sm: "1rem" },
                            }} // Responsive font size
                          >
                            {course.description}
                          </Typography> */}
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                  {/* MERN Stack Courses Section */}

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Card
                      style={{
                        // border: "2px solid black",
                        paddingBottom: "20px",
                      }}
                    >
                      <MDBox
                        mx={2}
                        mt={-3}
                        py={3}
                        px={2}
                        variant="gradient"
                        bgColor="success"
                        borderRadius="lg"
                        coloredShadow="info"
                      >
                        <MDTypography variant="h4" color="white">
                          What is MERN?
                        </MDTypography>
                      </MDBox>
                      <MDBox pt={3} px={3}>
                        <Grid container spacing={3}>
                          {courses.map((course) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={course.title}>
                              <Card
                                sx={{
                                  // border: "2px solid black",
                                  width: "100%", // Full width within the grid item
                                  height: "250px", // Auto height to fit content
                                  display: "flex",
                                  flexDirection: "column",
                                  transition: "0.3s",
                                  "&:hover": {
                                    transform: "scale(1.05)", // Zoom effect on hover
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                  },
                                }}
                              >
                                <CardMedia
                                  component="img"
                                  height="140" // Fixed height for image
                                  image={course.image}
                                  alt={course.title}
                                  sx={{
                                    objectFit: "cover",
                                    borderBottom: "2px solid black",
                                  }}
                                />
                                <CardContent
                                  sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    padding: 2, // Responsive padding
                                    height: "100%",
                                  }}
                                >
                                  <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="div"
                                    sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
                                  >
                                    {course.title}
                                  </Typography>
                                  {/* <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              flex: 1,
                              textAlign: "left",
                              fontSize: { xs: "0.875rem", sm: "1rem" },
                            }} // Responsive font size
                          >
                            {course.description}
                          </Typography> */}
                                </CardContent>
                              </Card>
                            </Grid>
                          ))}
                        </Grid>
                      </MDBox>
                    </Card>
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
