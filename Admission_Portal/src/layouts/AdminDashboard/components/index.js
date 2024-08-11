import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import gif from "../../../assets/images/gif-bg.gif";

function BgCardMain() {
  const handleClick = () => {
    // Handle the click event here
    alert("Mearn Stack clicked!");
  };
  return (
    <Card>
      <MDBox
        display="flex"
        p={3}
        sx={{
          backgroundImage: `url(${gif})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          position: "relative",
        }}
      >
        <MDBox
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "80%",
            width: "80%",
          }}
        >
          <Grid
            container
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ height: "100%" }}
          >
            <Grid item xs={12} md={12} lg={12} sx={{ height: "100%" }}>
              <Card
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  height: "100%",
                }}
              >
                <MDBox display="flex" alignItems="flex-start" justifyContent="flex-start">
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      lg={12}
                      style={{
                        display: "flex",
                        justifyContent: "flex start",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      {/* <Projects /> */}
                      <MDTypography
                        sx={{
                          height: 50,
                          width: 50,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "2rem",
                        }}
                      >
                        👋
                      </MDTypography>
                      <p
                        style={{
                          color: "#003060",
                          fontSize: "2em",
                          fontWeight: "bold",
                          fontFamily: "roboto",
                          letterSpacing: 2,
                        }}
                      >
                        Faiza Aziz Khan!
                      </p>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      lg={12}
                      style={{
                        display: "flex",
                        justifyContent: "flex start",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <p
                        style={{
                          color: "#2d2d2d",
                          fontSize: "1.5em",
                          fontWeight: "900",
                          fontFamily: "roboto",
                          letterSpacing: 1,
                        }}
                      >
                        Courses:
                      </p>
                      {/* <Projects /> */}
                      <MDTypography
                        onClick={handleClick}
                        style={{
                            color: "#FFFFFF",
                            fontSize: "25px",
                            fontWeight: "800",
                            fontFamily: "roboto",
                            letterSpacing: 1,
                            backgroundColor:"#003060",
                            border: "1px solid transparent",
                            borderRadius: "5px",
                              padding: "5px 10px",
                            cursor: "pointer",
                        }}
                      >
                        Mearn Stack
                      </MDTypography>
                      <MDTypography
                        onClick={handleClick}
                        style={{
                          color: "#FFFFFF",
                          fontSize: "25px",
                          fontWeight: "800",
                          fontFamily: "roboto",
                          letterSpacing: 1,
                          backgroundColor:"#003060",
                          border: "1px solid transparent",
                          borderRadius: "5px",
                            padding: "5px 10px",
                          cursor: "pointer",
                        }}
                      >
                        Fluter Mobile App
                      </MDTypography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      lg={12}
                      style={{
                        display: "flex",
                        justifyContent: "flex start",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <p
                        style={{
                          color: "#2d2d2d",
                          fontSize: "1.2em",
                          fontWeight: "600",
                          fontFamily: "roboto",
                          letterSpacing: 1,
                        }}
                      >
                        Progress:
                      </p>
                      {/* <Projects /> */}
                      <p
                        style={{
                          color: "#509a58",
                          fontSize: "25px",
                          fontWeight: "800",
                          fontFamily: "roboto",
                          letterSpacing: 1,
                        }}
                      >
                        Student Attendence,
                      </p>
                      <p
                        style={{
                          color: "#509a58",
                          fontSize: "25px",
                          fontWeight: "800",
                          fontFamily: "roboto",
                          letterSpacing: 1,
                        }}
                      >
                        Course Results
                      </p>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      lg={12}
                      style={{
                        display: "flex",
                        justifyContent: "flex start",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <p
                        style={{
                          color: "#2d2d2d",
                          fontSize: "1.2em",
                          fontWeight: "600",
                          fontFamily: "roboto",
                          letterSpacing: 1,
                        }}
                      >
                        Shedule:
                      </p>
                      {/* <Projects /> */}
                      <p
                        style={{
                          color: "#509a58",
                          fontSize: "25px",
                          fontWeight: "800",
                          fontFamily: "roboto",
                          letterSpacing: 1,
                        }}
                      >
                        Weekly Shedule,
                      </p>
                      <p
                        style={{
                          color: "#509a58",
                          fontSize: "25px",
                          fontWeight: "800",
                          fontFamily: "roboto",
                          letterSpacing: 1,
                        }}
                      >
                        Monthly Shedule
                      </p>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      lg={12}
                      style={{
                        display: "flex",
                        justifyContent: "flex start",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <p
                        style={{
                          color: "#2d2d2d",
                          fontSize: "1.2em",
                          fontWeight: "600",
                          fontFamily: "roboto",
                          letterSpacing: 1,
                        }}
                      >
                        Assignment:
                      </p>
                      {/* <Projects /> */}
                      <p
                        style={{
                          color: "#509a58",
                          fontSize: "25px",
                          fontWeight: "800",
                          fontFamily: "roboto",
                          letterSpacing: 1,
                        }}
                      >
                        Active,
                      </p>
                      <p
                        style={{
                          color: "#509a58",
                          fontSize: "25px",
                          fontWeight: "800",
                          fontFamily: "roboto",
                          letterSpacing: 1,
                        }}
                      >
                        Checked
                      </p>
                    </Grid>
                  </Grid>
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BgCardMain;
