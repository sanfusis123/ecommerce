import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CartCard from '../component/cartCard';
import { Typography } from '@material-ui/core';
import {connect} from 'react-redux';
import BillingTable from '../component/billingTable';



const useStyles = makeStyles((theme) => ({
   title:{
       margin: theme.spacing(3)
   },
   bill:{
       margin: theme.spacing(5)
   }
}));


const Cart = (props)=>{
    const classes = useStyles();

  

    return(
             <div>
                   <Typography variant='h5' align='center' className={classes.title}>You have the {props.cardProd.length} Itmes in Cart</Typography>
                    
                 <Grid container spacing={2} justify='center'>
                     <Grid item>
                   {
                    
                    props.cardProd.map((p , i)=>(
                       <CartCard key={i} product={p}/>
                   ))

                   }
                     </Grid>
                     
                     <Grid item  className={classes.bill}>
                      
                      <BillingTable />
                    
                     </Grid>

                 </Grid>
            
             </div>
    )
}

const mapStateToProps = (state)=>({
     cardProd : state ? state.cartProduct : []
})
export default connect(mapStateToProps , undefined)(Cart);