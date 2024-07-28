import * as React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Color from "color";

const greenColor = Color("#82bd3e");
const blueColor = Color("#127168");
const mixedColor = greenColor.mix(blueColor, 0.5);
const newGradient = `linear-gradient(180deg, ${mixedColor.hex()}, #FFF)`;

export default function MotivationalCard({ title, icon, description, videoUrl }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        sx={(theme) => ({
          width: "100%",
          backgroundImage: newGradient,
          backgroundSize: "100% 50%",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
          borderRadius: "12px",
        })}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "16px 0",
          }}
        >
          <div style={{ position: "relative", cursor: "pointer" }} onClick={handleOpen}>
            <CardMedia
              component="img"
              alt={title}
              src={icon}
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid black",
              }}
            />
            <PlayArrowIcon
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "3rem",
              }}
            />
          </div>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <div
          style={{
            position: "relative",
            width: "80%",
            maxWidth: "800px",
            backgroundColor: "white",
            padding: "16px",
            borderRadius: "8px",
            outline: "none",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: "8px",
              right: "8px",
              color: "white",
              fontSize: "2rem",
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
          <iframe
            width="100%"
            height="450"
            src={`${videoUrl}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "8px", border: "none" }}
          ></iframe>
        </div>
      </Modal>
    </>
  );
}

MotivationalCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
};
