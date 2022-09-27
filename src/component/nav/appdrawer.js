import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Drawer  from "@material-ui/core/Drawer";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from'@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import CategoryRounded from '@material-ui/icons/CategoryRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import {ConSearch} from './searchBox';
import { Button } from '@material-ui/core';

const useStyle = makeStyles({
  listWidth :{
    width:200
  },
  search:{
     margin: '10px',
     padding:'10px',
     backgroundColor: '#b8c6db',
     backgroundImage: 'linear-gradient(315deg, #b8c6db 0%, #f5f7fa 90%)'
  }
})


const ListNav = (props)=>{
   
  
  return( <React.Fragment>
   {['Home' , 'Category' ,'Account','Cart' , 'WishList' ].map((text)=>{
      let IconName , link;

     switch(text){
       case 'Home':
         IconName = HomeRoundedIcon;
         link = '/'
         break;
       case 'Category':
         IconName = CategoryRounded;
         link = '/category';
         break;
       case  'Account':
         IconName = AccountCircleIcon
         link = '/account';
         break ;
       case 'Cart':
         IconName = ShoppingCartIcon;
         link = '/cart';
         break;
       case 'WishList':
         IconName = BookmarkIcon;
         link = '/wishlist';
         break;       
         default:
          IconName= MenuIcon;
          link= '/'
     } 
      
     
     return( <ListItem button key={text}  component={Link} to={link} onClick={props.close}>
         <ListItemIcon >
             <IconName/>
         </ListItemIcon>
         <ListItemText>
                {text}
         </ListItemText>
       </ListItem>)
 
       
   })}
        </React.Fragment>)
 }

const ListDrawer = (props)=>{
  const classes = useStyle();

    
    return(
     <Drawer 
     variant="temporary" anchor="left" open={props.open}  onClose={props.close} >
            <div className={classes.search}>       
            <ConSearch close = {props.close} />
            </div>
            <List className={classes.listWidth}>
            <ListNav close = {props.close}/>
            </List>
            <Button><CloseIcon onClick = {props.close}/></Button>
     </Drawer>  

    )

}




export { ListNav}
export default ListDrawer;