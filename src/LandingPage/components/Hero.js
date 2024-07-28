import * as React from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Banner from "../../assets/images/realBanner.png";
import Color from "color";

export default function Hero() {
  const greenColor = Color("#82bd3e");
  const blueColor = Color("#127168");
  const mixedColor = greenColor.mix(blueColor, 0.5);
  const newGradient = `linear-gradient(180deg, ${mixedColor.hex()}, #FFF)`;

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        // border: "2px solid black",
        backgroundImage: newGradient,
        backgroundSize: "100% 50%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 10, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
              color: "#FFFFFF",
              fontSize: "clamp(3.5rem, 10vw, 4rem)",
            }}
          >
            Welcome to&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(3rem, 10vw, 4rem)",
                color: (theme) =>
                  theme.palette.mode === "light" ? "primary.main" : "primary.light",
              }}
            >
              &quot;SMIT&quot;
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            variant="h6"
            fontWeight="bold"
            letterSpacing="2"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
          >
            Transform your passion into profit. Saylani Mass IT trains 75,000+ annually to power
            Pakistan`s tech future. Join us and be part of a $100 billion dream.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 0, width: { xs: "100%", sm: "auto" } }}
          >
            {/* <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              inputProps={{
                autoComplete: "off",
                "aria-label": "Enter your email address",
              }}
            /> */}
            {/* <Button variant="contained" color="primary">
              Start now
            </Button> */}
          </Stack>
          {/* <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography> */}
        </Stack>
        <Box
          id="image"
          sx={{
            // mt: { xs: 8, sm: 10 },
            alignSelf: "center",
            height: "100%",
            width: "100%",
            borderRadius: "10px",
            overflow: "hidden",
            outline: "1px solid green",
            outlineColor: "rgba(191, 204, 217, 0.5)", // Adjusted to a fixed color
            boxShadow: "0 0 12px 8px rgba(156, 204, 252, 0.2)", // Adjusted to a fixed shadow
          }}
        >
          <img
            src={Banner}
            alt="Banner"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
