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

// import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
// import EdgesensorHighRoundedIcon from "@mui/icons-material/EdgesensorHighRounded;
// import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";

const items = [
  {
    title: "Vision",
    description:
      "Our vision is to propel our students into the 21st century through cutting-edge innovation and modern technology. We aim to enhance everyday life for everyone. This program not only provides financial benefits to the youth but also fosters profound, long-lasting psychological impacts, such as reducing frustration among unemployed individuals. Additionally, our training initiatives empower participants with valuable skills, equipping them for a brighter, more prosperous future.",
  },
  {
    title: "Mission",
    description:
      "Our vision is to propel our students into the 21st century through cutting-edge innovation and modern technology. We aim to enhance everyday life for everyone. This program not only provides financial benefits to the youth but also fosters profound, long-lasting psychological impacts, such as reducing frustration among unemployed individuals. Additionally, our training initiatives empower participants with valuable skills, equipping them for a brighter, more prosperous future.",
  },
];

const videos = [
  {
    title: "Video Title",
    description: "Video Description",
    videourl: "https://youtu.be/e90_EGZfr04?si=kcN6izQ7iF3IPody",
  },
];

export default function Features() {
  const greenColor = Color("#82bd3e");
  const blueColor = Color("#127168");
  const mixedColor = greenColor.mix(blueColor, 0.5);
  const newGradient = `linear-gradient(180deg, ${mixedColor.hex()}, #FFF)`;

  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 2, sm: 4 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h2" variant="h4" color="#5392c7">
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
                  borderColor: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index ? "primary.success" : "";
                    }
                    return selectedItemIndex === index ? "primary.success" : "";
                  },
                  background: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index ? "none" : "";
                    }
                    return selectedItemIndex === index ? "none" : "";
                  },
                  backgroundColor: selectedItemIndex === index ? "primary.main" : "",
                  "& .MuiChip-label": {
                    color: selectedItemIndex === index ? "#fff" : "",
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
                minHeight: 280,
              }}
            />
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography color="text.primary" variant="body2" fontWeight="bold">
                {selectedFeature.title}
              </Typography>
              <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                {selectedFeature.description}
              </Typography>
              <Link
                color="primary"
                variant="body2"
                fontWeight="bold"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  "& > svg": { transition: "0.2s" },
                  "&:hover > svg": { transform: "translateX(2px)" },
                }}
              >
                <ChevronRightRoundedIcon fontSize="small" sx={{ mt: "1px", ml: "2px" }} />
              </Link>
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            // border="1px solid black"
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
                  // background: "none",
                  // backgroundColor: selectedItemIndex === index ? "#f5fcea" : undefined,
                  borderColor: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index ? "#eaf7d9" : "grey.200";
                    }
                    return selectedItemIndex === index ? "primary.dark" : "grey.800";
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
                  <Box
                    sx={{
                      color: (theme) => {
                        if (theme.palette.mode === "light") {
                          return selectedItemIndex === index ? "primary.main" : "grey.300";
                        }
                        return selectedItemIndex === index ? "primary.main" : "grey.700";
                      },
                    }}
                  >
                    {icon}
                  </Box>
                  <Box sx={{ textTransform: "none" }}>
                    <Typography color="text.primary" variant="h6" fontWeight="bold">
                      {title}
                    </Typography>
                    <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                      {description}
                    </Typography>
                    <Link
                      color="primary"
                      variant="body2"
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
        <Grid item xs={12} md={6} sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}>
          {videos.map(({ videourl }, index) => (
            <Card
              key={index}
              variant="outlined"
              sx={{
                height: "100%",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  m: "auto",
                  width: "100%",
                  height: "100%",
                }}
              >
                <ReactPlayer
                  url={videourl}
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
