import React from 'react';
import{ makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import PeopleIcon from '@material-ui/icons/People';
const useStyle = makeStyles((theme)=>({
    
    marg: {
        marginTop:theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
  
}))







 const DrawerElm = ()=>{
    const classes = useStyle();
 return (
                 
     [{text: 'User info' , icon:PersonIcon},
     {text: 'Add Category' , icon:AddCircleOutlineIcon , to:'/admin/create/category'},
     {text: 'Add Product' , icon:AddBoxIcon,to:'/admin/create/product'},
     {text: 'All Order' , icon:ShoppingBasketIcon},
     {text: 'All Customer' , icon:PeopleIcon},
     {text: 'Notification' , icon:NotificationsActiveIcon}].map((elm, i)=>{
         let IconName = elm.icon;
       return (<ListItem button key={i} className={classes.marg} component={Link} to={elm.to}>
         <ListItemIcon >
             <IconName/>
         </ListItemIcon>
         <ListItemText>
                {elm.text}
         </ListItemText>
       </ListItem> )

     })
  )
}

export default DrawerElm;
