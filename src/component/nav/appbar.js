import React ,{useState} from 'react';
import { AppBar, makeStyles, Typography} from '@material-ui/core';
import ToolBar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import ListDrawer from './appdrawer';
import SearchBox from './searchBox';
import NavList from './navlist';
import IconMenu from './iconmenu';
import IconButton from '@material-ui/core/IconButton';


const useStyle  = makeStyles((theme)=>({
    contentjust:{
        display:'flex',
        justifyContent: 'space-between'
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      }, 
})) 

const Appbar = ()=>{
             const classes = useStyle();   
            const [drawerState ,setState] = useState(false);

            const openDrawer = ()=>{
            setState(!drawerState);
            }
        return (
        <AppBar color="default" position="sticky" variant='elevation'>
        <ToolBar  className={classes.contentjust}>
        <div className={classes.sectionMobile}>
                         <IconButton
                            edge='start'
                            className={classes.menuButton}
                            onClick={openDrawer}>
                             <MenuIcon/>
                         </IconButton> 
                         </div>
            <Typography variant="h4">
            SAN.ME 
            </Typography>
            <NavList/>
           <SearchBox />
           <IconMenu/>
            </ToolBar>
            <ListDrawer open = {drawerState}  close={openDrawer}/>
        </AppBar> 
        )

} 

export default Appbar;