import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const imageSets = [
  [
    {
      label: "one",
      imgPath:
        "https://scontent.fkhi16-2.fna.fbcdn.net/v/t39.30808-6/452257929_122166448466153270_8768805542982941850_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=a06bvGqJ-UwQ7kNvgF8tXPx&_nc_ht=scontent.fkhi16-2.fna&oh=00_AYDUU-gIU5fF4ESPfdoDwkEcTN62Q5zl2ZGPtoJ8Dg3qdw&oe=66A95D17",
    },
    {
      label: "Bird",
      imgPath:
        "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Bali, Indonesia",
      imgPath:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
    },
    {
      label: "Goč, Serbia",
      imgPath:
        "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    },
  ],
  [
    {
      label: "Sunset",
      imgPath:
        "https://images.unsplash.com/photo-1541447271453-1b5d4e868a5d?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      // label: "Mountain",
      imgPath:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Forest",
      imgPath:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Beach",
      imgPath:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&h=250&q=60",
    },
  ],
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = imageSets.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    // <Box sx={{ maxWidth: 1200, flexGrow: 1 }}>
    //   <Paper
    //     square
    //     elevation={0}
    //     sx={{
    //       display: "flex",
    //       alignItems: "center",
    //       height: 50,
    //       pl: 2,
    //       bgcolor: "background.default",
    //     }}
    //   >
    <Box sx={{ maxWidth: 1200, flexGrow: 1, margin: "0 auto" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 4,
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          New Courses
        </Typography>
      </Box>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{imageSets[activeStep][0].label}</Typography>
      </Paper>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {imageSets.map((set, index) => (
          <Box key={index} sx={{ display: "flex", justifyContent: "space-around" }}>
            {set.map((image) => (
              <Card key={image.label} sx={{ maxWidth: 300, margin: 1 }}>
                <CardMedia component="img" height="240" image={image.imgPath} />
                {/* <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {image.label}
                  </Typography>
                </CardContent> */}
              </Card>
            ))}
          </Box>
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
