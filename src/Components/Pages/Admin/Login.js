import React,{ useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Login=() =>{
  const [data, setData]=useState({
    
    email:"",
    password:""
  
  }) 
  const [error,setError]=useState()

const handleChange=({currentTarget:input})=>{
setData({...data,[input.name]:input.value})
}

  const handleSubmit=async(e)=>{
    
    e.preventDefault();
   try{
      const url="http://localhost:4001/api/user/login";
      const {data:res}=await axios.post(url,data)
      
      localStorage.setItem("token",res.data)
      window.location="/Home"
      console.log(res.message)
     console.log(data)
   }
   catch(error){
    if(error.response && error.response.status >=400 &&error.response.status <=500){
       setError(error.response.data.message)
    }

   }

  }

  const theme = createTheme();
  
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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
         
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
          
            <Grid item xs={12} >
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={data.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                value={data.password}
                onChange={handleChange}
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
              
              {error &&<Grid item xs={8}>{error}
                </Grid>}
            
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/Register" >
                Not have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>

  )
      }

export default Login;