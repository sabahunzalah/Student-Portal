import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import Image1 from "../../assets/images/smit-stud.png";
import Color from "color";

const logoStyle = {
  width: "90px",
  height: "50px",
  cursor: "pointer",
};

function AppAppBar() {
  const greenColor = Color("#82bd3e");
  const blueColor = Color("#127168");
  const mixedColor = greenColor.mix(blueColor, 0.5);
  const newGradient = `linear-gradient(180deg, ${mixedColor.hex()}, #FFF)`;
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  const handleSignUp = () => {
    navigate("/authentication/sign-up");
  };

  const handleSignIn = () => {
    navigate("/authentication/sign-in");
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
          width: "100%", // Full width
          left: 0, // Ensure it starts from the very left
          right: 0, // Ensure it extends to the very right
        }}
      >
        <Toolbar
          variant="regular"
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexShrink: 0,
            borderRadius: "999px",
            bgcolor:
              theme.palette.mode === "light" ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(24px)",
            maxHeight: 40,
            borderColor: "divider",
            boxShadow:
              theme.palette.mode === "light"
                ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
          })}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              px: 0,
            }}
          >
            <img src={Image1} style={logoStyle} onClick={() => scrollToSection("hero")} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <MenuItem
                onClick={() => scrollToSection("vision&mission")}
                sx={{ pt: "12px", px: "9.5px" }}
              >
                <Typography
                  variant="body1"
                  color="text.primary"
                  style={{ color: "black", fontFamily: "inherit" }}
                >
                  Vision & Mission
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("EmergingTech")}
                sx={{ pt: "12px", px: "9.5px" }}
              >
                <Typography
                  variant="body1"
                  color="text.primary"
                  style={{ color: "black", fontFamily: "inherit" }}
                >
                  Emerging Technologies
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("successStories")}
                sx={{ pt: "12px", px: "9.5px" }}
              >
                <Typography
                  variant="body1"
                  color="text.primary"
                  style={{ color: "black", fontFamily: "inherit" }}
                >
                  Success Stories
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => scrollToSection("courses")} sx={{ pt: "12px", px: "9.5px" }}>
                <Typography
                  variant="body1"
                  color="text.primary"
                  style={{ color: "black", fontFamily: "inherit" }}
                >
                  Courses
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => scrollToSection("faq")} sx={{ pt: "12px", px: "9.5px" }}>
                <Typography
                  variant="body1"
                  color="text.primary"
                  style={{ color: "black", fontFamily: "inherit" }}
                >
                  FAQ
                </Typography>
              </MenuItem>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex", lg: "flex" },
              gap: 0.5,
              alignItems: "center",
              justifyContent: "flex-end",
            }}
            style={{ width: "350px" }}
          >
            <Button
              component="a"
              href="#"
              onClick={handleSignIn}
              style={{
                color: "#127168",
                border: "none",
                fontSize: "17px",
                backgroundColor: "white",
                fontFamily: "inherit",
              }}
            >
              Sign in
            </Button>
            <Button
              component="a"
              href="#"
              onClick={handleSignUp}
              style={{
                background: "#127168",
                border: "none",
                fontSize: "17px",
                color: "white",
                fontFamily: "inherit",
              }}
            >
              Sign up
            </Button>
          </Box>
          <Box sx={{ display: { sm: "", md: "none" } }}>
            <Button
              variant="text"
              color="primary"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ minWidth: "30px", p: "4px" }}
            >
              <MenuIcon />
            </Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  minWidth: "60dvw",
                  p: 2,
                  backgroundColor: "background.paper",
                  flexGrow: 1,
                }}
                style={{
                  backgroundImage: newGradient,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseIcon />
                  </IconButton>
                </Box>
                <img src={Image1} style={logoStyle} onClick={() => scrollToSection("hero")} />
                <MenuItem
                  onClick={() => scrollToSection("vision&mission")}
                  style={{ color: "black", fontFamily: "inherit" }}
                >
                  Vision & Mission
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("EmergingTech")}
                  style={{ color: "black", fontFamily: "inherit" }}
                >
                  Emerging Technologies
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("successStories")}
                  style={{ color: "black", fontFamily: "inherit" }}
                >
                  Success Stories
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("courses")}
                  style={{ color: "black", fontFamily: "inherit" }}
                >
                  Courses
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("faq")}
                  style={{ color: "black", fontFamily: "inherit" }}
                >
                  FAQ
                </MenuItem>
                <Divider />
                <MenuItem>
                  <Button
                    component="a"
                    onClick={handleSignUp}
                    sx={{ width: "100%" }}
                    style={{
                      color: "#82bd3e",
                      border: "1px solid #82bd3e",
                      fontSize: "20px",
                      fontFamily: "inherit",
                    }}
                  >
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    component="a"
                    onClick={handleSignIn}
                    sx={{ width: "100%" }}
                    style={{
                      color: "#127168",
                      border: "1px solid #127168",
                      fontSize: "20px",
                      fontFamily: "inherit",
                      // backgroundColor: "#e5ffc1",
                    }}
                  >
                    Sign in
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
