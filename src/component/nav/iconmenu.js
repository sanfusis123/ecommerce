import React , {useState } from 'react';
import {Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircleRounded';
import {userLoged ,unAuthenticate, signout} from '../../apimethod/user';
import {connect } from 'react-redux';





const IconMenu = (props)=>{
    const [anchorEl , setAnchorEl] = useState(null);

    const menuId = 'primary-search-account-menu';
    const isMenuOpen = Boolean(anchorEl);
    const handleMenuClose = () => {
        setAnchorEl(null);
      };
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };  
    const signoutHandle = ()=>{
      signout().then((data)=>{
        if(data){
          unAuthenticate(()=>{
           handleMenuClose();
           return console.log(data);
       })
       return handleMenuClose();
            
        }
        
      })
    }
     // cart count
    
   

// 
      const logFun = ()=>{
        const  userloged = userLoged()
        if(userloged.token){
          return ( 
           [{text: 'Profile' , link:'' , fun:handleMenuClose},
           {text: 'My Acocunt' , link:'/account' , fun:handleMenuClose},
           {text: 'Signout' , link:'' , fun:signoutHandle}].map((elm, i)=>{
            return(<MenuItem onClick={elm.fun} key={i} component={Link} to={elm.link}>{elm.text}</MenuItem>)
         
           })

       )
        }

        return ( 
          [{text: 'LogIn' , link:'/login' , fun:handleMenuClose},
          {text: 'SignUp' , link:'/signup' , fun:handleMenuClose}
           ].map((elm , i)=>{
           return(<MenuItem onClick={elm.fun} key={i} component={Link} to={elm.link}>{elm.text}</MenuItem>)
        
          })

        )
      }

    
    return (
        <React.Fragment>
        <div>
        <IconButton aria-label="show 4 new mails" color="inherit" component={Link} to='/cart'>
             <Badge badgeContent={props.cartprodCount} color="secondary">
                 <ShoppingCartIcon />
             </Badge>
             </IconButton>
            <IconButton aria-label="show 11 new notifications" color="inherit" component={Link} to='/notification'>
             <Badge badgeContent={11} color="secondary">
                 <NotificationsIcon />
             </Badge>
             </IconButton>
             <IconButton
              onClick={handleProfileMenuOpen}
             
                   >
             <AccountCircle />
             </IconButton>
           </div>

           
           <Menu
             anchorEl={anchorEl}
             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
             id={menuId}
             keepMounted
             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
             open={isMenuOpen}
             onClose={handleMenuClose}
             >
             {logFun()}
             </Menu>
             </React.Fragment>
    )
}

const mapStateToProps = (state)=>({
        
  cartprodCount : state ? state.cartProduct.length : ''
})

export default connect(mapStateToProps, undefined)(IconMenu);
