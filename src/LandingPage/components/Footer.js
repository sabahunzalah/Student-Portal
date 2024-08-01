import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Color from "color";

const logoStyle = {
  width: "100%",
  height: "150px",
};

function Copyright() {
  return (
    <Typography variant="body2" textAlign="center" color="text.secondary" mt={1}>
      {"Copyright © "}
      <Link href="https://saylaniwelfare.com/en/services/educ5ation/technical-education/saylani-mass-it-training/">
        SMIT By Saylaniwelfare Int Trust ;
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const greenColor = Color("#82bd3e");
  const blueColor = Color("#127168");
  const mixedColor = greenColor.mix(blueColor, 0.5);
  const newGradient = `linear-gradient(180deg, ${mixedColor.hex()}, #FFF)`;
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        backgroundImage: newGradient,
        borderRadius: "10px",
        color: "Green",
        fontSize: "18px",
        fontFamily: "sans-serif",
        gap: { xs: 6, sm: 10 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          paddingLeft: "25px",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <Box sx={{ ml: "-15px", borderRadius: "50px" }}>
              <img
                src={
                  "https://saylaniwelfare.com/static/media/logo_saylaniwelfare.22bf709605809177256c.png"
                }
                style={logoStyle}
                alt="logo of SMIT"
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" padding={2} fontWeight={600}>
            <h1>Vision</h1>
          </Typography>
          <Link color="text.secondary" href="Features.js">
            Features
          </Link>
          <Link color="text.secondary" href="EmergingTech.js">
            Emerging Technologies
          </Link>
          <Link color="text.secondary" href="Motivationalblogs.js">
            Motivational Blogs
          </Link>
          <Link color="text.secondary" href="Course.js">
            Courses
          </Link>
          <Link color="text.secondary" href="FAQ.js">
            FAQs
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" padding={2} fontWeight={600}>
            <h1>Institute</h1>
          </Typography>
          <Link color="text.secondary" href="#">
            About us
          </Link>
          <Link color="text.secondary" href="#">
            Careers
          </Link>
          <Link color="text.secondary" href="#">
            Students
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" padding={2} fontWeight={600}>
            <h1>Rules</h1>
          </Typography>
          <Link color="text.secondary" href="#">
            Terms & Conditions
          </Link>
          <Link color="text.secondary" href="#">
            Privacy
          </Link>
          <Link color="text.secondary" href="#">
            Contact
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <div>
          <Link color="text.secondary" href="#">
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;
          </Typography>
          <Link color="text.primery" href="#">
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}
        >
          <IconButton
            color="inherit"
            href="https://web.facebook.com/saylani.smit/?_rdc=1&_rdr"
            aria-label="FACEBOOK"
            sx={{ alignSelf: "center", color: "blue" }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.instagram.com/saylani.smit/?hl=en"
            aria-label="Instagram"
            sx={{ alignSelf: "center", color: "Purple" }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.youtube.com/channel/UCqIAX63GnO9xcEfnbgBfwcQ"
            aria-label="YouTube"
            sx={{ alignSelf: "center", color: "red" }}
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/saylanimassittraining/?originalSubdomain=pk"
            aria-label="LinkedIn"
            sx={{ alignSelf: "center", color: "blue" }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
