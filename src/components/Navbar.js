import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import {useStateValue} from '../StateProvider';
import '../App.css'

export default function ButtonAppBar() {
  const [{basket} , dispatch] = useStateValue();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link className='link' to='/'>
          <h2 className='inicio'>Inicio</h2>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            eCommerce
          
          </Typography>
          <Link className='link' to="login">
          <Button  color="inherit">Sign in</Button>
          </Link>
          <Link to="checkout-page">
          <IconButton aria-label="add to favorites">
                  <Badge badgeContent={basket?.length} color="secondary"> 
                   <ShoppingCartIcon />
                  </Badge>      
          </IconButton>
          
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
