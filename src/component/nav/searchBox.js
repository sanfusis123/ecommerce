import React  , {useState} from 'react';
import InputBase from '@material-ui/core/InputBase';
import {makeStyles , fade} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import {connect} from 'react-redux';
import {getProductBySearch} from '../../redux/product';
import {productByQuery} from '../../apimethod/product';
import { Button } from '@material-ui/core';

const useStyle = makeStyles((theme)=>({
    
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('lg')]: {
          display: 'block',
        },
      },
     
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.0),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 1),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      
    inputRoot: {
        color: 'inherit',
      },
    inputInput: {
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },  
}))
const Searching = (props)=>{

       const [searchText , setSearchText] = useState('');
       const classes = useStyle();
    
       const changeHandler = (e)=>{
         setSearchText(e.target.value);
        
       }
       const submitSearch = ()=>{
        productByQuery(searchText).then(data=>{
             if(!data){
               return console.log('no data is featched by search');
             }
             props.getprodBySearch(data , 'search');
          })


       }
           return(
           
              <div className={classes.search } >
              <Button onClick={submitSearch }><SearchIcon/></Button>
              <InputBase
              placeholder="Search…"
              classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={changeHandler}
              /> 
              </div>
             )
            }
const mapDispatchToProps = (dispatch)=>({
           getprodBySearch : (searchProd , search )=>dispatch(getProductBySearch(searchProd , search)) 
}) 
const ConSearch = connect(undefined , mapDispatchToProps)(Searching)            
const SearchBox = ()=>{

     const classes = useStyle();
     return (
          <div className={classes.sectionDesktop}>
            <ConSearch/>
          </div>
  

   )

}
export {ConSearch};
export default SearchBox;