import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from "@mui/icons-material/Instagram";
const iconLinkdn = {
  fontSize:"50px",
  color:"black",
  margin:"1rem",
  "&:hover":{
      color:"blue",
     
  }
}
const iconTwtr = {
  fontSize:"50px",
  color:"black",
  margin:"1rem",
  "&:hover":{
      color:"#00acee",
      
  }
}
const iconIns = {
  fontSize:"50px",
  color:"black",
  margin:"1rem",
  "&:hover":{
      color:"#E1306C",
  
  }
}
const iconYou = {
  fontSize:"50px",
  color:"black",
  margin:"1rem",
  "&:hover":{
      color:"red",
   
  }
}
const iconGthb = {
  fontSize:"50px",
  color:"black",
  margin:"1rem",
  "&:hover":{
      color:"red",
      
  }
}

const About = () => {
  return (
    <Box
    sx={{
      width: "100%",
      height: "94vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
     
    }}
    
    >
    <Box
      sx={{
        width: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      
      }}
    
    >
      <Paper elevation={12} sx={{ borderRadius:"20px"}}>
        <img src="https://cdn.kibrispdr.org/data/136/emoji-hijab-iphone-48.jpg" width={400}/>

        <Typography sx={{ textAlign: "center", fontSize: "28px" }}>
          Hümeyra
        </Typography>
        <Typography sx={{ textAlign: "center", fontSize: "28px" }}>
          Frontend Developer
        </Typography>
        <Box>
          <Link target="blank" to="">
           <LinkedInIcon sx={iconLinkdn}/>
          </Link>
          <Link target="blank" to="">
           <GitHubIcon sx={iconGthb}/>
          </Link>
          <Link target="blank" to="">
           <TwitterIcon sx={iconTwtr}/>
          </Link>
          <Link target="blank" to="">
           <InstagramIcon sx={iconIns}/>
          </Link>
          <Link target="blank" to="https://www.youtube.com/channel/UChPOg76pva-S9q9ZYxII08g">
           <YouTubeIcon sx={iconYou}/>
          </Link>


        </Box>

      </Paper>
    </Box>
    </Box>
  )
}

export default About
