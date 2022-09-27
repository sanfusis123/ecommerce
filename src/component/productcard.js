import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, Paper, Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { api } from '../config';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCartProduct} from '../redux/product';
const useStyle = makeStyles(theme =>({
    imgContainer : {
        width: '100%',
        height:400
    },
    paper:{
        paddingBottom: theme.spacing(3),
        minWidth:300,
        maxWidth:412,
        [theme.breakpoints.up('md')]: {
            minWidth: 400,
            maxWidth:450
          },
    },
    titPrice:{
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3),
    },
    
}))

const ProductCard = ({product , cartprod})=>{
     const classes = useStyle();
     const addItemtoCart = (prodcut)=>()=>{
            cartprod(product);

     }


          return(<Grid item xs >
              <Paper elevation={3} className={classes.paper}>
                    <Grid container alignItems='center' direction='column' >
                         <Grid item>
                         <img src={product.photos ? product.photos[0].imageUrl: ''} alt='productImage' className={classes.imgContainer} />
                         </Grid>
                         <Grid item  className={classes.titPrice}>
                                  
                                   <Typography variant='h6' align='justify'>
                                       {product.name}  &nbsp;&nbsp;  Price : $ {product.price}
                                   
                                   </Typography>
                                   <Typography variant='h6' align="left">
                                       Description :
                                   </Typography>
                                   <Typography variant='subtitle1' align="right" gutterBottom={true}>
                                         {product.description}
                                       </Typography>

                         </Grid>
                         <Grid item>
                             <Grid container justify='space-between' spacing={6}  direction='row' >
                               <Grid item>
                                    
                               <Button variant="contained"  component={Link} to={`/product/${product._id}`}>
                             View Details
                            </Button>
                            </Grid>
                            <Grid item>
                            <Button variant="contained" onClick={addItemtoCart(product)} >
                            Add Cart
                            </Button>
                                </Grid>
                             </Grid>
                         </Grid>



                    </Grid>
                   </Paper>
          </Grid>)




}

const mapDispatchToProps = (dispatch)=>({
        
    cartprod : (prod)=> dispatch(getCartProduct(prod))
})

export default connect(undefined , mapDispatchToProps)(ProductCard);

