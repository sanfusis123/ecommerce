import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import {CatList , PriceRange} from '../component/shop';
import {getAllCat , productBySearch} from '../apimethod/product';
import Button from '@material-ui/core/Button';
import ProductCard from '../component/productcard';


const useStyle = makeStyles((theme)=>({
    allFilters :{
        minwidth:'33%',
        height:'auto',
        maxWidth:412
    },
    paper:{
        width:'100%',
        margin: theme.spacing(2),
        padding: theme.spacing(3)
    },
    filteredProduct:{
             width:'66%',
             margin: theme.spacing(2),
             padding: theme.spacing(3)
    }
}))



export default ()=>{

      const classes = useStyle();
      const [categories , setCategories] = useState([]);
      const [allFilters, setFilters] = useState({
          filtersObj : {category: [] , price:[]}
      })
      const [filtProduct , setFiltProduct] = useState([]);
      const [limit ,setLimit] = useState(6);
      const [skip, setSkip] = useState(0);
      const catLoader = ()=>{
              getAllCat().then((data)=>{
                  if(!data){
                     return console.log('no data is loaded');
                  }
                  setCategories(data);
              })
      }
     useEffect(()=>{
                  catLoader();
                  applyFilter();
     }, [])
    const handleFilter = (filters , filterBy)=>{
                  const newFilter = {...allFilters};
                  newFilter.filtersObj[filterBy] = filters
                 setFilters(newFilter);    
    }
    const applyFilter = ()=>{
        const filter = allFilters.filtersObj;
        productBySearch(limit , skip, filter).then((data)=>{
            if(!data){
                console.log('no data is found');
            }
            setFiltProduct(data)
        })
    }
    const loadMore = ()=>{
        const newSkip  = limit + skip;
        const filter = allFilters.filtersObj;
        
        setSkip(newSkip);
        productBySearch(limit , newSkip, filter).then((data)=>{
            if(!data){
                console.log('no data is found');
            }
            setFiltProduct(data)
        })
    }
    const loadMoreButton = ()=>{
        if(filtProduct.length >=limit){
         return (<Button onClick={loadMore} variant='contained' >Load More</Button>)
        }
    }


        return(<div>
             <Grid container  direction='row' >
             <Grid spacing={3} container alignItems='center' xs item direction='column' className={classes.allFilters}>
             <Paper elevation={3} className={classes.paper}>    
             <Typography variant='h5' style={{marginTop : 20}}>
                 Caterories
             </Typography>
                 <CatList categories={categories} handleFilter={filters => handleFilter(filters , 'category')} />
                 <PriceRange priceHandler={filters =>handleFilter(filters , 'price')}  />
                 <Button onClick={applyFilter} variant='contained'>Apply</Button>
             </Paper>
             </Grid>
             <Grid spacing={3} container alignItems='center'  direction='row' className={classes.filteredProduct}>
                  {filtProduct.map((p,i)=>(
                     <ProductCard key={i} product={p} />
                  ))}

                  {loadMoreButton()}
                  </Grid> 
                  </Grid>
    </div>
        )
}