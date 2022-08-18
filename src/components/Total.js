import { Button } from '@mui/material';
import accounting from 'accounting'
import React from 'react'
import '../App.css';
import {getBasketTotal} from "../reducer"
import {useStateValue} from '../StateProvider';

export const Total = () => {
  const [{basket} , dispatch] = useStateValue();
  return (
    <div className='contenedor-total'>
        <h5>Total item: {basket?.length}</h5>
        <h5>{accounting.formatMoney(getBasketTotal(basket), "$")}</h5>
        <Button className='boton' variant="contained" color="secondary">Check out</Button>
    </div>
  )
}

export default Total;
