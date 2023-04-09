import React from "react";
import {Box, Grid, Card, CardActions, CardContent, CardMedia, Typography, Button} from "@mui/material";

const groceryList = [
    {
        id: 1,
        name:"Apples",
        image:"https://thumbs.dreamstime.com/b/apple-20960403.jpg",
        price:"1.5",
        quantity: 1,
    },
    {
        id: 2,
        name:"Bananas",
        image:"https://thumbs.dreamstime.com/b/banana-close-up-ripe-35171724.jpg",
        price:"1",
        quantity: 1,
    },
    {
        id: 3,
        name:"Oranges",
        image:"https://thumbs.dreamstime.com/b/orange-fruit-fresh-cutting-slicing-image-background-52381569.jpg",
        price:"1.5",
        quantity: 1,
    },
    {
        id: 4,
        name:"Pears",
        image:"https://thumbs.dreamstime.com/b/fresh-pear-isolated-white-background-fresh-pear-115849536.jpg",
        price:"1.5",
        quantity: 1,
    },
    {
        id: 5,
        name:"Strawberries",
        image:"https://thumbs.dreamstime.com/b/strawberry-fresh-close-up-36986181.jpg",
        price:"2.5",
        quantity: 1,
    },
    {
        id: 6,
        name:"Blueberries",
        image:"https://thumbs.dreamstime.com/b/blueberry-background-ripe-blueberries-closeup-juicy-fresh-picked-57234601.jpg",
        price:"2.5",
        quantity: 1,
    },
];

export default function GroceryCardGrid(){
    return(
        <Box sx={{ flexGrow: 1, padding: 2}}>
            <Grid container spacing={{ xs:2, md:3}} columns={{ xs:4, sm:8, md:12}}>
            {groceryList.map((item) => (
              <Grid item xs={2} sm={4} md={4} keys={item.id}>
               <Card sx={{maxWidth: 345}}>
                <CardMedia component="img" height="140" image={item.image}/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">{item.name}</Typography>
                  <Typography variant="body2" color= "text.secondary">{item.description}</Typography>
                  <Typography variant="body2" color= "black">${item.price}</Typography>
                </CardContent>
               
                <CardActions sx={{display: "flex", justifyContent:"space-between"}}>
                  <Button size="small">Add To Cart</Button>
                  <Typography>{item.quantity}</Typography>
                </CardActions>
               </Card>
              </Grid>
            ))}
            </Grid>
            </Box>
    );
}