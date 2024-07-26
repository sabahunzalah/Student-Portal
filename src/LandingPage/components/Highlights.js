import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Amna_image from "../../assets/images/amna1.png";
import Anas_image from "../../assets/images/anas .png";
import Saad_image from "../../assets/images/saad.png";
import Ghous_image from "../../assets/images/ghous ahmad.png";
import "./Highlights.css";

const items = [
  {
    icon: Anas_image,
    title: "Anas Asif",
    description: "The Youngest Web and Mobile App Developer of Pakistan...",
    videoUrl: "https://www.youtube.com/embed/-VIVJzVtiq8", // YouTube embed URL
  },
  {
    icon: Amna_image,
    title: "Amna Shehzad",
    description: "The Youngest Web Developer of Pakistan...",
    videoUrl: "https://www.youtube.com/embed/rJotBlhaCC0",
  },
  {
    icon: Saad_image,
    title: "Saad Pasta",
    description:
      "Full-stack Software Engineer with 5+ years of experience in building high-quality,reliable full-stack Applications.",
    videoUrl: "https://www.youtube.com/embed/6gDfrPOEkIU", // YouTube embed URL
  },
  {
    icon: Ghous_image,
    title: "Ghous Ahmad",
    description:
      "Full Stack Developer over 6 years of Experience in working on a diverse range of projects, from mobile apps to web apps",
    videoUrl: "https://www.youtube.com/embed/CPo1aNag0kE",
  },
  {
    icon: Amna_image,
    title: "Jafar Aman",
    description: "The Youngest Web Developer of Pakistan...",
    videoUrl: "https://www.youtube.com/embed/-VIVJzVtiq8", // YouTube embed URL
  },
  {
    icon: Amna_image,
    title: "Amna Shehzad",
    description: "The Youngest Web Developer of Pakistan...",
    videoUrl: "https://www.youtube.com/embed/-VIVJzVtiq8", // YouTube embed URL
  },

  // Other items...
];

export default function Highlights() {
  const [flippedIndex, setFlippedIndex] = React.useState(null);

  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "white",
        border: "1px solid black",
        // backgroundImage: "linear-gradient(to right, #82bd3e, #4caf50)",
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
                  height: "300px", // Set a specific height for the card
                  border: "1px solid",
                  borderColor: "grey.800",
                  // background: "transparent",
                  backgroundColor: "white.900",
                  perspective: "1000px",
                  //backgroundImage: "linear-gradient(180 deg, #82bd3e, #4caf50)",
                }}
              >
                <Box
                  className={`flip-card ${flippedIndex === index ? "flipped" : ""}`}
                  onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
                  sx={{ cursor: "pointer", height: "100%", width: "100%" }}
                >
                  <Box className="flip-card-inner">
                    <Box className="flip-card-front">
                      <img
                        src={item.icon}
                        alt={item.title}
                        style={{ width: "120px", height: "120px", borderRadius: "50%" }}
                      />
                    </Box>
                    <Box className="flip-card-back">
                      {flippedIndex === index && (
                        <iframe
                          width="100%"
                          height="100%"
                          src={`${item.videoUrl}?autoplay=1`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          style={{ borderRadius: "12px" }} // Add some styling if needed
                        ></iframe>
                      )}
                    </Box>
                  </Box>
                </Box>
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
