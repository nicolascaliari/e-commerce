import { Grid,  Typography } from "@mui/material";
import React from "react";
import CheckoutCard from "./CheckoutCard";
import Total from "./Total";
import {useStateValue} from '../StateProvider';



const CheckoutPage = () => {
   
    const [{basket} , dispatch] = useStateValue();
  
    function FormRow() {
        return (
            <React.Fragment>
                {basket?.map((item) => (
                        <Grid item xs={12} sm={8} md={6} lg={4}>
                            <CheckoutCard key={item.id } product={item} />
                        </Grid> 
                ))}
            </React.Fragment>
        )
}



return (
    <div>
        <Grid container spacing={3}>
        <Grid item xs={12}>
            <Typography align="center" gutterBottom variant="h4">
                Shopping cart
            </Typography>
        </Grid>

        <Grid item xs={12} sm={8} md={9} container spacing={2}>
            <FormRow />
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
        <Typography align="center" gutterBottom variant="h4">
            <Total />
        </Typography>
        </Grid>
        </Grid>
    </div>
)
}


export default CheckoutPage;