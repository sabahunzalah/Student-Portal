import React from "react";
import PropTypes from "prop-types";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function AssignmentsAndExams({ data }) {
  return (
    <MDBox>
      <MDTypography variant="h6">Assignment and Exam Grades</MDTypography>
      {data.map((grade, index) => (
        <MDTypography key={index}>{`${grade.name}: ${grade.grade}`}</MDTypography>
      ))}
    </MDBox>
  );
}

AssignmentsAndExams.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      grade: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default AssignmentsAndExams;
