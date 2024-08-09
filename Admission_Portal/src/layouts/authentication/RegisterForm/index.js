// import { useState } from "react";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import TextField from "@mui/material/TextField";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Radio from "@mui/material/Radio";
// import Button from "@mui/material/Button";
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import BasicLayout from "layouts/authentication/components/BasicLayout";
// import bgImage from "assets/images/pngtree-computer-lab-with-people-background-image-image_15717583.jpg";
// // import "./RegisterForm.css";
// import { Box } from "@mui/material";

// function Register() {
//   const [formValues, setFormValues] = useState({
//     city: "",
//     campus: "",
//     course: "",
//     classPreference: "",
//     fullName: "",
//     email: "",
//     cnic: "",
//     fatherName: "",
//     phone: "",
//     fatherCnic: "",
//     dob: "",
//     gender: "",
//     address: "",
//     lastQualification: "",
//     hasLaptop: "",
//     picture: null,
//   });

//   const handleInputChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setFormValues({
//       ...formValues,
//       [name]: type === "file" ? files[0] : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formValues);
//   };

//   return (
//     <Grid item xs={12} lg={12}>
//       <Box style={{ border: "2px solid green" }}>
//         <MDBox p={4} className="card-header" style={{ border: "2px solid black" }}>
//           <MDTypography variant="h2" sx={{ color: "#127168", fontFamily: "inherit" }}>
//             {" "}
//             SMIT - Registration Form
//           </MDTypography>
//         </MDBox>
//         <MDBox pt={3} pb={4} px={4}>
//           <MDBox component="form" role="form" onSubmit={handleSubmit}>
//             <Grid container spacing={3}>
//               <Grid item xs={12} sm={6}>
//                 <InputLabel className="form-label">Select city</InputLabel>
//                 <FormControl fullWidth className="inp">
//                   <Select
//                     name="city"
//                     value={formValues.city}
//                     onChange={handleInputChange}
//                     sx={{ height: 50 }}
//                     placeholder="Select City"
//                   >
//                     <MenuItem value="Select City">Select City</MenuItem>
//                     <MenuItem value="Karachi">Karachi</MenuItem>
//                     <MenuItem value="Lahore">Lahore</MenuItem>
//                     <MenuItem value="Islamabad">Islamabad</MenuItem>
//                     <MenuItem value="Hyderabad">Hyderabad</MenuItem>
//                     <MenuItem value="Bahadurabad">Bahadurabad</MenuItem>
//                     <MenuItem value="Multan">Multan</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <InputLabel className="form-label">Select campus</InputLabel>
//                 <FormControl fullWidth>
//                   <Select
//                     name="campus"
//                     value={formValues.campus}
//                     onChange={handleInputChange}
//                     sx={{ height: 50 }}
//                   >
//                     <MenuItem value="Select City">Select City</MenuItem>
//                     <MenuItem value="Bahadurabad">Bahadurabad</MenuItem>
//                     <MenuItem value="Gulshan">Gulshan</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <InputLabel className="form-label">Select course or event</InputLabel>
//                 <FormControl fullWidth>
//                   <Select
//                     name="course"
//                     value={formValues.course}
//                     onChange={handleInputChange}
//                     sx={{ height: 50 }}
//                   >
//                     <MenuItem value="Software Engineering">Software Engineering</MenuItem>
//                     <MenuItem value="Data Science">Data Science</MenuItem>
//                     <MenuItem value="Web Development">Web Development</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <InputLabel className="form-label">Select class preference</InputLabel>
//                 <FormControl fullWidth>
//                   <Select
//                     name="classPreference"
//                     value={formValues.classPreference}
//                     onChange={handleInputChange}
//                     sx={{ height: 50 }}
//                   >
//                     <MenuItem value="Select class preference">Select class preference</MenuItem>
//                     <MenuItem value="Weekdays (Monday to Friday)">
//                       Weekdays (Monday to Friday)
//                     </MenuItem>
//                     <MenuItem value="Weekend (Saturday , Sunday)">
//                       Weekend (Saturday , Sunday)
//                     </MenuItem>
//                     <MenuItem value="Both">Both</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <InputLabel className="form-label">Full Name</InputLabel>
//                 <TextField
//                   fullWidth
//                   name="fullName"
//                   value={formValues.fullName}
//                   onChange={handleInputChange}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 {/* <InputLabel className="form-label">Father's Name</InputLabel> */}
//                 <TextField
//                   fullWidth
//                   name="fatherName"
//                   value={formValues.fatherName}
//                   onChange={handleInputChange}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <InputLabel className="form-label">Email</InputLabel>
//                 <TextField
//                   fullWidth
//                   name="email"
//                   value={formValues.email}
//                   onChange={handleInputChange}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <InputLabel className="form-label">Phone Number</InputLabel>
//                 <TextField
//                   fullWidth
//                   name="phone"
//                   value={formValues.phone}
//                   onChange={handleInputChange}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <InputLabel className="form-label">CNIC</InputLabel>
//                 <TextField
//                   fullWidth
//                   name="cnic"
//                   value={formValues.cnic}
//                   onChange={handleInputChange}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 {/* <InputLabel className="form-label">Father's CNIC (optional)</InputLabel> */}
//                 <TextField
//                   fullWidth
//                   name="fatherCnic"
//                   value={formValues.fatherCnic}
//                   onChange={handleInputChange}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <InputLabel className="form-label">Date of birth</InputLabel>
//                 <TextField
//                   fullWidth
//                   name="dob"
//                   type="date"
//                   value={formValues.dob}
//                   onChange={handleInputChange}
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <InputLabel className="form-label">Last Qualification</InputLabel>
//                 <TextField
//                   fullWidth
//                   name="lastQualification"
//                   value={formValues.lastQualification}
//                   onChange={handleInputChange}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <InputLabel className="form-label">Address</InputLabel>
//                 <TextField
//                   fullWidth
//                   name="address"
//                   value={formValues.address}
//                   onChange={handleInputChange}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <InputLabel className="form-label">Select gender</InputLabel>
//                 <FormControl fullWidth>
//                   <Select
//                     name="gender"
//                     value={formValues.gender}
//                     onChange={handleInputChange}
//                     sx={{ height: 50 }}
//                   >
//                     <MenuItem value="Male">Male</MenuItem>
//                     <MenuItem value="Female">Female</MenuItem>
//                     <MenuItem value="Other">Other</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <InputLabel className="form-label" htmlFor="hasLaptop">
//                   Do you have a laptop?
//                 </InputLabel>
//                 <FormControl component="fieldset">
//                   <RadioGroup
//                     id="hasLaptop"
//                     name="hasLaptop"
//                     value={formValues.hasLaptop}
//                     onChange={handleInputChange}
//                   >
//                     <FormControlLabel control={<Radio />} label="Yes" value="yes" />
//                     <FormControlLabel control={<Radio />} label="No" value="no" />
//                   </RadioGroup>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12}>
//                 <InputLabel className="form-label">Upload your picture</InputLabel>
//                 <TextField
//                   fullWidth
//                   name="picture"
//                   type="file"
//                   inputProps={{ accept: "image/*" }}
//                   onChange={handleInputChange}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <MDBox mt={4} mb={1}>
//                   <Button type="submit" variant="contained" color="primary" fullWidth>
//                     Register
//                   </Button>
//                 </MDBox>
//               </Grid>
//             </Grid>
//           </MDBox>
//         </MDBox>
//       </Box>
//     </Grid>
//   );
// }

// export default Register;
