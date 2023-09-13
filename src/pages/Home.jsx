import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Home = () => {
  return (
    <div>
         <div className='home_background_img'>
                
                <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet distinctio libero sapiente quis facilis vero ipsum aperiam velit beatae, vel quisquam, assumenda architecto sit, quo perspiciatis officiis pariatur laudantium modi.
                </h1>
                Home
        </div>


{/* simple section  */}

        <section className='py-5'>
            <div className='d-flex justify-content-center test py-3'> 
            <h3 style={{ borderBottom: '2px solid green', display: 'inline-block', paddingBottom: '7px'}}>
                It's Simple
            </h3>
            </div>
             


            <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={require("../assets/card-1.jpg")}
            />

            <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{color:"#07A6A9"}}>
                Select the product
                </Typography>
                <Typography variant="body2" color="text.secondary">
                You need
                </Typography>
            </CardContent>
         </Card>


        </section>




    </div>
  )
}
