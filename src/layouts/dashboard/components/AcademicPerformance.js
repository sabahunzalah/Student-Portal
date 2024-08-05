import React from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function AcademicPerformance() {
  return (
    <MDBox>
      <MDTypography variant="h6" fontWeight="medium">
        Academic Performance
      </MDTypography>
      <MDTypography variant="body2" color="text">
        Grades for completed courses: A, B+, ...
      </MDTypography>
      <MDTypography variant="body2" color="text">
        GPA: 3.8
      </MDTypography>
    </MDBox>
  );
}

export default AcademicPerformance;
