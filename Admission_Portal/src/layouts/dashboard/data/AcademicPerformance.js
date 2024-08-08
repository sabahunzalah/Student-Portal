import React from "react";
import PropTypes from "prop-types";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function AcademicPerformance({ data }) {
  return (
    <MDBox>
      <MDTypography variant="h6">Course Grades</MDTypography>
      {data.map((grade, index) => (
        <MDTypography key={index}>{`${grade.course}: ${grade.grade}`}</MDTypography>
      ))}
    </MDBox>
  );
}

AcademicPerformance.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      course: PropTypes.string.isRequired,
      grade: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default AcademicPerformance;
