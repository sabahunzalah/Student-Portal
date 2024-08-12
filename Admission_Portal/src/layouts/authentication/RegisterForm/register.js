import { useState, useEffect } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import { Grid, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import { Box, Container } from "@mui/material";
import PageLayout from "examples/LayoutContainers/PageLayout";
import Color from "color";
import "./RegisterForm.css";
// import syalaniImage from "assets/images/logo-smit-removebg-preview.png";
import syalaniImage from "../../../assets/images/logo-smit-removebg-preview.png";
import MDButton from "components/MDButton";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { PhotoCamera } from "@mui/icons-material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import IdCard from "./IdCard";

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

  const [formErrors, setFormErrors] = useState({});
  const [currentView, setCurrentView] = useState("registration");
  const [submittedForms, setSubmittedForms] = useState([]); // State to hold all submitted form data
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const validate = () => {
    const errors = {};
    if (!formValues.fullName) errors.fullName = "Full Name is required";
    if (!formValues.email || !/\S+@\S+\.\S+/.test(formValues.email))
      errors.email = "Valid Email is required";
    if (!formValues.phone || !/^\+92\d{10}$/.test(formValues.phone))
      errors.phone = "Valid Phone Number is required";
    if (!formValues.cnic || !/^\d{5}-\d{7}-\d{1}$/.test(formValues.cnic))
      errors.cnic = "Valid CNIC is required";
    if (!formValues.fatherCnic || !/^\d{5}-\d{7}-\d{1}$/.test(formValues.fatherCnic))
      errors.fatherCnic = "Valid Father's CNIC is required";
    if (!formValues.dob) errors.dob = "Date of Birth is required";
    if (!formValues.address) errors.address = "Address is required";
    if (!formValues.lastQualification) errors.lastQualification = "Last Qualification is required";
    if (!formValues.gender) errors.gender = "Gender is required";
    if (!formValues.hasLaptop) errors.hasLaptop = "Laptop status is required";
    if (formValues.picture && formValues.picture.size > 1048576)
      errors.picture = "File size must be less than 1MB";
    if (formValues.picture && !["image/jpeg", "image/png"].includes(formValues.picture.type))
      errors.picture = "Invalid file type. Only jpg, jpeg, png are allowed";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedForms((prevSubmittedForms) => [...prevSubmittedForms, formValues]);
      setShowIdCard(true); //show id card
      // console.log("Submitted Forms:", formValues);


      setFormValues({
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


      setImage(null);
      setFormErrors({});
      setFormError({});
      setFormError({});
    }
  };


  useEffect(() => {
    console.log("Updated submittedForms:", submittedForms); // show form data in console
  }, [submittedForms]);
  const [image, setImage] = useState(null);
  const [formError, setFormError] = useState({});
  const [showIdCard, setShowIdCard] = useState(false); // New state to control ID card visibility

  const handleInputChangeImg = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setFormError({ picture: "Please upload a valid image file." });
        return;
      }
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setFormValues((prevValues) => ({
        ...prevValues,
        picture: file,
      }));
      setFormError({});
    }
  };

  return (
    <DashboardLayout>
      <Card
        sx={{
          backgroundImage: newGradient,
          backgroundSize: "100% 30% ",
          backgroundRepeat: "no-repeat",
        }}
      >
        <MDBox p={1} pt={7} display="flex" justifyContent="center">
          <img src={syalaniImage} style={{ width: "280px", height: "70px" }} />
        </MDBox>
        <MDBox display="flex" justifyContent="center" gap="30px">
          <MDTypography variant="h2" sx={{ color: "#127168", fontFamily: "inherit" }}>
            SMIT - Registration Form
          </MDTypography>
        </MDBox>
        <MDBox display="flex" justifyContent="center" pb={2}>
          <MDTypography variant="body1" sx={{ color: "black", fontFamily: "inherit" }}>
            Services-Education-Registration
          </MDTypography>
        </MDBox>
        <MDBox display="flex" justifyContent="center" gap={0.4}>
          <MDBox>
            <MDButton
              fullWidth
              size="small"
              className="btn"
              style={{ color: "black" }}
              variant="link"
              onClick={() => setCurrentView("registration")}
            >
              Registration
            </MDButton>
          </MDBox>
          <MDBox>
            <MDButton
              fullWidth
              size="small"
              className="btn"
              style={{ color: "black" }}
              variant="link"
              onClick={() => setCurrentView("downloadId")}
            >
              Download ID card
            </MDButton>
          </MDBox>
          <MDBox>
            <MDButton
              fullWidth
              size="small"
              className="btn"
              style={{ color: "black" }}
              variant="link"
              onClick={() => setCurrentView("results")}
            >
              Results
            </MDButton>
          </MDBox>
        </MDBox>

        <MDBox pt={5} pb={4} px={6}>
          {currentView === "registration" && (
            <MDBox component="form" role="form" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6}>
                  <InputLabel className="form-label">Select city</InputLabel>
                  <FormControl fullWidth>
                    <Select
                      displayEmpty
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="city"
                      value={formValues.city}
                      onChange={handleInputChange}
                      sx={{ height: 50 }}
                      className="inp"
                      IconComponent={KeyboardArrowDownOutlinedIcon}
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

                <Grid item xs={12} sm={12} md={6}>
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
                    >
                      <MenuItem value="" disabled>
                        Select Campus
                      </MenuItem>
                      <MenuItem value="Bahadurabad">Bahadurabad</MenuItem>
                      <MenuItem value="Gulshan">Gulshan</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <InputLabel className="form-label">Select course or event</InputLabel>
                  <FormControl fullWidth>
                    <Select
                      displayEmpty
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      name="course"
                      value={formValues.course}
                      onChange={handleInputChange}
                      sx={{ height: 50 }}
                      className="inp"
                    >
                      <MenuItem value="" disabled>
                        Select Course
                      </MenuItem>
                      <MenuItem value="Artifical Intelligence">Artifical Intelligence</MenuItem>
                      <MenuItem value="Graphic Designing">Graphic Designing</MenuItem>
                      <MenuItem value="UI/UX">UI/UX </MenuItem>
                      <MenuItem value="Flutter">Flutter</MenuItem>
                      <MenuItem value="Data Science">Data Science</MenuItem>
                      <MenuItem value="Mern Stack Development">Mern Stack Development</MenuItem>
                      <MenuItem value="Software Quality Assurance">
                        Software Quality Assurance
                      </MenuItem>
                      <MenuItem value="SEO">SEO</MenuItem>
                      <MenuItem value="Php/Laravel">Php/Laravel</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <InputLabel className="form-label">Select class preference</InputLabel>
                  <FormControl fullWidth>
                    <Select
                      displayEmpty
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      name="classPreference"
                      value={formValues.classPreference}
                      onChange={handleInputChange}
                      sx={{ height: 50 }}
                      className="inp"
                    >
                      <MenuItem value="" disabled>
                        Select class preference
                      </MenuItem>
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
                <Grid item xs={12} sm={12} md={6}>
                  <InputLabel className="form-label">Full Name</InputLabel>
                  <TextField
                    fullWidth
                    name="fullName"
                    value={formValues.fullName}
                    onChange={handleInputChange}
                    className="inp"
                    placeholder="Full Name"
                    error={!!formErrors.fullName}
                    helperText={formErrors.fullName}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <InputLabel className="form-label">Father&apos;s Name</InputLabel>
                  <TextField
                    fullWidth
                    name="fatherName"
                    value={formValues.fatherName}
                    onChange={handleInputChange}
                    className="inp"
                    placeholder="Father Name"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <InputLabel className="form-label">Email</InputLabel>
                  <TextField
                    fullWidth
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    className="inp"
                    placeholder="Email"
                    error={!!formErrors.email}
                    helperText={formErrors.email}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <InputLabel className="form-label">Phone Number</InputLabel>
                  <TextField
                    fullWidth
                    name="phone"
                    value={formValues.phone}
                    onChange={handleInputChange}
                    className="inp"
                    placeholder="+92XXXXXXXXXX"
                    error={!!formErrors.phone}
                    helperText={formErrors.phone}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <InputLabel className="form-label">CNIC</InputLabel>
                  <TextField
                    fullWidth
                    name="cnic"
                    value={formValues.cnic}
                    onChange={handleInputChange}
                    className="inp"
                    placeholder="XXXXX-XXXXXXXX-X"
                    error={!!formErrors.cnic}
                    helperText={formErrors.cnic}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <InputLabel className="form-label">Father&apos;s CNIC</InputLabel>
                  <TextField
                    fullWidth
                    name="fatherCnic"
                    value={formValues.fatherCnic}
                    onChange={handleInputChange}
                    className="inp"
                    placeholder="XXXXX-XXXXXXXX-X"
                    error={!!formErrors.fatherCnic}
                    helperText={formErrors.fatherCnic}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
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
                    error={!!formErrors.dob}
                    helperText={formErrors.dob}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <InputLabel className="form-label">Last Qualification</InputLabel>
                  <TextField
                    fullWidth
                    name="lastQualification"
                    value={formValues.lastQualification}
                    onChange={handleInputChange}
                    className="inp"
                    placeholder="Last Qualification"
                    error={!!formErrors.lastQualification}
                    helperText={formErrors.lastQualification}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <InputLabel className="form-label">Address</InputLabel>
                  <TextField
                    fullWidth
                    name="address"
                    value={formValues.address}
                    onChange={handleInputChange}
                    className="inp"
                    placeholder="Address"
                    error={!!formErrors.address}
                    helperText={formErrors.address}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel className="form-label">Select Gender</InputLabel>
                  <FormControl fullWidth>
                    <Select
                      displayEmpty
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      name="gender"
                      value={formValues.gender}
                      onChange={handleInputChange}
                      sx={{ height: 50 }}
                      className="inp"
                    >
                      <MenuItem value="" disabled>
                        Select Gender
                      </MenuItem>
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
                    {formErrors.hasLaptop && (
                      <MDTypography variant="body2" color="error">
                        {formErrors.hasLaptop}
                      </MDTypography>
                    )}
                  </FormControl>
                </Grid>

                <Grid container spacing={0} style={{ margin: 0 }}>
                  <Grid item xs={12} sm={6} md={4} style={{ padding: 0 }}>
                    <InputLabel className="form-label">Upload your picture</InputLabel>
                    <div className="upload-container">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleInputChangeImg}
                        id="file-input"
                        style={{ display: "none" }}
                      />
                      <label
                        htmlFor="file-input"
                        style={{ display: "block", width: "100%", height: "100%" }}
                      >
                        {!image ? (
                          <>
                            <IconButton component="span" className="icon">
                              <PhotoCamera />
                            </IconButton>
                            <div className="upload-placeholder">Upload Photo</div>
                          </>
                        ) : (
                          <img src={image} alt="Preview" className="image-preview" />
                        )}
                      </label>
                    </div>
                    {formError.picture && <div className="form-error">{formError.picture}</div>}
                  </Grid>

                  <Grid item xs={12} sm={6} md={8} style={{ padding: 0 }}>
                    <MDTypography variant="body1">
                      Please ensure that your photo is clear and recent. This photo will be used for
                      your identification purposes. Ensure the photo meets the following criteria:
                      <ul>
                        <li>With white or blue background</li>
                        <li>File size must be less than 1MB</li>
                        <li>File type: jpg, jpeg, png</li>
                        <li>Upload your recent passport size picture</li>
                        <li>Your face should be clearly visible without any glasses</li>
                      </ul>
                    </MDTypography>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <hr style={{ margin: "20px 0", borderColor: "#126FB3" }} />
                  <ul style={{ paddingLeft: "20px", listStyleType: "numbered" }}>
                    <li>
                      I hereby, solemnly declare that the data and facts mentioned herein are true
                      and correct to the best of my knowledge. Further, I will abide by all the
                      established and future regulations and policies of SMIT
                    </li>
                    <li>
                      I hereby accept the responsibilities of good conduct and guarantee that I will
                      not be involved in any other activity, political or ethical, but learning
                      during my stay in the program.
                    </li>
                    <li>Defiance will render my admission canceled at any point in time.</li>
                    <li>
                      Upon completion, of the course, I will complete the required project by SMIT.
                    </li>
                    <li>
                      It&apos;s mandatory for female students to wear abaya/hijab in the class
                    </li>
                  </ul>
                </Grid>
                <Grid item xs={12}>
                  <MDBox mb={1} display="flex" justifyContent="center">
                    <Button
                      type="submit"
                      variant="text"
                      color="primary"
                      fullWidth
                      style={{
                        color: "white",
                        backgroundColor: "#127168",
                        fontSize: "15px",
                      }}
                    >
                      Submit
                    </Button>
                  </MDBox>
                </Grid>
              </Grid>
            </MDBox>
          )}
          {currentView === "downloadId" && (
            <MDBox>
              <MDBox display="flex" justifyContent="center">
                <Grid item xs={12} sm={12} md={6}>
                  <InputLabel>CNIC(Which you provided during the submission)</InputLabel>
                  <TextField
                    name="cnic"
                    value={formValues.cnic}
                    onChange={handleInputChange}
                    className="downloadinp"
                    placeholder="XXXXX-XXXXXXXX-X"
                    sx={{
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  />
                </Grid>
              </MDBox>
              <MDBox display="flex" justifyContent="center">
                <Grid item xs={12} sm={12} md={6}>
                  <Button
                    type="submit"
                    variant="text"
                    color="primary"
                    onClick={() => setShowIdCard(true)}
                    fullWidth
                    style={{
                      color: "white",
                      backgroundColor: "#127168",
                      fontSize: "15px",
                      width: "400px",
                      marginBottom: "150px",
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </MDBox>
              {showIdCard && <IdCard formValues={formValues} />}
            </MDBox>
          )}

          {currentView === "results" && (
            <MDBox pt={1} pb={17.2} px={1}>
              <MDBox display="flex" justifyContent="center">
                <Grid item xs={12} sm={12} md={12}>
                  <InputLabel>Roll Number</InputLabel>
                  <TextField
                    fullWidth
                    name="rollnumber"
                    value={formValues.rollnumber}
                    onChange={handleInputChange}
                    className="downloadinp"
                    placeholder="Roll Number"
                    sx={{
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  />
                </Grid>
              </MDBox>
              <MDBox display="flex" justifyContent="center">
                <Grid item xs={12} sm={12} md={6}>
                  <Button
                    type="submit"
                    variant="text"
                    color="primary"
                    fullWidth
                    style={{
                      color: "white",
                      backgroundColor: "#127168",
                      fontSize: "15px",
                      width: "400px",
                    }}
                  >
                    Search
                  </Button>
                </Grid>
              </MDBox>
            </MDBox>
          )}
        </MDBox>
      </Card>
    </DashboardLayout>
  );
}

export default RegisterForm;
