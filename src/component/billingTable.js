import React, { useState } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import {orderPost, payment} from '../apimethod/product';
const useStyles = makeStyles((theme)=>({
  table: {
    minWidth: 380,
    maxWidth:'100%',
  },
  btn:{
      margin : 10,
      float:'right'
  },
  textWidth: {
    minWidth: 330,
    maxWidth: 500,
    margin: theme.spacing(2),
   
   [theme.breakpoints.up('md')]: {
        minWidth: 500,
        maxWidth: 600,
    
        },  
   },
 
}));



 const BillingTable = (props)=> {
  const classes = useStyles();
  let total =0;
  const [address , setAddress] = useState('');
  const table = ()=>{
      
     return props.allProd.map((p,i)=>{
          let qty = p.qty >0 ? p.qty : 1;
          let subTotal = p.price *qty
         total += subTotal;

        return (
            <TableRow key={i}>
            <TableCell>{p.name}</TableCell>
            <TableCell align="right">{p.price}</TableCell>
            <TableCell align="right">{qty}</TableCell>
            <TableCell align="right">{subTotal}</TableCell>
          </TableRow>

        )
      })
  }
 
 const paynow = ()=>{
      props.allProd.forEach((p)=>{
            p.product = p._id;
            delete p._id;
            delete p.createdAt;
            delete p.updatedAt;
            delete p.__v;
            p.qty  = p.qty ? p.qty : 1
      })

     const order = {
      products : props.allProd,
        amount : total,
        address
      

     }
    orderPost(order).then((data)=>{
      if(data.Error){
         return console.log(data.Error);
      }


      payment(total, data.orderId).then((data)=>{
        if(!data){
          return console.log('data is not found');

        }
        if(data.error){
          return console.log(data.error)
        }
       // const fromdata = new DOMParser().parseFromString(data.htmlData , "text/html");
        //console.log(fromdata);
        const action= `https://securegw-stage.paytm.in/theia/processTransaction`;
        const form = document.createElement('form')
        form.setAttribute('method', 'post')
        form.setAttribute('action', action)
       form.innerHTML = data.htmlData;
       document.body.appendChild(form);
        form.submit();
      })

      })

      
 }
  const handleChange = (e)=>{
       setAddress(e.target.value);
     
  }

  return (
    <TableContainer component={Paper}>
      <Typography variant='h5' align='center' className={classes.title}>Billing </Typography>
      
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
                    
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Sub-Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           {table()}
            <TableRow>
                <TableCell></TableCell>
                <TableCell align='right'></TableCell>
                <TableCell align='right'>Total</TableCell>
                <TableCell align='right'>{total}</TableCell>
            </TableRow>
        </TableBody>
   
      </Table>
      <Typography justify='center' align='center'>Address: </Typography>
      <TextField
                    id="outlined-secondary"
                    label="Address"
                    variant="outlined"
                    color="primary"
                    className={classes.textWidth}
                    onChange={handleChange}
                  
                />
     
      <Button variant='contained' className={classes.btn} color='primary' onClick={paynow}>CheckOut</Button>
            
   </TableContainer>
  );
}

const mapStateToProps = (state)=>({
    allProd : state ? state.cartProduct : []
})

export default connect(mapStateToProps, undefined)(BillingTable);

