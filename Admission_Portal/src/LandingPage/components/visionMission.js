import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ReactPlayer from "react-player";
import Color from "color";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const items = [
  {
    title: "Vision",
    description:
      "Our vision is to propel our students into the 21st century through cutting-edge innovation and modern technology. We aim to enhance everyday life for everyone. This program not only provides financial benefits to the youth but also fosters profound, long-lasting psychological impacts, such as reducing frustration among unemployed individuals. Additionally, our training initiatives empower participants with valuable skills, equipping them for a brighter, more prosperous future.",
  },
  {
    title: "Mission",
    description:
      "Our mission is to offer high-quality education that links young individuals to life-changing opportunities. Educated youth who face unemployment often experience frustration and despair. Our training programs empower them to earn through freelancing, develop diverse skills in specialized fields, and foster an entrepreneurial mindset. This not only boosts their confidence and self-reliance but also transforms them into valuable assets for a growing economy.",
  },
];

const videos = [
  {
    title: "Video Title",
    description: "Video Description",
    videourl: "https://youtu.be/e90_EGZfr04?si=kcN6izQ7iF3IPody",
    thumbnail: "https://img.youtube.com/vi/e90_EGZfr04/0.jpg", // Thumbnail URL
  },
];

export default function VisionMission() {
  const greenColor = Color("#82bd3e");
  const blueColor = Color("#127168");
  const mixedColor = greenColor.mix(blueColor, 0.5);
  const newGradient = `linear-gradient(180deg, ${mixedColor.hex()}, #FFF)`;

  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const [playingVideoIndex, setPlayingVideoIndex] = React.useState(null);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const handleThumbnailClick = (index) => {
    setPlayingVideoIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="vision&mission" sx={{ py: { xs: 2, sm: 4 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography
              component="h1"
              variant="h4"
              sx={{
                fontSize: "3rem",
                fontWeight: "bold",
                color: "#127168",
                fontFamily: "inherit",
              }}
            >
              Vision & Mission
            </Typography>
          </div>
          <Grid container item gap={1} sx={{ display: { xs: "auto", sm: "none" } }}>
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                sx={{
                  borderColor: selectedItemIndex === index ? "#127168" : "white",
                  backgroundColor: selectedItemIndex === index ? "green" : "",
                  "& .MuiChip-label": {
                    color: selectedItemIndex === index ? "#127168" : "",
                  },
                }}
              />
            ))}
          </Grid>

          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: "auto", sm: "none" },
              mt: 4,
            }}
          >
            <Box
              sx={{
                backgroundImage: (theme) =>
                  theme.palette.mode === "light"
                    ? items[selectedItemIndex].imageLight
                    : items[selectedItemIndex].imageDark,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: 80,
              }}
              style={{
                backgroundImage: newGradient,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            />
            <Box sx={{ px: 2, pb: 2, mt: 0.2 }}>
              <Typography
                color="text.primary"
                variant="body2"
                fontWeight="bold"
                fontFamily="inherit"
                style={{ fontFamily: "inherit" }}
              >
                {selectedFeature.title}
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
                fontFamily="inherit"
                sx={{ my: 0.2 }}
                style={{ fontFamily: "inherit" }}
              >
                {selectedFeature.description}
              </Typography>
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: "100%", display: { xs: "none", sm: "flex" } }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  height: "fit-content",
                  width: "100%",
                  backgroundImage: newGradient,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  borderColor: selectedItemIndex === index ? "#eaf7d9" : "grey.200",
                  "&:hover": {
                    backgroundColor: "#127168", // Example hover background color
                    borderColor: "#82bd3e", // Example hover border color
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    textAlign: "left",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { md: "center" },
                    gap: 2.5,
                  }}
                >
                  <Box sx={{ color: selectedItemIndex === index ? "primary.main" : "grey.300" }}>
                    {icon}
                  </Box>
                  <Box sx={{ textTransform: "none" }}>
                    <Typography color="text.primary" variant="h6" fontWeight="bold">
                      {title}
                    </Typography>
                    <Typography
                      color="text.primary"
                      variant="body1"
                      sx={{
                        my: 1,
                        textAlign: "justify", // Set text alignment to justify
                      }}
                    >
                      {description}
                    </Typography>
                    <Link
                      color="primary"
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        "& > svg": { transition: "0.2s" },
                        "&:hover > svg": { transform: "translateX(2px)" },
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    ></Link>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: "flex", width: "100%" }}>
          {videos.map(({ videourl, thumbnail }, index) => (
            <Card
              key={index}
              variant="outlined"
              sx={{
                height: { xs: "200px", sm: "300px", md: "100%" }, // Adjust height based on screen size
                width: "100%",
                position: "relative",
              }}
            >
              {playingVideoIndex !== index && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: `url(${thumbnail}) no-repeat center center`,
                    backgroundSize: "cover",
                    cursor: "pointer",
                    zIndex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <IconButton
                    sx={{
                      color: "white",
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                      },
                      fontSize: "3rem",
                    }}
                  >
                    <PlayArrowIcon fontSize="inherit" />
                  </IconButton>
                </Box>
              )}
              <Box
                sx={{
                  m: "auto",
                  width: "100%",
                  height: "100%",
                }}
              >
                <ReactPlayer
                  url={videourl}
                  playing={playingVideoIndex === index} // Play the video if it's the clicked one
                  controls={true} // Ensures controls are available
                  width="100%"
                  height="100%"
                />
              </Box>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
