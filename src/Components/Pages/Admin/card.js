import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import { Link }from 'react-router-dom';
const CardDisplay = () => {

    const [product,setProduct]=useState("")
useEffect(()=>{

    const fetchData =async()=>{
        const response= await fetch("http://localhost:4001/api/cars")
        const json =await response.json()
        console.log("Product",json);
       
       if(response.ok){ setProduct(json)}
    };
    fetchData()
},[])

  return (
    
        <Grid container rowSpacing='4rem'  mt={'4rem'} columnSpacing={{xs:1,sm:2,md:3}} xs={{width:'100%'}}>
        
          {product&& product.map((products)=> { 
return(
    <Grid item xs={4} >
<Card sx={{ maxWidth: 400,height:"350px" ,marginLeft:'0.9rem' ,marginRight:"0.9rem",marginBottom:"50px", marginTop:"-80px"}}  key={products._id} >
  <CardActionArea>
    <CardMedia
      component="img"
      height="200"
      image={products.imageUrl}
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div" boxShadow={''}>
       {products.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {products.brandModel}
</Typography>
       
    </CardContent>
    <CardActions>
      <Link to={`/singleCar/${products._id}`}>
      <Button variant='contained' style={{textDecorationLine:"none"}}> See More </Button>
      </Link>
    </CardActions>
  </CardActionArea>
</Card>
</Grid>
)
})

}

    </Grid>

  );
  
}

export default CardDisplay;