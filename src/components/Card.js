import { FaHeart, FaCartPlus } from 'react-icons/fa';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const CustomCard = (props) => {
    return (
        <div className="Card">
     <Card sx={{ width: 200 }}>
        <CardMedia
          sx={{ height: 100 }}
          image={props.item.productImage}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          {props.item.productName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.item.productPrice}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
              <FaHeart/>
          </Button>
          <Button size="small">
              <FaCartPlus/>
          </Button>
        </CardActions>
      </Card>
  
        </div>
   
    )
}

export default CustomCard