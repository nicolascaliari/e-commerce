import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import {useStateValue} from '../StateProvider';

export default function ButtonAppBar() {
  const [{basket} , dispatch] = useStateValue();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to='/'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            eCommerce
          </Typography>
          <Button color="inherit">Nicolas Caliari</Button>
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
