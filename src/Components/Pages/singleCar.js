import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';



const SingleCar = () => {
  const navigate=useNavigate();
  const [car, setcar] = useState("")
  const { id } = useParams();

  console.log(id)
;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4001/api/cars/${id}`)
      const json = await response.json()
      console.log("Product", json);

      if (response.ok) { setcar(json) }
    };
    fetchData()
  }, [id])

  console.log(car)

  const handleDelete = async (e) => {

    e.preventDefault();
    try {
      const url = `http://localhost:4001/api/cars/${id}`;
      const {  res } = await axios.delete(url)
      alert("Car Deleted")
      navigate(`/home`)
      console.log(res.message)
 
    }
    catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        console.log(error.response.data.message)
      }

    }

  }
  return (
    <div style={{ height: "100vh" }}>

      

      <Grid container rowSpacing='4rem' mt={'1rem'} columnSpacing={{ xs: 1, sm: 2, md: 3 }} xs={{ width: '100%' }}>
        <Grid item xs={6} marginLeft={"1rem"}>
          <CardMedia
            component="img"
            height="300"
            width='450'
            image={car.imageUrl}
            alt="green iguana"
          />
          <Link to={'/contact'}>
          <Button variant="contained" sx={{mt:5}}>Book Now</Button>
          </Link>
        </Grid>
        <Grid item xs={5} marginLeft={'1rem'}>
          <Typography variant="h4" >{car.title}</Typography><br/>
          <Typography variant="h6" ><b>Brand Model: </b>{car.brandModel}</Typography>
          <Typography variant="h6" ><b>Half day Price:Rs  </b> {car.priceHalfDay}</Typography>
          <Typography variant="h6" ><b>Price Per Day:Rs   </b>{car.pricePerDay}</Typography>
          <Typography variant="h6" ><b>Price Per Week:Rs  </b>{car.pricePerWeek}</Typography>
          <Typography variant="h6" ><b>Price Per Month:Rs </b>{car.pricePerMonth}</Typography>
          <Link to={`/updatecar/${car._id}`}>
            <Button
            variant='contained'
            sx={{mt:3, mb:2}}
            > Update</Button>
          </Link>

          <Button
            onClick={handleDelete}
            variant='contained'
            sx={{mt:3, mb:2 ,ml:2}}
            > 
            Delete
            </Button>
        </Grid>
      
      </Grid>
    </div>

  )
}
export default SingleCar;