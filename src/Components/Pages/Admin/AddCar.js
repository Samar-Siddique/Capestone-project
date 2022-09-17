import React, {  useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();
const AddCar = () => {
   const [data, setData]=useState({
    title:"",
    imageUrl:"",
    brandModel:"",
    priceHalfDay:"",
    pricePerDay:"",
    pricePerWeek:"",
    pricePerMonth:""
  }) 

  const navigate=useNavigate()
  const [error,setError]=useState()

const handleChange=({currentTarget:input})=>{
setData({...data,[input.name]:input.value})
}


  const handleSubmit=async(e)=>{
    e.preventDefault();
     try{
      const url="http://localhost:4001/api/cars";
      const {data:res}=await axios.post(url,data)
      navigate("/Home")
      console.log(res.message)
     console.log(data)
     }
     catch(error){
      if(error.response && error.response.status >=400 && error.response.status <=500){
        setError(error.response.data.message)
      }
     }
  }

  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#1976D2' }}>
         
        </Avatar>
        <Typography component="h1" variant="h5">
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="title"
                required
                fullWidth
                id="title"
                label="Title"
                value={data.title}
                onChange={handleChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="imageUrl"
                label="imageUrl"
                name="imageUrl"
                value={data.imageUrl}
                onChange={handleChange}
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id=" brandModel"
                label=" Brand Model"
                name="brandModel"
                value={data.brandModel}
                onChange={handleChange}
                autoComplete=" brandModel"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="priceHalfDay"
                value={data.priceHalfDay}
                onChange={handleChange}
                label="Price Half Day"
                type="priceHalfDay"
                id="priceHalfDay"
                autoComplete="priceHalfDay"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="pricePerDay"
                value={data.pricePerDay}
                onChange={handleChange}
                label="Price Per Day"
                type="pricePerDay"
                id="pricePerDay"
                autoComplete="pricePerDay"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="pricePerWeek"
                value={data.pricePerWeek}
                onChange={handleChange}
                label="Price Per Week"
                type="pricePerWeek"
                id="pricePerWeek"
                autoComplete="pricePerWeek"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="pricePerMonth"
                value={data.pricePerMonth}
                onChange={handleChange}
                label="Price Per MOnth"
                type="pricePerMonth"
                id="pricePerMonth"
                autoComplete="pricePerMonth"
              />
            </Grid>
            {error &&<Grid item xs={6} ></Grid>}
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, }}
          >
            AddNew
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
             
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
);
  
}
export default AddCar