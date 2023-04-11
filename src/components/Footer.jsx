import * as React from "react";
import Container from "@mui/material/Container";
// import Image from "next/image";
// import Link from "@/src/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
export default function Footer() {
  return (
    <Paper
      sx={{ marginTop: "calc(10% + 60px)", bottom: 0 ,backgroundColor: "#4AEDC4" ,position:"fixed" ,width:"100vw"}}
      component="footer"
      square
      variant="outlined"
     
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          {/* <Link href="/">
            {/* <Image priority src="/Logo.svg" width={75} height={30} alt="Logo" /> */}
          {/* </Link> */}
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright ©2023 Coded by humEyra
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
