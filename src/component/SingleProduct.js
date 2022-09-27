import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';

import GridList from '@material-ui/core/GridList';
import { Button, Hidden, ListItemIcon, Typography } from '@material-ui/core';
import {singleProduct ,getRelatedProduct} from '../apimethod/product';
import {api} from '../config';
import ProductCard from './productcard';
import {connect} from 'react-redux';
import { getCartProduct } from '../redux/product';

const useStyle = makeStyles((theme)=>({
    
    paper:{
          minWidth:300,
          padding: theme.spacing(3),
          height:750
      },
      imgPaper:{
          zIndex:-10,
      },
     details:{
        zIndex:10,
         marginLeft:theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
             marginLeft:theme.spacing(-12)  
        }     
        },
     img:{
         width:'100%',
         height:700,
     },
     gridList: {
         minWidth:350,
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    
      },
     

}))


const SingleProduct = (props)=>{

           const classes = useStyle();

          const [product , setProduct]= useState({
              category:{
                   name:''
              },
              photos:[] 
          });
        const [relatedProduct ,setrelatedProduct] = useState([]);







        const loadProduct = ()=>{
            const id = props.match.params.productId;
            console.log(props.match.params.productId);
            singleProduct(id).then((data)=>{
                if(!data){
                    console.log('no data is found')
                }
                setProduct(data);
            })


           }
        const relProduct = ()=>{
            const id = props.match.params.productId;
            getRelatedProduct(id).then((data)=>{
                if(!data){
                    console.log('No data is found');
                }
              setrelatedProduct(data);
            })
        }
        useEffect(()=>{
            loadProduct();
            relProduct();
        },[]);   

        const addproducttocart = (cproduct)=>()=>{
                  props.cartprod(cproduct);

        }

                 return( 
                 <React.Fragment>
                 <Grid spacing={3} direction='row' container>
                      <Grid item xs>
                     <Paper className={classes.paper ,classes.imgPaper }>
                         {console.log(product)}
                    <GridList className={classes.gridList}  cols={1} cellHeight={750}>
                    {product.photos.map((pp , i)=>(
                        <img src={pp.imageUrl}key={i} alt={pp.imagename } className={classes.img} />
                    ))}    
                    
                           
                   </GridList>
                    </Paper>
                      </Grid>
                      <Grid item xs className={classes.details}>
                        <Paper className={classes.paper}>
                        <Typography variant='h4' align='center' gutterBottom>
                            {product.name}
                        </Typography>
                          
                      {
                      
                      [{headname : 'Description' , about:product.description},
                        {headname : 'Category' , about:product.category.name},
                        {headname : 'Price' , about:product.price},
                        {headname : 'Total Sold' , about:product.sold},
                        ].map((f ,i)=>(
                          <React.Fragment key={i}> 
                          <Typography variant='h5' align='left'>
                                 {f.headname}:
                        </Typography>
                        <Typography variant='subtitle1' align='center'>
                              {f.about}
                        </Typography>
                       
                        </React.Fragment>
                         ))
                       
                     }
                      <Grid container justify='center'>
                       {product.quantity >0 ? 
                       (<ListItemIcon style={{color: 'blue'}}>
                            <Typography >InStock</Typography>
                           </ListItemIcon>)
                            :
                           (<ListItemIcon style={{color: 'red'}}>
                            <Typography >OutOfStock</Typography>
                           </ListItemIcon>)    

                             }
                      <Button variant='contained' style={{marginTop:'20px'}} onClick={addproducttocart(product)}>
                              Buy Now
                              </Button>
                              </Grid>  
                        </Paper>
                      </Grid>

                  </Grid>
                   
                   
                  {relatedProduct.length >0 && (
                       <Typography variant='h4' align='center' style={{margin:'30px'}}>
                           Related Product
                       </Typography>
                   )}
                   <Grid container spacing={3} >    
                  {
                   relatedProduct.map((p,i)=>(
                    <ProductCard product={p} key={i}/>
                    
                   ))
                  }
                  </Grid>

                   </React.Fragment>
                  
                  )         
               

}


const mapDispatchToProps = (dispatch)=>({
        
       cartprod : (prod)=> dispatch(getCartProduct(prod))
})

export default connect(undefined , mapDispatchToProps)(SingleProduct);
