import React from 'react';

import Menu from '@material-ui/core/Menu';

const LogMenu = ()=>{
  const [anchorEl , setAnchorEl] = useState(null);
  const menuId = 'primary-Log-account-menu';
  const isMenuOpen = Boolean(anchorEl);
  const handleMenuClose = () => {
      setAnchorEl(null);
    };
  const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };  
 
 

  return(
    <Menu
             anchorEl={anchorEl}
             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
             id={menuId}
             keepMounted
             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
             open={isMenuOpen}
             onClose={handleMenuClose}
             >
             <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
             <MenuItem onClick={handleMenuClose}  component={Link} to='/account'>My account</MenuItem>
             </Menu>
  )
}












































// import React , {useState} from 'react';

// import IconButton from '@material-ui/core/IconButton';

// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import Badge from '@material-ui/core/Badge';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import AccountCircle from '@material-ui/icons/AccountCircleRounded';

// const Elm = (props)=>{
//     return   (<div>
//           <IconButton aria-label="show 4 new mails" color="inherit">
//            <Badge badgeContent={4} color="secondary">
//                <MailIcon />
//            </Badge>
//            </IconButton>
//           <IconButton aria-label="show 11 new notifications" color="inherit">
//            <Badge badgeContent={11} color="secondary">
//                <NotificationsIcon />
//            </Badge>
//            </IconButton>
//            <IconButton
//             onClick={props.handleProfileMenuOpen}
//   >
//            <AccountCircle />
//            </IconButton>
//          </div>)
  
         
//   }

// const IconMenu = ()=>{
//     const [anchorEl , setAnchorEl] = useState(null);
    

//     const menuId = 'primary-search-account-menu';
//     const isMenuOpen = Boolean(anchorEl);
//     const handleMenuClose = () => {
//         setAnchorEl(null);
//       };
//     const handleProfileMenuOpen = (event) => {
//         setAnchorEl(event.currentTarget);
//       };  



    
//     return (
//         <React.Fragment>
//            <Elm handleProfileMenuOpen={handleProfileMenuOpen}/>
//            <Menu
//              anchorEl={anchorEl}
//              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//              id={menuId}
//              keepMounted
//              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//              open={isMenuOpen}
//              onClose={handleMenuClose}
//              >
//              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//              <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//              </Menu>
//              </React.Fragment>
//     )
// }




// export default IconMenu;