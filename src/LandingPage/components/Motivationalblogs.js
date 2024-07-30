import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Anas_image from "../../assets/images/anas .png";
import Amna_image from "../../assets/images/amna1.png";
import Hunain_image from "../../assets/images/hunain.png";
import Ghous_image from "../../assets/images/ghous.png";
import Saad_image from "../../assets/images/saad-pasta.jpg";
import Dilip_image from "../../assets/images/dilip.png";
import MotivationalCard from "./Card";

const items = [
  {
    icon: Anas_image,
    title: "Anas Asif",
    description:
      "Anas Asif is a shining star in web and mobile app development. With his innovative mindset and dedication, he has made significant contributions at a very young age. Learn more about his journey and projects.",
    videoUrl: "https://www.youtube.com/embed/-VIVJzVtiq8",
  },
  {
    icon: Amna_image,
    title: "Amna Shehzad",
    description:
      "Amna Shehzad is a versatile tech professional excelling as a MERN Stack Developer, UI/UX designer, Vector designer, Data Science Trainee, and Power BI Developer. Her diverse skill set makes her a valuable asset in any tech environment.",
    videoUrl: "https://www.youtube.com/embed/rJotBlhaCC0",
  },
  {
    icon: Hunain_image,
    title: "Hunain Pasha",
    description:
      "Hunain Pasha is a full-stack software engineer specializing in building high-quality, reliable full-stack applications. His expertise ensures that his applications are not only functional but also scalable and maintainable.",
    videoUrl: "https://www.youtube.com/embed/6gDfrPOEkIU",
  },
  {
    icon: Ghous_image,
    title: "Ghous Ahmad",
    description:
      "Ghous Ahmad is a full stack developer with over 6 years of experience. He is known for tackling complex technical challenges and delivering innovative solutions that drive business success.",
    videoUrl: "https://www.youtube.com/embed/CPo1aNag0kE",
  },
  {
    icon: Saad_image,
    title: "Saad Pasta",
    description:
      "Saad Pasta is a full-stack software engineer with 5+ years of experience. He developed 2 open-source projects that have over 5000+ stars on GitHub, making him a respected figure in the tech community.",
    videoUrl: "https://www.youtube.com/embed/jsap0rbLn5I",
  },
  {
    icon: Dilip_image,
    title: "Dilip Armani",
    description:
      "Dilip Armani is a full stack developer with 2+ years of experience. Known for his dedication and ability to quickly adapt to new technologies, Dilip is committed to delivering high-quality code and solutions.",
    videoUrl: "https://www.youtube.com/embed/85tn03aEN4U",
  },
];

export default function Motivational() {
  return (
    <Box
      id="successStories"
      sx={{
        pt: { xs: 2, sm: 6 },
        pb: { xs: 4, sm: 8 },
        // background: "linear-gradient(135deg, #97C39C, #75B07C)",
        color: "white",
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
        <Box sx={{ width: { sm: "100%", md: "60%" }, textAlign: { sm: "left", md: "center" } }}>
          <Typography
            component="h1"
            variant="h4"
            sx={{ fontSize: "3rem", fontWeight: "bold", color: "#127168", fontFamily: "inherit" }}
          >
            Success Stories
          </Typography>
          <Typography variant="body1" sx={{ color: "#0958A7", fontSize: "1rem" }}>
            Explore why SMIT stands out!
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <MotivationalCard
                title={item.title}
                icon={item.icon}
                description={item.description}
                videoUrl={item.videoUrl}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
