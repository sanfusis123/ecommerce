import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {api} from '../config';
import TextFiled from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {removeCartProd, productQty} from '../redux/product';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),  
    display: 'flex',
    minWidth:300,
    maxWidth:'100%',
    height:'300'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '40%',
    height:'8rem'
  },
  quantity:{
      margin:theme.spacing(3),
  }
  
}));


const CartCard = ({product={name: '',_id:'',price:''}, removeCartProd, productQty})=>{
    const classes = useStyles();
  const [pqty ,setPqty] = useState(1);

   const removeHandler = (id)=>()=>{
    removeCartProd(id);
   }
   const handleChange =(id)=>(e)=>{
      const val = e.target.value > -1 ?  e.target.value : 1;

      setPqty(val);
    productQty(val , id)
   }
    return(
             <div>
                 <Card className={classes.root}>
                 <CardMedia
                    className={classes.cover}
                    image={product.photos[0].imageUrl}
                    title={product.name}
                   />


                 <div className={classes.details}>
                 <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                    {product.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                       Price &nbsp; {product.price}
                </Typography>
                <TextFiled type='number' label='Quantity' value={pqty} className={classes.quantity}
                   onChange={handleChange(product._id)}/>
                <Button variant='contained'color='secondary' onClick={removeHandler(product._id)} >Remove</Button>
                </CardContent>
                </div>
                 </Card>

             </div>
    )
}

const mapDispatchToProps = (dispatch)=>({
           removeCartProd : (id)=>dispatch(removeCartProd(id)),
           productQty : (qty , id)=>dispatch(productQty(qty , id))
                
})
export default connect(undefined ,mapDispatchToProps)(CartCard)
