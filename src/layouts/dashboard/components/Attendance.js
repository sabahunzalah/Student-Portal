import React from "react";
import PropTypes from "prop-types";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function Attendance({ data }) {
  return (
    <MDBox>
      <MDTypography variant="h6">Weekly Attendance</MDTypography>
      {data.map((week, index) => (
        <MDTypography key={index}>{`${week.week}: ${week.attendance}%`}</MDTypography>
      ))}
    </MDBox>
  );
}

Attendance.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      week: PropTypes.string.isRequired,
      attendance: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Attendance;
