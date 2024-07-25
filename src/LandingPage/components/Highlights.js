import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import Amna_image from "../../assets/images/amna1.png";

const items = [
  {
    icon: <img />,
    title: "Alan Kay",
    description: "The best way to predict the future is to invent it",
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: "Bill Gates",
    description: "Software is a great combination between artistry and engineering.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Zig Ziglar",
    description: "You don't have to be great to start, but you have to start to be great.",
  },
  {
    icon: (
      <img
        src={Amna_image}
        alt="Amna Shehzad"
        style={{ width: "120px", height: "120px", borderRadius: "50%" }}
      />
    ),
    title: "Amna Shehzad",
    description:
      "The Youngest Web Developer of Pakistan. She has been Granted an Internship position by the University of Karachi",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Reliable support",
    description:
      "Count on our responsive customer support, offering assistance that goes beyond the purchase.",
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: "Precision in every detail",
    description:
      "Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.",
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "#82bd3e",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h1" variant="h4">
            Motivational Blogs
          </Typography>
          <Typography variant="body1" sx={{ color: "black.400" }}>
            Explore why SMIT stands out!
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.800",
                  background: "transparent",
                  backgroundColor: "grey.900",
                }}
              >
                <Box sx={{ opacity: "100%" }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="larger" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#82BD3E" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
