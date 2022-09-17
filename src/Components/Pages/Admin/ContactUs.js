import React, { useState } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


  export const ContactUs = () => {
    const form = useRef();
   const [data,setData]=useState({name:"",email:"",phone:"",vehicle:"",message:""})
   

const handleChange=({currentTarget:input})=>{
setData({...data,[input.name]:input.value})
}

    const sendEmail = (e) => {
          e.preventDefault();

       emailjs.sendForm('service_ki51h7u', 'template_souuzrc', form.current, '6URe4npAi_AGwIU9E')
        .then((result) => {
            console.log(result.text);
            alert("Email has been Sent")
        }, (error) => {
            console.log(error.text);
        });
       e.target.reset()
    };


    const theme = createTheme();
    return (
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        
        <Typography gutterBottom variant='h3' align='center'>
          ContactUs
        </Typography>
        
        
        <Box component="form" noValidate ref={form} onSubmit={sendEmail} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
          
            <Grid item xs={12}  >
              <TextField
                required
                style={{width:300 , marginLeft:'50px'}}
                id="name"
                label="Name"
                name="user_name"
                value={data.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                style={{width:300,  marginLeft:'50px'}}
                name="user_email"
                value={data.email}
                onChange={handleChange}
                label="Email"
                type="email"
                id="email"
              />
            </Grid>
            <Grid item xs={12}  >
              <TextField
                required
                style={{width:300,  marginLeft:'50px'}}
                id="phone"
                label="Phone-No"
                name="phone_no"
                value={data.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}  >
              <TextField
                style={{width:300,  marginLeft:'50px'}}
                required
                id="vehicle"
                label="Vehicle"
                name="vehicle"
                value={data.vehicle}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}  >
              <TextField
                style={{width:400}}
                required
                id="message"
                label="Message"
                name="message"
                multiline rows={5}
                value={data.message}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
            <Button
            style={{width:100, marginLeft:'150px'}}
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
           Send
          </Button>
            </Grid>
          </Grid>
        </Box>
        </Box> 
        </Container>
        </ThemeProvider>
    )
  };

export default ContactUs;