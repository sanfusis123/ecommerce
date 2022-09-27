import React , {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import {Typography, makeStyles} from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {fade} from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircleRounded';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from'@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import CategoryRounded from '@material-ui/icons/CategoryRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const userStyle = makeStyles((theme)=>({
    grow: {
        flexGrow :1
    },
    menuButton: {
        marginRight: theme.spacing(2),

      },
    list:{
      width: 'auto',  
      float:'left',
      display:'flex'
    } , 
    contentjust:{
        
        display:'flex',
        justifyContent: 'space-between'
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'block',
        },
      },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
          display: 'none',
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
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    inputRoot: {
        color: 'inherit',
      },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },  
}))


const SearchAppBar = ()=>{

     const [anchorEl , setAnchorEl] = useState(null);
    

    const menuId = 'primary-search-account-menu';
    const isMenuOpen = Boolean(anchorEl);
    const handleMenuClose = () => {
        setAnchorEl(null);
      };
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };  
      const classes = userStyle();
         return(
             <React.Fragment>
                 <CssBaseline/>
                 <AppBar variant='elevation'
                         position='sticky'
                         color="transparent"
                     > 
                     <Toolbar     className={classes.contentjust}>
                        <div className={classes.sectionMobile}>
                         <IconButton
                            edge='start'
                            className={classes.menuButton}
                         >
                             <MenuIcon />
                         </IconButton> 
                         </div>
                         <Typography className = {classes.title} 
                                      variant='h5'
                                       noWrap>
                                      Sanfusis     
                         </Typography>
                        <div className={classes.sectionDesktop}>

                        <List className={classes.list}>
                                    {['Home' , 'Category' ,'Account','Cart' , 'WishList' ].map((text)=>{
                                    let IconName;

                                switch(text){
                                    case 'Home':
                                    IconName = HomeRoundedIcon
                                    break;
                                    case 'Category':
                                    IconName = CategoryRounded
                                    break;
                                    case  'Account':
                                    IconName = AccountCircleIcon
                                    break ;
                                    case 'Cart':
                                    IconName = ShoppingCartIcon
                                    break;
                                    case 'WishList':
                                    IconName = BookmarkIcon
                                    break;       
                                    default:
                                        IconName= MenuIcon
                                } 
                                    
                                
                                return( <ListItem button key={text}>
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


                         <div className={classes.sectionDesktop}>
                         <div className={classes.search } >
                         <div className={classes.searchIcon}>
                         <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        /> 
                        </div>
                        </div>
                        <div>
                       <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon />
                            </Badge>
                            </IconButton>
                           <IconButton aria-label="show 11 new notifications" color="inherit">
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
                            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                            </Menu>
                     </Toolbar>

                 </AppBar>
             </React.Fragment>
         )       

}
export default SearchAppBar;