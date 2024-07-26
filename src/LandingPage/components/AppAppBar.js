import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleColorMode from "./ToggleColorMode";
import { useNavigate } from "react-router-dom";
import Image1 from "../../assets/images/smit-stud.png";

const logoStyle = {
  width: "100px",
  height: "60px",
  cursor: "pointer",
};

function AppAppBar({ mode, toggleColorMode }) {
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
            justifyContent: "space-between",
            flexShrink: 0,
            borderRadius: "999px",
            bgcolor:
              theme.palette.mode === "light" ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(24px)",
            maxHeight: 40,
            border: "1px solid",
            borderColor: "divider",
            padding: "30px",
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
              ml: "18px",
              px: 0,
            }}
          >
            <img
              // src={
              //   "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg"
              // }
              src={Image1}
              style={logoStyle}
              // alt="logo of sitemark"
            />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <MenuItem onClick={() => scrollToSection("features")} sx={{ pt: "12px", px: "12px" }}>
                <Typography variant="h6" color="text.primary">
                  SMIT Motive
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("testimonials")}
                sx={{ pt: "12px", px: "12px" }}
              >
                <Typography variant="h6" color="text.primary">
                  Emerging Technologies
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("highlights")}
                sx={{ pt: "12px", px: "12px" }}
              >
                <Typography variant="h6" color="text.primary">
                  Motivational Blogs
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => scrollToSection("pricing")} sx={{ pt: "12px", px: "12px" }}>
                <Typography variant="h6" color="text.primary">
                  Courses
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => scrollToSection("faq")} sx={{ pt: "12px", px: "12px" }}>
                <Typography variant="h6" color="text.primary">
                  FAQ
                </Typography>
              </MenuItem>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 0.5,
              alignItems: "center",
            }}
            style={{ width: "250px" }}
          >
            {/* <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} /> */}
            <Button
              // color="success"
              // variant="text"
              size="large"
              component="a"
              href="#"
              onClick={handleSignIn}
              style={{ color: "#82bd3e", fontSize: "20px" }}
            >
              Sign in
            </Button>
            <Button
              // color="success"
              // variant="contained"
              size="large"
              component="a"
              href="#"
              onClick={handleSignUp}
              style={{ background: "#82bd3e", border: "none", fontSize: "20px", color: "white" }} // No border
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
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                    flexGrow: 1,
                  }}
                >
                  <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                </Box>
                <MenuItem onClick={() => scrollToSection("features")}>Features</MenuItem>
                <MenuItem onClick={() => scrollToSection("testimonials")}>Testimonials</MenuItem>
                <MenuItem onClick={() => scrollToSection("highlights")}>Highlights</MenuItem>
                <MenuItem onClick={() => scrollToSection("pricing")}>Pricing</MenuItem>
                <MenuItem onClick={() => scrollToSection("faq")}>FAQ</MenuItem>
                <Divider />
                <MenuItem>
                  <Button
                    color="primary"
                    variant="contained"
                    component="a"
                    onClick={handleSignUp}
                    sx={{ width: "100%" }}
                  >
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    color="primary"
                    variant="outlined"
                    component="a"
                    onClick={handleSignIn}
                    sx={{ width: "100%" }}
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
