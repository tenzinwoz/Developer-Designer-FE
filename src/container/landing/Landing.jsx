import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import bgImg from "../../assets/images/office-bg.png";
import LogoImage from "../../assets/images/showcase-logo.png";
const styles = {
  paperContainer: {},
};
export default function Landing() {
  return (
    <Box style={styles.paperContainer}>
      <Paper>
        <img src={LogoImage} alt="logo" />
      </Paper>
    </Box>
  );
}
