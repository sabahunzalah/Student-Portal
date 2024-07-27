import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Amna_image from "../../assets/images/amna1.png";
import Anas_image from "../../assets/images/anas .png";
import Saad_image from "../../assets/images/saad.png";
import Ghous_image from "../../assets/images/ghous.png";
import Hunain_image from "../../assets/images/hunain.png";
import Dilip_image from "../../assets/images/dilip.png";
import "./Motivational.css";

const items = [
  {
    icon: Anas_image,
    title: "Anas Asif",
    description: "Our Shining Star...Youngest Web and Mobile App Developer",
    videoUrl: "https://www.youtube.com/embed/-VIVJzVtiq8", // YouTube embed URL
  },
  {
    icon: Amna_image,
    title: "Amna Shehzad",
    description:
      "Youngest Mern Stack Developer,Ui and Ux designer,Vector designer,Data Science Trainee,Power Bi Developer",
    videoUrl: "https://www.youtube.com/embed/rJotBlhaCC0",
  },
  {
    icon: Hunain_image,
    title: "Hunain Pasha",
    description:
      "Full-stack Software Engineer in building high-quality, reliable full-stack Applications.",
    videoUrl: "https://www.youtube.com/embed/6gDfrPOEkIU",
  },
  {
    icon: Ghous_image,
    title: "Ghous Ahmad",
    description:
      "Full Stack Developer over 6 years of Experience in working on a diverse range of projects, from mobile apps to web apps",
    videoUrl: "https://www.youtube.com/embed/CPo1aNag0kE",
  },
  {
    icon: Saad_image,
    title: "Saad Pasta",
    description:
      "Full-stack Software Engineer with 5+ years of experience.Developed 2 Open Source projects which have over 5000+ stars on GitHub",
    videoUrl: "https://www.youtube.com/embed/jsap0rbLn5I",
  },
  {
    icon: Dilip_image,
    title: "Dilip Armani",
    description: "Full Stack Developer",
    videoUrl: "https://www.youtube.com/embed/85tn03aEN4U",
  },
];

export default function Motivational() {
  const [flippedIndex, setFlippedIndex] = React.useState(null);

  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        background: "linear-gradient(135deg, #97C39C, #75B07C)",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Added box shadow
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
          <Typography
            component="h1"
            variant="h4"
            sx={{ fontSize: "3rem", fontWeight: "bold", color: "#0958A7" }}
          >
            Motivational Blogs
          </Typography>
          <Typography variant="body1" sx={{ color: "#0958A7", fontSize: "1rem" }}>
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
                sx={{
                  p: 3,
                  height: "350px",
                  border: "1px solid",
                  borderColor: "#F0F7FE.400",
                  backgroundColor: "#F8F8F8",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{ position: "relative", cursor: "pointer" }}
                  onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
                >
                  {flippedIndex === index ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`${item.videoUrl}?autoplay=1`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ borderRadius: "12px" }}
                    ></iframe>
                  ) : (
                    <>
                      <img
                        src={item.icon}
                        alt={item.title}
                        style={{ width: "150px", height: "150px", borderRadius: "50%" }}
                      />
                      <PlayArrowIcon
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          color: "white",
                          fontSize: "3rem",
                        }}
                      />
                    </>
                  )}
                </Box>
                <div>
                  <Typography
                    fontWeight="bold"
                    gutterBottom
                    align="center"
                    sx={{ fontSize: "1.5rem", color: "#5392C7" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#82BD3E", fontSize: "1rem" }}>
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
