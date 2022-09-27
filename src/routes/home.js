import React ,{useState , useEffect}from 'react';
import {getProductBy} from '../apimethod/product';
import Grid from '@material-ui/core/Grid';
import ProductCard from '../component/productcard';
import { connect} from 'react-redux';
import {getProductByApi} from '../redux/product';

const Home = (props)=>{
    
    const productArrival = ()=>{
        getProductBy('createdAt').then((data)=>{
            if(!data){
                return console.log('No data is found');
            }        
            props.getProdByApi(data, 'createdAt');
           
    })
    }
    const productSell = ()=>{
        getProductBy('sell').then((data)=>{
            if(!data){
                return console.log('No data is found');
            }        
            props.getProdByApi(data, 'sell');
            
    })
    }
    useEffect(()=>{
         productArrival();
         productSell();
    
    },[])
    
    
    return(
    <div>
              {props.prodState.search.length >0 &&(
               <React.Fragment>   
              <h1>{props.prodState.search.length} Search Product found</h1>
              <Grid container spacing={3} direction='row' style={{flexGrow:1}}>
                    { props.prodState.search.map((product, i)=>{
                      return(<ProductCard key={i} product={product} />
                      )
                    })}
                   </Grid>
                </React.Fragment>)
              }
                

                 <h1>New Arrival</h1>
                <Grid container spacing={3} direction='row' style={{flexGrow:1}}>
                 {props.prodState.createdAt.length >0 && props.prodState.createdAt.map((product, i)=>{
                   return(<ProductCard key={i} product={product} />
                   )
                 })}
                </Grid>
                <h1>Best Seller</h1>
                <Grid container spacing={3} direction='row' style={{flexGrow:1}}>
                 {props.prodState.sell.length && props.prodState.sell.map((product, i)=>{
                   return(<ProductCard key={i} product={product} />
                   )
                 })}
                </Grid>
                <Grid container spacing={3} direction='row' style={{flexGrow:1}}>
                 </Grid>

                    </div>
        
    )
}

const mapStateToProps = (state)=>({

      prodState : state ? state : {createdAt:[] ,sell:[] , search:[]}   
})
const mapDispatchToProps = (dispatch)=>({
    getProdByApi : (prodData , sort)=>dispatch(getProductByApi(prodData , sort))
})

export default connect(mapStateToProps ,mapDispatchToProps)(Home);