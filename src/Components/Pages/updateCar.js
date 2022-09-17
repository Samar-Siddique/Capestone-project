import React, { useState ,useEffect} from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const UpdateCar = () => {
const {id}=useParams()
  const [data, setData] = useState({
    title: "",
    imageUrl: "",
    brandModel: "",
    priceHalfDay: "",
    pricePerDay: "",
    pricePerWeek: "",
    pricePerMonth: "",

  })
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4001/api/cars/${id}`)
      const json = await response.json()
      console.log("Product", json);

      if (response.ok) { setData(json) }
    };
    fetchData()
  }, [id])
  const [error, setError] = useState()
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value })
  }

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const url = `http://localhost:4001/api/cars/${id}`;
      const { data: res } = await axios.patch(url, data)
      navigate(`/singlecar/${id}`)
      console.log(res.message)
      console.log(data)
    }
    catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message)
      }

    }

  }

  return (
    <div style={{ height: "100vh" }}>
      <Container component="main" maxWidth="xs"  >
        <CssBaseline />
        <Box
          sx={{

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography component="h1" variant="h5" marginTop={10}>
            Update Car
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
                  label="Image Url"
                  name="imageUrl"
                  value={data.imageUrl}
                  onChange={handleChange}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="brandMOdel"
                  label="BrandModel"
                  name="brandModel"
                  value={data.brand}
                  onChange={handleChange}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="priceHalfDay"
                  label="Half Day Price"
                  name="priceHalfDay"
                  value={data.priceHalfDay}
                  onChange={handleChange}
                  autoComplete="priceHalfDay"
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="pricePerDay"
                  label="Price Per Day"
                  name="pricePerDay"
                  value={data.pricePerDay}
                  onChange={handleChange}
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
                  label="Price Per Month"

                  id="pricePerMonth"
                  autoComplete="pricePerMonth"
                />

              </Grid>
                {error && <Grid item xs={6}>{error}
                </Grid>}
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update
            </Button>
          </Box>
        </Box>

      </Container>
    </div>

  )
}

export default UpdateCar;