import React from 'react';
import {Link} from 'react-router-dom';

import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from'@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import CategoryRounded from '@material-ui/icons/CategoryRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const useStyle = makeStyles((theme)=>({
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'block',
        },
      },
    list:{
        width: 'auto',  
        float:'left',
        display:'flex'
      } ,   
}))



const NavList = ()=>{
   const classes = useStyle();
   
    return (
        <div className={classes.sectionDesktop}>

                        <List className={classes.list}>
                                    {['Home' , 'Category' ,'Account' , 'WishList' ].map((text)=>{
                                    let IconName , link;

                                switch(text){
                                    case 'Home':
                                    IconName = HomeRoundedIcon;
                                    link = '/';
                                    break;
                                    case 'Category':
                                    IconName = CategoryRounded;
                                    link = '/category'
                                    break;
                                    case  'Account':
                                    IconName = AccountCircleIcon;
                                    link = '/account'
                                    break ;
                                    case 'Cart':
                                    IconName = ShoppingCartIcon;
                                    link = '/cart'
                                    break;
                                    case 'WishList':
                                    IconName = BookmarkIcon;
                                    link = 'wishlist';
                                    break;       
                                    default:
                                        IconName= MenuIcon
                                } 
                                    
                                
                                return( <ListItem button key={text} component={Link} to={link}>
                                      <ListItemIcon >
                                        <IconName/>
                                    </ListItemIcon>
                                    <ListItemText>
                                            {text}
                                    </ListItemText>
                                     </ListItem>)
                            
                                    
                                })}

                                </List>


                        </div>

    )
}


export default NavList;






