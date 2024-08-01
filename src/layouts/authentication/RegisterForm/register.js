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
import { Box, Container } from "@mui/material";
import PageLayout from "examples/LayoutContainers/PageLayout";
import Color from "color";
import "./RegisterForm.css";
import syalaniImage from "assets/images/logo-smit-removebg-preview.png";
import MDButton from "components/MDButton";

function RegisterForm() {
  const greenColor = Color("#82bd3e");
  const blueColor = Color("#127168");
  const mixedColor = greenColor.mix(blueColor, 0.5);
  const newGradient = `linear-gradient(180deg, ${mixedColor.hex()}, #FFF)`;
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
    <PageLayout>
      {/* <Box
        height="100%"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundImage: newGradient,
        }}
      > */}
      <Card
        sx={{
          border: "2px solid red",
          width: "100%",
          padding: 4,
          backgroundImage: newGradient,
          backgroundSize: "100% 30% ",
          backgroundRepeat: "no-repeat",
        }}
      >
        <MDBox p={1} display="flex" justifyContent="center">
          <img src={syalaniImage} style={{ width: "280px", height: "70px" }} />
        </MDBox>
        <MDBox display="flex" justifyContent="center" gap="30px">
          {/* <MDBox color="#127168">
            <MDButton
              variant="gradient"
              fullWidth
              color="success"
              size="large"
              // style={{ border: "2px solid #127168" }}
            >
              sign up
            </MDButton>
          </MDBox> */}
          <MDTypography variant="h2" sx={{ color: "#127168", fontFamily: "inherit" }}>
            SMIT - Registration Form
          </MDTypography>
          {/* <MDBox color="#127168">
            <MDButton
              variant="gradient"
              fullWidth
              color="success"
              size="large"
              // style={{ border: "2px solid #127168" }}
            >
              sign up
            </MDButton>
          </MDBox> */}
        </MDBox>
        <MDBox display="flex" justifyContent="center">
          <MDTypography variant="body2" sx={{ color: "black", fontFamily: "inherit" }}>
            Services-Education-Registration
          </MDTypography>
        </MDBox>
        <MDBox pt={5} pb={4} px={20}>
          <MDBox component="form" role="form" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <InputLabel className="form-label">Select city</InputLabel>
                <FormControl fullWidth>
                  <Select
                    displayEmpty
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    name="city"
                    value={formValues.city}
                    onChange={handleInputChange}
                    sx={{ height: 50, border: "2px solid red" }}
                    className="inp"
                  >
                    <MenuItem value="" disabled>
                      Select City
                    </MenuItem>
                    <MenuItem value="Karachi">Karachi</MenuItem>
                    <MenuItem value="Lahore">Lahore</MenuItem>
                    <MenuItem value="Islamabad">Islamabad</MenuItem>
                    <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                    <MenuItem value="Bahadurabad">Bahadurabad</MenuItem>
                    <MenuItem value="Multan">Multan</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel className="form-label">Select campus</InputLabel>
                <FormControl fullWidth>
                  <Select
                    displayEmpty
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    name="campus"
                    value={formValues.campus}
                    onChange={handleInputChange}
                    sx={{ height: 50 }}
                    className="inp"
                    placeholder="Select Campus"
                  >
                    <MenuItem value="" disabled>
                      Select Campus
                    </MenuItem>
                    <MenuItem value="Bahadurabad">Bahadurabad</MenuItem>
                    <MenuItem value="Gulshan">Gulshan</MenuItem>
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
                    sx={{ height: 50 }}
                    className="inp"
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
                    sx={{ height: 50 }}
                    className="inp"
                  >
                    <MenuItem value="Select class preference">Select class preference</MenuItem>
                    <MenuItem value="Weekdays (Monday to Friday)">
                      Weekdays (Monday to Friday)
                    </MenuItem>
                    <MenuItem value="Weekend (Saturday , Sunday)">
                      Weekend (Saturday , Sunday)
                    </MenuItem>
                    <MenuItem value="Both">Both</MenuItem>
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
                  className="inp"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel className="form-label">Father&apos;s Name</InputLabel>

                <TextField
                  fullWidth
                  name="fatherName"
                  value={formValues.fatherName}
                  onChange={handleInputChange}
                  className="inp"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel className="form-label">Email</InputLabel>
                <TextField
                  fullWidth
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className="inp"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel className="form-label">Phone Number</InputLabel>
                <TextField
                  fullWidth
                  name="phone"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  className="inp"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel className="form-label">CNIC</InputLabel>
                <TextField
                  fullWidth
                  name="cnic"
                  value={formValues.cnic}
                  onChange={handleInputChange}
                  className="inp"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel className="form-label">Father&apos;s CNIC</InputLabel>

                <TextField
                  fullWidth
                  name="fatherCnic"
                  value={formValues.fatherCnic}
                  onChange={handleInputChange}
                  className="inp"
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
                  className="inp"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel className="form-label">Last Qualification</InputLabel>
                <TextField
                  fullWidth
                  name="lastQualification"
                  value={formValues.lastQualification}
                  onChange={handleInputChange}
                  className="inp"
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel className="form-label">Address</InputLabel>
                <TextField
                  fullWidth
                  name="address"
                  value={formValues.address}
                  onChange={handleInputChange}
                  className="inp"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel className="form-label">Select gender</InputLabel>
                <FormControl fullWidth>
                  <Select
                    name="gender"
                    value={formValues.gender}
                    onChange={handleInputChange}
                    sx={{ height: 50 }}
                    className="inp"
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
              <Grid item xs={12}>
                <InputLabel className="form-label">Upload your picture</InputLabel>
                <TextField
                  fullWidth
                  name="picture"
                  type="file"
                  inputProps={{ accept: "image/*" }}
                  onChange={handleInputChange}
                  className="inp"
                />
              </Grid>
              <Grid item xs={12}>
                <MDBox mt={4} mb={1}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Register
                  </Button>
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>
      </Card>
      {/* </Box> */}
    </PageLayout>
  );
}

export default RegisterForm;
