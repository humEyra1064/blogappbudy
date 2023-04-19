import Box from "@mui/material/Box";

import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import useBlogCall from "../hooks/useBlogCalls";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function NewBlog( ) {

  const { postBlogData ,getBlogData, putBlogData } = useBlogCall();
  
  const {categories} =useSelector((state)=>state.blog)

    const [info, setInfo] = useState({
        title:"",
        image:"",
        category:"0",
        status:"",
        content:"",
        slug:"",

    })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    
        postBlogData("blogs", info);
    
   
    setInfo({ title: "", image: "", category: "0", status: "", content:"",slug:"", });
  };

  const newBlogStyle ={

    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,


  }
  useEffect(() => {
    getBlogData("categories");
  }, []);

  return (
  
    
        <Box sx ={newBlogStyle}>
          <Typography sx={{textAlign:"center" ,fontSize:"1.3rem" ,fontWeight:"bold",marginBottom:"1.5rem" ,color: "#4AEDC4"}}>
            New Blog
          </Typography>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            onSubmit={handleSubmit}
            component="form"
          >
            <TextField
              label="Title"
              name="title"
              id="title"
              type="text"
              required
              variant="outlined"
              value={info?.title || ""}
              onChange={handleChange}
            />
            <TextField
              label="Image"
              name="image"
              id="image"
              type="url"
              required
              variant="outlined"
              value={info?.image || ""}
              onChange={handleChange}
            />
              <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select
          align="left"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="category"
          value={info?.category}
          label="Categories"
          onChange={handleChange}
        >
          <MenuItem value={0}>Select Category...</MenuItem>
          {categories?.map((item, index) => (
            <MenuItem key={index} value={item?.id}>
              {item?.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
              label="Status"
              name="status"
              id="status"
             
              required
              select
              variant="outlined"
              value={info?.status }
              onChange={handleChange}
            >
              <MenuItem value="please">Please Choose </MenuItem>
              <MenuItem value="d">Draft </MenuItem>
              <MenuItem value="p">Published </MenuItem>

              </TextField>

            <TextField
              label="Content"
              name="content"
              id="content"
              type="text"
              multiline
              rows={3}
             
              required
              variant="outlined"
              value={info?.content || ""}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" sx={{backgroundColor: "#4AEDC4"}}>
             New Blog
            </Button>
          </Box>
        </Box>
      
    
  );
}