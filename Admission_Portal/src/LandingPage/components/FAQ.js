import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Color from "color";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  const greenColor = Color("#82bd3e");
  const blueColor = Color("#127168");
  const mixedColor = greenColor.mix(blueColor, 0.5);
  const newGradient = `linear-gradient(180deg, ${mixedColor.hex()}, #FFF)`;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      id="faq"
      sx={{
        // pt: { xs: 4, sm: 12 },
        // pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
        // backgroundImage: newGradient,
        // backgroundSize: "100% 40%",
        // backgroundRepeat: "no-repeat",
        // borderRadius: "10%",
      }}
    >
      <Typography
        component="h1"
        variant="h4"
        sx={{ fontSize: "3rem", fontWeight: "bold", color: "#127168", fontFamily: "inherit" }}
      >
        Frequently Asked Questions
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          style={{
            border: "1px solid grey",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
            style={{
              backgroundImage: newGradient,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Typography component="h3" variant="h6">
              How do I contact customer support if I have a question or issue?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6" gutterBottom sx={{ maxWidth: { sm: "100%", md: "70%" } }}>
              You can reach our customer support team by emailing
              <Link> support@email.com </Link>
              or calling our toll-free number. We&apos;re here to assist you promptly.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          style={{
            border: "1px solid grey",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
            style={{
              backgroundImage: newGradient,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Typography component="h3" variant="h6">
              Can I return the product if it doesn&apos;t meet my expectations?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6" gutterBottom sx={{ maxWidth: { sm: "100%", md: "70%" } }}>
              Absolutely! We offer a hassle-free return policy. If you&apos;re not completely
              satisfied, you can return the product within [number of days] days for a full refund
              or exchange.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          style={{
            border: "1px solid grey",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
            style={{
              backgroundImage: newGradient,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Typography component="h3" variant="h6">
              What makes your product stand out from others in the market?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6" gutterBottom sx={{ maxWidth: { sm: "100%", md: "70%" } }}>
              Our product distinguishes itself through its adaptability, durability, and innovative
              features. We prioritize user satisfaction and continually strive to exceed
              expectations in every aspect.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          style={{
            border: "1px solid grey",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header"
            style={{
              backgroundImage: newGradient,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Typography component="h3" variant="h6">
              Is there a warranty on the product, and what does it cover?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6" gutterBottom sx={{ maxWidth: { sm: "100%", md: "70%" } }}>
              Yes, our product comes with a [length of warranty] warranty. It covers defects in
              materials and workmanship. If you encounter any issues covered by the warranty, please
              contact our customer support for assistance.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
