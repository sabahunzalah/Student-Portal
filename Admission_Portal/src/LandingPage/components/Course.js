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
      // label: "Admission Page",
      imgPath:
        "https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/451201430_122166048458153270_1004192504346012756_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=oKn1tjvg7fMQ7kNvgEfPU03&_nc_ht=scontent.fkhi16-1.fna&oh=00_AYDFVShezBqxqfTZ6JFyaj2oLbpy4lFlK4u_hB8Vskm4Yw&oe=66A96A43",
    },
    {
      label: "AI & Chatbot",
      imgPath:
        "https://scontent.fhdd3-1.fna.fbcdn.net/v/t39.30808-6/451959816_122166048164153270_7938274966540834180_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFmIeqT9C2AnICkhtA22GHa7A_KRoyJa5LsD8pGjIlrkv5PhIdujptuANbK5EuYlrquuZTJukohXWHAxPDiB11r&_nc_ohc=aheu04slihMQ7kNvgECb2-r&_nc_zt=23&_nc_ht=scontent.fhdd3-1.fna&oh=00_AYBQCcLa7JiucUpguP5G1e5FEg8gU3f5-MEu3h_CZYqc6A&oe=66A98015",
    },
    {
      label: "Network",
      imgPath:
        "https://scontent.fhdd3-1.fna.fbcdn.net/v/t39.30808-6/451628973_122166047702153270_9156619838719669026_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG5pY6QwQAckYd1UYMf2tYA1j73tY8MPDHWPve1jww8MVNRFQ5CVNFi7D5jKrKVVi29KB-FIubDSY6PdcjopXBB&_nc_ohc=gcQuieKcDLoQ7kNvgFpaXYM&_nc_zt=23&_nc_ht=scontent.fhdd3-1.fna&oh=00_AYBE_1oC0t6IrwYm0CihY9GZl2R_blYkqT7_vqBQHQpZjQ&oe=66A9664A",
    },
    {
      label: "Digital Marketer",
      imgPath:
        "https://scontent.fhdd3-1.fna.fbcdn.net/v/t39.30808-6/451736239_122166047510153270_477636444564468988_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF4zo75g4mAjdhXGApjMpwIWTvOIUD5jupZO84hQPmO6t36clKALpz6bu1QumxEpAKeTRlpD-DPlgyUXkEtar9y&_nc_ohc=WzmP061aGwIQ7kNvgH6o83j&_nc_zt=23&_nc_ht=scontent.fhdd3-1.fna&oh=00_AYCtFcA_BOh9mVbVJKn9vJiPwqZMI79px5CUvMuBamT-ig&oe=66A977AF",
    },
  ],
  [
    {
      // label: "AWS-Developer",
      imgPath:
        "https://scontent.fhdd3-1.fna.fbcdn.net/v/t39.30808-6/451193227_122166047234153270_9177756026488009273_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHZAW78XpTFfEvofmlDTZwxmg9-Hrucb1yaD34eu5xvXJWGUK4nF82GJFGUjhRuk-Jb7O0qqPey_f47yn5gHwY0&_nc_ohc=iVby7giNPMAQ7kNvgHdO54R&_nc_zt=23&_nc_ht=scontent.fhdd3-1.fna&oh=00_AYAroT0eerJigUbDYzX4V7LXFRFTolyKEZiq0XB3H7mCcQ&oe=66A9557A",
    },
    {
      // label: "Software Quality  Assurance",
      imgPath:
        "https://scontent.fhdd3-1.fna.fbcdn.net/v/t39.30808-6/451859342_122166046862153270_2640537514957874112_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGK1xqBJnkDB5NoBiCah6gSjgqszPiEdbqOCqzM-IR1unJ9zmYG_FajehOr5ombbRFTbFRihqFYdG45-40KZZzt&_nc_ohc=ykw9ooqTPd0Q7kNvgGdsURs&_nc_zt=23&_nc_ht=scontent.fhdd3-1.fna&oh=00_AYCDqlrrI-Ttiq6OIcV6fonnRSQR97YPBBkpM18zWlSbuw&oe=66A97319",
    },
    {
      label: "Security Professional",
      imgPath:
        "https://scontent.fhdd3-1.fna.fbcdn.net/v/t39.30808-6/451861923_122166046184153270_7152945010888344962_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHm2Gg_h5UZD8k7OACEtlsttRsBEGyVjbe1GwEQbJWNt1JvKiYeD4Y1cNc093qOL3yD-F9570Qw8ndAExkV4YKu&_nc_ohc=eSeLazeKHQEQ7kNvgFo8AK3&_nc_zt=23&_nc_ht=scontent.fhdd3-1.fna&oh=00_AYDrVDouxJcY8ILHesuqRITzkVQYVffnMFT8mLL7DhSIcA&oe=66A965B3",
    },
    {
      label: "AI & DATA SECIENCE",
      imgPath:
        "https://scontent.fhdd3-1.fna.fbcdn.net/v/t39.30808-6/452172543_122166044774153270_7244335484248279039_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHDVbkCirv_ZXS6udycviwtCrLrVz_55GEKsutXP_nkYSJHJHbYm1s_jVwYyb9_EHZuCSmepkFTTvVNPggvCb_1&_nc_ohc=DT4pvQ1GywEQ7kNvgFDTHYZ&_nc_zt=23&_nc_ht=scontent.fhdd3-1.fna&oh=00_AYAj7hCPdAv1fojs_cq0aSo5RUWVq3tjsIvzzCTuSsg0Ew&oe=66A959D4",
    },
  ],
  [
    {
      // label: "CCNA ENGINEER",
      imgPath:
        "https://scontent.fhdd3-1.fna.fbcdn.net/v/t39.30808-6/451874706_122166044324153270_1615935905362204661_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHeklDIFujUYHpBVkz0I72pjZIMPbKgjsGNkgw9sqCOwbBG8542qNhKf3S4yV33pdxampcI7DbtKt4JJnBAABgt&_nc_ohc=VXkNYFVU4wEQ7kNvgE-rOqx&_nc_zt=23&_nc_ht=scontent.fhdd3-1.fna&oh=00_AYAx9eX0Akq0MLnH0-NwGebuQOW-1Jt3Zp_p6RQgtSEQUQ&oe=66A97196",
    },
    {
      // label: "AMAZON",
      imgPath:
        "https://scontent.fhdd3-1.fna.fbcdn.net/v/t39.30808-6/452170331_122166042920153270_7675103274640941989_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEIPOVY2lqpOLpHG2kU0VagZmoqtLxt6Y1maiq0vG3pjXT1N5fS5JNoEUk6XHNiHpVrgBPjjcsD_EQ0Q89XGDBD&_nc_ohc=lKrC52NFjIgQ7kNvgEhWqQ_&_nc_zt=23&_nc_ht=scontent.fhdd3-1.fna&oh=00_AYC0aZw9FPHVI-9MG2_qgXXaGX9yQbVudHhyd9eCNkx0ZA&oe=66A96EE7",
    },
    {
      label: "UI / UX ",
      imgPath:
        "https://scontent.fhdd3-1.fna.fbcdn.net/v/t39.30808-6/451872245_122166042674153270_5144669098624301575_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEz3re9XByKYeKKYU4D_ZQhLsOVE4mRHxQuw5UTiZEfFD7evMuKB_PzBgYiPmJn8bge0IujbI8eTbxkGy4v4l6F&_nc_ohc=jBBOdUvmg_sQ7kNvgFgMATa&_nc_zt=23&_nc_ht=scontent.fhdd3-1.fna&oh=00_AYARoabNkpAIzlA5h7J7mECNYMzdB8keG0aCclQ8WbDr9g&oe=66A96814",
    },
    {
      label: "Result Day",
      imgPath:
        "https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/441904981_122157303326153270_5982188643624731929_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEuH5Te3lFavTkKlhLoTSZMn72g6UnKfGefvaDpScp8Z-jNDkilApQZiP4kxe5oKhgmlufvp4qgAeE-J_cFnnDN&_nc_ohc=aS-kgISo2FAQ7kNvgGsDE9w&_nc_ht=scontent.fkhi16-1.fna&oh=00_AYCvaoOfZBbAhCQrl4PZgXz-Wp3dOmHNIgQKe4yhfr3SZA&oe=66A9AD3A",
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
          height: 50,
          pl: 2,
        }}
      >
        <Typography component="h2" variant="h2" color="text.primary">
          New Courses
        </Typography>
      </Box>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          marginLeft: "20px",
          padding: "25px",
          height: 60,
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
              <Card key={image.label} sx={{ maxWidth: 350, margin: 1 }}>
                <CardMedia component="img" height="250" image={image.imgPath} />
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
