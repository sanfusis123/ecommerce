import React, { useEffect, useState } from 'react';
import { Grid, makeStyles, Paper, Typography ,withStyles } from '@material-ui/core';
import img from '../../assets/account.png';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import EditIcon from '@material-ui/icons/Edit';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import {userLoged, userProfile,userUpdateApi} from '../../apimethod/user';

const {user:{_id , role , name ,email}} = userLoged();

const useStyle = makeStyles((theme)=>({
    
    marg: {
        marginTop:theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    
    hr:{
        width:200,
        height:'2px',
        borderWidth:0,
        color:'red',
        backgroundColor:'red'
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        alignItems: 'center',
        
      },
      large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        [theme.breakpoints.down('md')]: {
            width: theme.spacing(7),
            height: theme.spacing(7),
             },
      },
      content:{
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(30)
          },
      },
      name:{
          marginTop:theme.spacing(6),
          [theme.breakpoints.down('md')]: {
            marginTop:theme.spacing(1.5),
           },
      },
      grid:{
        minWidth: 300
      },
      textWidth: {
        minWidth: 280,
        maxWidth: 500,
        margin: theme.spacing(1),
       
       [theme.breakpoints.up('md')]: {
            minWidth: 500,
            maxWidth: 600,
        
            },  
       },
      button:{
       [theme.breakpoints.up('xs')]: {
            top:18,
            right:-10

          }, 
          [theme.breakpoints.down('xs')]: {
      
            right:-100,
            top : 10

          },    
      } 
    
  
}))



const SmallAvatar = withStyles((theme) => ({
    root: {
      width: theme.spacing(5),
      height: theme.spacing(5),
      border: `2px solid ${theme.palette.background.paper}`,
      [theme.breakpoints.down('md')]: {
        width: theme.spacing(3),
        height: theme.spacing(3),
         },
    },
  }))(Avatar)




  const Content = ()=>{
    const classes = useStyle();
    const [profile ,setprofile] = useState({});
    const [value , setValues] = useState({});

    const handleChange =(val)=> (e)=>{
      setValues({...value,[val]: e.target.value});
 }


 const updateuser = (e)=>{
       e.preventDefault();
      userUpdateApi(
        {address : value.Address , mob : value.MobNumber})
          .then((data)=>{
             if(data.Error) console.log(data.Error);
              userProfile().then(data=>{
               if(data.Error)console.log(data.Error);
               setprofile({...profile,...data});
                 console.log(profile);
             }) 
          })
 }

      useEffect(()=>{
        userProfile().then(data=>{
         if(data.Error)console.log(data.Error);
         setprofile({...profile,...data});
       }) 
      }, []);
     

    return(profile ? [{title1: 'Email Id' , Value1: profile.email , title2:'Full Name' , Value2:profile.name },
     {title2: 'Address' , Value2: profile.address , 
       title1:'MobNumber' , Value1:profile.mob }].map((elm,i)=>{
            return ( 
             
              <Grid container spacing={3} className={classes.marg}>
              <Grid item xs className={classes.grid}>
              <Typography variant='h6' align='left'>
                {elm.title1}    
              </Typography>   
              <Paper className={classes.paper}>
              <Typography variant='h6' >
                {elm.Value1}    
              </Typography>   
              
              </Paper>
              </Grid>
              <Grid item xs className={classes.grid}>
              <Typography variant='h6' align='left'>
                {elm.title2}     
              </Typography>   
              
              <Paper className={classes.paper} >
              <Typography variant='h6'>
                {elm.Value2}   
              </Typography>   
                  
              </Paper>
              </Grid>
              </Grid>
   
      )
      

       })  : <></>      
    )

} 





const UserInfo = ()=>{
    const classes = useStyle();
    const [profile ,setprofile] = useState({});

      useEffect(()=>{
        userProfile().then(data=>{
         if(data.Error)console.log(data.Error);
         setprofile({...profile,...data});
           console.log(profile);
       }) 
      }, []);
     
    
    return (<div>
          <Typography variant='h5' align='center' className={classes.marg}>
              Your Info
              <hr className={classes.hr}></hr>
          </Typography>
          <Grid container spacing={3}>
       <Grid item xs>
         <Paper className={classes.paper}>
             <div className={classes.content}>
             <Grid container spacing={3}>
               <Grid item alignItems='center'>
       
               <Badge
               overlap="circle"
               anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'right',
               }}
               badgeContent={<SmallAvatar  >
                               <EditIcon/>
                             </SmallAvatar>}
               >
                   <Avatar alt='name' src={img} className={classes.large}/> 
              </Badge>
              </Grid>
              <Grid item  className={classes.name}>
              <Typography variant='h6' >
                  {profile ? profile.username : 'San'} 
              </Typography>
              <Typography variant='caption'>
                {profile ? profile.country : "India"}
              </Typography>
              </Grid>
              </Grid>
             </div>
         </Paper>
       </Grid>
       </Grid>           
    </div>
    )

   }



   const DrawerElm = ()=>{
       const classes = useStyle();
    return (
                    
        [{text: 'User info' , icon:PersonIcon},
        {text: 'Order' , icon:ShoppingBasketIcon},
        {text: 'Favorites' , icon:FavoriteBorderIcon},
        {text: 'Wishlist' , icon:BookmarkBorderIcon},
        {text: 'Notification' , icon:NotificationsActiveIcon}].map((elm)=>{
            let IconName = elm.icon;
          return (<ListItem button key={elm.text} className={classes.marg}>
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

  
export {Content , UserInfo ,DrawerElm};