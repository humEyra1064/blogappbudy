import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useSelector } from 'react-redux';

export default function Profile() {
  const {currentUser , email, bio,image}= useSelector((state)=>state.auth)
  return (
      <Card sx={{mt:"4rem"}}>
    <Card sx={{ maxWidth: 350  ,mt:"1rem",margin:"auto", alignItems:"center"}}>

      <CardActionArea  >

        <CardMedia
          component="img"
          height="300"
          
          image={image}
          alt="green iguana"
          sx={{mt:"2rem",mb:"2rem" }}
        />

        <CardContent>

          <Typography gutterBottom variant="h5" component="div">
           {`User Name:${currentUser}`}
          </Typography>

          <Typography gutterBottom variant="h5" component="div">
          {`Email:${email}`}
          </Typography>

          <Typography gutterBottom variant="h5" component="div">
          {`Bio:${bio}`}
          </Typography>

         

        </CardContent>
      </CardActionArea>
    </Card>
    </Card>
   
  );
}


