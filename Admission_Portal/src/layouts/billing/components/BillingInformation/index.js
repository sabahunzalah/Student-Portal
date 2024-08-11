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
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  return (
    <Card id="student-fees-detail">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Student Fees Detail
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="Ayesha Khan"
            studentId="ST-202401"
            email="ayesha.khan@example.com"
            feesPaid="Rs 1023"
          />
          <Bill
            name="Ahmed Ali"
            studentId="ST-202402"
            email="ahmed.ali@example.com"
            feesPaid="Rs 1023"
          />
          <Bill
            name="Sara Malik"
            studentId="ST-202403"
            email="sara.malik@example.com"
            feesPaid="Rs 1023"
            noGutter
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;
