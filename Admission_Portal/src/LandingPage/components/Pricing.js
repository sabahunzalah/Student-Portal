import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
// import Dialog from "@mui/material/Dialog";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import imageSets from "./ImageData";
import { Typography } from "@mui/material";
import { useState } from "react";

function ImageStepper({ imageSet }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const imagesPerSlide = 3;
  const maxSteps = Math.ceil(imageSet.length / imagesPerSlide);
  const [open, setOpen] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, maxSteps - 1));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = (index) => {
    setCurrentImageIndex(index);
    setOpen(true);
  };

  const getVisibleImages = (index) => {
    const startIndex = index * imagesPerSlide;
    return imageSet.slice(startIndex, startIndex + imagesPerSlide);
  };

  return (
    <Box sx={{ width: "100%" }} id="courses">
      <Box
        sx={{
          width: {
            sm: "100%",
            // md: "60%",
          },
          textAlign: { sm: "left", md: "center" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{ fontSize: "3rem", fontWeight: "bold", color: "#127168", fontFamily: "inherit" }}
        >
          New Courses
        </Typography>
      </Box>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {Array.from({ length: maxSteps }).map((_, stepIndex) => (
          <Box
            key={stepIndex}
            sx={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {getVisibleImages(stepIndex).map((step) => (
              <Card key={step.label} onClick={handleOpen} sx={{ width: 350 }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: "100%",
                    // display: "block",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
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

      {/* 
      <Dialog open={open} onClose={handleClose} maxWidth="xs">
        <DialogTitle>
          {imageSet[activeStep * imagesPerSlide]?.label}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <img
            src={imageSet[activeStep * imagesPerSlide]?.imgPath}
            alt={imageSet[activeStep * imagesPerSlide]?.label}
            style={{ width: "100%", resize: "cover" }}
          />
        </DialogContent>
      </Dialog> */}
    </Box>
  );
}

ImageStepper.propTypes = {
  imageSet: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      imgPath: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default function ResponsiveGallery() {
  return (
    <Grid container spacing={2} justifyContent="center">
      {imageSets.map((item, index) => (
        <Grid item xs={12} key={index}>
          <Box
            sx={{
              width: "100%", // Ensures that the Box takes up full width of the Grid item
              height: "auto", // Adjust as needed for your design
              maxWidth: "100%", // Ensures the Box does not exceed the width of the Grid item
              display: "flex", // Make sure the ImageStepper fits within the Box
              justifyContent: "center", // Center the ImageStepper if needed
            }}
          >
            <ImageStepper imageSet={item} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
