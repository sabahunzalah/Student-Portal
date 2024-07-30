import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Banner from "../../assets/images/realBanner.png";
import Color from "color";

export default function Hero() {
  const greenColor = Color("#82bd3e");
  const blueColor = Color("#127168");
  const mixedColor = greenColor.mix(blueColor, 0.5);
  const newGradient = `linear-gradient(180deg, ${mixedColor.hex()}, #FFF)`;

  const [displayText, setDisplayText] = useState("");
  const fullText = "Welcome to SMIT";

  useEffect(() => {
    let currentText = "";
    let index = 0;

    const timer = setInterval(() => {
      if (index < fullText.length) {
        currentText += fullText[index];
        setDisplayText(currentText);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 200); // Adjust the delay time as needed

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
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
          pt: { xs: 12, sm: 12 },
          pb: { xs: 4, sm: 4 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant="h3"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
              color: "#127168",
              fontSize: "clamp(3.5rem, 9vw, 3.5rem)",
            }}
            style={{ fontFamily: "inherit" }}
          >
            {displayText}
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
            Pakistan&apos;s tech future. Join us and be part of a $100 billion dream.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 0, width: { xs: "100%", sm: "auto" } }}
          ></Stack>
        </Stack>
        <Box
          id="image"
          sx={{
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
