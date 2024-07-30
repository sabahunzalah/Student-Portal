import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Image1 from "../../assets/images/smit-stud.png";

import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import TwitterIcon from "@mui/icons-material/X";

const logoStyle = {
  width: "140px",
  height: "auto",
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Copyright © "}
      <Link href="https://mui.com/">Sitemark&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
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
            <Box sx={{ ml: "-15px" }}>
              <img src={Image1} style={logoStyle} alt="logo of sitemark" />
            </Box>

            <Typography variant="body2" color="text.secondary" mb={2}>
              Subscribe to get more information.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Enter your email address"
                placeholder="Your email address"
                inputProps={{
                  autoComplete: "off",
                  "aria-label": "Enter your email address",
                }}
              />
              <Button
                component="a"
                href="#"
                style={{
                  background: "#127168",
                  border: "none",
                  fontSize: "17px",
                  color: "white",
                  fontFamily: "inherit",
                  padding: "20px",
                }}
              >
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="h5" fontWeight={600} color="#127168">
            Product
          </Typography>
          <Link color="#127168" href="#">
            Features
          </Link>
          <Link color="#127168" href="#">
            Testimonials
          </Link>
          <Link color="#127168" href="#">
            Highlights
          </Link>
          <Link color="#127168" href="#">
            Pricing
          </Link>
          <Link color="#127168" href="#">
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
          <Typography variant="h5" fontWeight={600} color="#127168">
            Company
          </Typography>
          <Link color="#127168" href="#">
            About us
          </Link>
          <Link color="#127168" href="#">
            Careers
          </Link>
          <Link color="#127168" href="#">
            Press
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="h5" fontWeight={600} color="#127168">
            Legal
          </Typography>
          <Link color="#127168" href="#">
            Terms
          </Link>
          <Link color="#127168" href="#">
            Privacy
          </Link>
          <Link color="#127168" href="#">
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
          <Link color="text.secondary" href="#" style={{ color: "#127168" }}>
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="#" style={{ color: "#127168" }}>
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
            href="https://github.com/mui"
            aria-label="GitHub"
            sx={{ alignSelf: "center" }}
            style={{ color: "#127168" }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="#127168"
            href="https://x.com/MaterialUI"
            aria-label="X"
            sx={{ alignSelf: "center" }}
            style={{ color: "#127168" }}
          >
            <FacebookIcon />
            {/* <TwitterIcon /> */}
          </IconButton>
          <IconButton
            color="#127168"
            href="https://www.linkedin.com/company/mui/"
            aria-label="LinkedIn"
            sx={{ alignSelf: "center" }}
            style={{ color: "#127168" }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
