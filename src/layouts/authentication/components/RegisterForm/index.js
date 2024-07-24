import { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Register() {
  // State for form fields
  const [formValues, setFormValues] = useState({
    city: "",
    campus: "",
    course: "",
    classPreference: "",
    fullName: "",
    email: "",
    cnic: "",
    fatherName: "",
    phone: "",
    fatherCnic: "",
    dob: "",
    gender: "",
    address: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <DashboardLayout>
      <MDBox mt={1} mb={3}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2}>
                <MDTypography variant="h2">Registration Form</MDTypography>
              </MDBox>
              <MDBox pt={1} pb={3} px={3} mb={5}>
                <MDBox component="form" role="form">
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Select city</InputLabel>
                        <Select name="city" value={formValues.city} onChange={handleInputChange}>
                          <MenuItem value="Karachi">Karachi</MenuItem>
                          <MenuItem value="Lahore">Lahore</MenuItem>
                          <MenuItem value="Islamabad">Islamabad</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Select campus</InputLabel>
                        <Select
                          name="campus"
                          value={formValues.campus}
                          onChange={handleInputChange}
                        >
                          <MenuItem value="SMIT">SMIT</MenuItem>
                          <MenuItem value="CHS">CHS</MenuItem>
                          <MenuItem value="Korangi">Korangi</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Select course or event</InputLabel>
                        <Select
                          name="course"
                          value={formValues.course}
                          onChange={handleInputChange}
                        >
                          <MenuItem value="Software Engineering">Software Engineering</MenuItem>
                          <MenuItem value="Data Science">Data Science</MenuItem>
                          <MenuItem value="Web Development">Web Development</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Select class preference</InputLabel>
                        <Select
                          name="classPreference"
                          value={formValues.classPreference}
                          onChange={handleInputChange}
                        >
                          <MenuItem value="Morning">Morning</MenuItem>
                          <MenuItem value="Evening">Evening</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Full name"
                        name="fullName"
                        value={formValues.fullName}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        value={formValues.email}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="CNIC"
                        name="cnic"
                        value={formValues.cnic}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Father's CNIC (optional)"
                        name="fatherCnic"
                        value={formValues.fatherCnic}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Father's name"
                        name="fatherName"
                        value={formValues.fatherName}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Date of birth"
                        name="dob"
                        type="date"
                        value={formValues.dob}
                        onChange={handleInputChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Select gender</InputLabel>
                        <Select
                          name="gender"
                          value={formValues.gender}
                          onChange={handleInputChange}
                        >
                          <MenuItem value="Male">Male</MenuItem>
                          <MenuItem value="Female">Female</MenuItem>
                          <MenuItem value="Other">Other</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Address"
                        name="address"
                        value={formValues.address}
                        onChange={handleInputChange}
                      />
                    </Grid>
                  </Grid>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Register;