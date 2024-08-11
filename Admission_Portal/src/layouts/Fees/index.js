import MDBox from 'components/MDBox'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import React from 'react'

const Fees = () => {
  return (
    <DashboardLayout>
    <MDBox
      sx={{
        border: "2px solid green",
        borderRadius: "10px",
        backgroundColor: "#ececec",
        marginTop: 1,
        padding: 2,
        // backgroundImage: newGradient,
        // backgroundSize: "100% 100%",
        // backgroundRepeat: "no-repeat",
      }}
    ></MDBox>
  </DashboardLayout>
  )
}

export default Fees