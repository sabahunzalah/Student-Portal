import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function ComplexStatisticsCard({
  color,
  icon,
  count,
  countColor,
  title,
  percentage,
  amount,
  label,
}) {
  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={1}>
        <MDBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="3rem"
          height="3rem"
        >
          <img src={icon} alt="icon" style={{ width: "100%", height: "100%" }} />
        </MDBox>
        <MDBox textAlign="right" lineHeight={1.25}>
          <MDTypography variant="h5" color={countColor ? countColor : "info"} letterSpacing={2}>
            {count}
          </MDTypography>
        </MDBox>
      </MDBox>
      <Divider />
      <MDBox px={2}>
        <MDTypography component="p" variant="button" color="text" display="flex">
          <MDTypography component="span" variant="h2" fontWeight="bold" color={percentage.color}>
            {amount}
          </MDTypography>
          <MDTypography variant="h2" fontWeight="bold" color="inherit">
            &nbsp; / {label}
          </MDTypography>
        </MDTypography>
      </MDBox>
    </Card>
  );
}

ComplexStatisticsCard.defaultProps = {
  color: "info",
  percentage: {
    color: "success",
    text: "",
    label: "",
  },
};

ComplexStatisticsCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
  icon: PropTypes.string.isRequired, // Change to string for image src
  countColor: PropTypes.string, // New prop for count text color
};

export default ComplexStatisticsCard;
