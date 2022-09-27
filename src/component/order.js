import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { orderGet } from '../apimethod/product';
import { api } from '../config';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

 function OrderCard({order}) {
  const classes = useStyles();
  console.log("prorps ", order);
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h6">
           ORDER_ID :  {order._id}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
                 AMOUNT :   {order.amount}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
        <Typography variant="subtitle1" color="textSecondary">
            STATUS :  {order.status}
          </Typography>
          
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        src={`${api}/product/photos/${order.product}`}
        title="Live from space album cover"
      />
      <img src={`${api}/product/photos/${order.product}`}/>
    </Card>
  );
}



const  Order = ()=>{
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        orderGet().then((data)=>{
            if(!data) return  console.log("no Orders");
            
            setOrders([...data]);
            
        
        })


     },[])
     return (
        <>
         <div className={"justify : center"}>
         <Typography component="h5"  justify="center" variant="h3">
            YOU HAVE  {orders.length} ORDERS
          </Typography>
         
         
         </div>
         <div>
        {
            orders.map((or,i)=>(
                <OrderCard order = {or} key ={i}/>
        ))
        }
        </div>
         
       
        </>
     )
}

export default Order;


