import { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import "./RegisterForm.css";

function Register() {
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
    lastQualification: "",
    hasLaptop: "",
    picture: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={4} mb={4}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card className="registration-card">
              <MDBox p={4} className="card-header">
                <MDTypography variant="h2">Registration Form</MDTypography>
              </MDBox>
              <MDBox pt={3} pb={4} px={4}>
                <MDBox component="form" role="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <InputLabel className="form-label">Select city</InputLabel>
                      <FormControl fullWidth className="inp">
                        <Select name="city" value={formValues.city} onChange={handleInputChange}>
                          <MenuItem value="Karachi">Karachi</MenuItem>
                          <MenuItem value="Lahore">Lahore</MenuItem>
                          <MenuItem value="Islamabad">Islamabad</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputLabel className="form-label">Select campus</InputLabel>
                      <FormControl fullWidth>
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
                      <InputLabel className="form-label">Select course or event</InputLabel>
                      <FormControl fullWidth>
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
                      <InputLabel className="form-label">Select class preference</InputLabel>
                      <FormControl fullWidth>
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
                    <Grid item xs={12} sm={6}>
                      <InputLabel className="form-label">Full Name</InputLabel>
                      <TextField
                        fullWidth
                        name="fullName"
                        value={formValues.fullName}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputLabel className="form-label">Father`&apos;` Name</InputLabel>
                      <TextField
                        fullWidth
                        name="fatherName"
                        value={formValues.fatherName}
                        onChange={handleInputChange}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <InputLabel className="form-label">Email</InputLabel>
                      <TextField
                        fullWidth
                        name="email"
                        value={formValues.email}
                        onChange={handleInputChange}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <InputLabel className="form-label">Phone Number</InputLabel>
                      <TextField
                        fullWidth
                        name="phone"
                        value={formValues.phone}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputLabel className="form-label">CNIC</InputLabel>
                      <TextField
                        fullWidth
                        name="cnic"
                        value={formValues.cnic}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputLabel className="form-label">
                        Father `&apos;` CNIC (optional)
                      </InputLabel>
                      <TextField
                        fullWidth
                        name="fatherCnic"
                        value={formValues.fatherCnic}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputLabel className="form-label">Date of birth</InputLabel>
                      <TextField
                        fullWidth
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
                      <InputLabel className="form-label">Last Qualification</InputLabel>
                      <TextField
                        fullWidth
                        name="lastQualification"
                        value={formValues.lastQualification}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <InputLabel className="form-label">Address</InputLabel>
                      <TextField
                        fullWidth
                        name="address"
                        value={formValues.address}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputLabel className="form-label">Select gender</InputLabel>
                      <FormControl fullWidth>
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

                    <Grid item xs={12} sm={6}>
                      <InputLabel className="form-label" htmlFor="hasLaptop">
                        Do you have a laptop?
                      </InputLabel>
                      <FormControl component="fieldset">
                        <RadioGroup
                          id="hasLaptop"
                          name="hasLaptop"
                          value={formValues.hasLaptop}
                          onChange={handleInputChange}
                        >
                          <FormControlLabel control={<Radio />} label="Yes" value="yes" />
                          <FormControlLabel control={<Radio />} label="No" value="no" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} className="photo-upload-section">
                      <InputLabel className="form-label">Upload Picture</InputLabel>
                      <div className="photo-upload">
                        <input
                          type="file"
                          name="picture"
                          id="picture"
                          onChange={handleInputChange}
                          className="file-input"
                        />
                        <label htmlFor="picture" className="upload-button">
                          <span>Choose File</span>
                        </label>
                        {formValues.picture && (
                          <img
                            src={URL.createObjectURL(formValues.picture)}
                            alt="Uploaded"
                            className="photo-preview"
                          />
                        )}
                      </div>
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        className="submit-button"
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Register;
