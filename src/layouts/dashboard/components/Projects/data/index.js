/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// @mui material components
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Images
import studentImage from "assets/studnt.jpeg";

export default function data() {
  const Profile = ({ image, name, course, roll, batch, email, gender, info }) => (
    <MDBox display="flex" alignItems="start" lineHeight={1} py={2}>
      <MDAvatar src={image} name={name} size="xl" />
      <MDBox ml={4}>
        <MDTypography variant="h3" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="body1" color="text">
          {course}
        </MDTypography>
        <MDTypography variant="body1" color="text">
          Roll Number: {roll}
        </MDTypography>
        <MDTypography variant="body1" color="text">
          Batch: {batch}
        </MDTypography>
        <MDTypography variant="body1" color="text">
          Email: {email}
        </MDTypography>
        <MDTypography variant="body1" color="text">
          Gender: {gender}
        </MDTypography>
        <MDTypography variant="body" color="text">
          {info}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const CourseContent = ({ currentCourses, upcomingClasses, schedule, materials }) => (
    <MDBox lineHeight={1} py={2}>
      <MDTypography variant="h3" fontWeight="medium">
        Course Content
      </MDTypography>
      <MDTypography variant="body1" color="text">
        Current Courses: {currentCourses}
      </MDTypography>
      <MDTypography variant="body1" color="text">
        Upcoming Classes: {upcomingClasses}
      </MDTypography>
      <MDTypography variant="body1" color="text">
        Class Schedule: {schedule}
      </MDTypography>
      <MDTypography variant="body1" color="text">
        Course Materials and Resources: {materials}
      </MDTypography>
    </MDBox>
  );

  const AcademicPerformance = ({ grades, gpa }) => (
    <MDBox lineHeight={1} py={1}>
      <MDTypography variant="h3" fontWeight="medium">
        Academic Performance
      </MDTypography>
      <MDTypography variant="body1" color="text">
        Grades for Completed Courses: {grades}
      </MDTypography>
      <MDTypography variant="body1" color="text">
        GPA: {gpa}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      {
        Header: () => <MDTypography variant="h4" fontWeight="medium"></MDTypography>,
        accessor: "profile",
        width: "45%",
        align: "left",
      },
      {
        Header: () => <MDTypography variant="h4" fontWeight="medium"></MDTypography>,
        accessor: "courses",
        width: "30%",
        align: "left",
      },
      {
        Header: () => <MDTypography variant="h4" fontWeight="medium"></MDTypography>,
        accessor: "performance",
        width: "25%",
        align: "left",
      },
    ],

    rows: [
      {
        profile: (
          <Profile
            image={studentImage}
            name="Innovative Souls"
            course="Web and Mobile Development"
            roll="12345"
            batch="0030-10"
            email="innovativesouls5@example.com"
            gender="Female"
            info="Innovative Souls are the dedicated students focusing on modern web and mobile technologies."
          />
        ),
        courses: (
          <CourseContent
            currentCourses="HTML, CSS, JavaScript, React"
            upcomingClasses="Node.js, Express, MongoDB"
            schedule="Mon-Fri, 9 AM - 5 PM"
            materials="Books, PDFs, Online tutorials"
          />
        ),
        performance: <AcademicPerformance grades="A, A-, B+" gpa="3.8" />,
      },
      // Add more rows as needed
    ],
  };
}
