import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import accounting from 'accounting';
import { ClassNames } from '@emotion/react';
import DeleteIcon from '@mui/icons-material/Delete';
import {useStateValue} from '../StateProvider';
import { actionTypes } from '../reducer';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CheckoutCard({product : {id, name, productType, price, image, description}}) {
  const [expanded, setExpanded] = React.useState(false);
  const [{basket} , dispatch] = useStateValue();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
const removeItem = ()=> dispatch({
  type: actionTypes.REMOVE_ITEM,
  id:id,
})



  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
         <Typography
         className={ClassNames.action}
         variant='h5'
         color='textSecondary'
         
         >
            {accounting.formatMoney(price, '$')}
         </Typography>
        }
        title={name}
        subheader="In stock"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardActions disableSpacing>
       <IconButton>
       <DeleteIcon fontSize='large' onClick={removeItem}/>
       </IconButton>
   
      </CardActions>
      
    </Card>
  );
}
