import React from 'react';
import { Grid, makeStyles, Paper, Typography ,withStyles } from '@material-ui/core';
import img from '../../assets/account.png';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import EditIcon from '@material-ui/icons/Edit';

import {userLoged} from '../../apimethod/user';

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
        minWidth: 280
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


    return( [{title1: 'User Id' , Value1: 'sanfrost@san' , title2:'Full Name' , value2:'Sanfrost JR' },
     {title1: 'Email Id' , Value1: 'sanfrost@gmail.com' , title2:'Phone/Mobile' , value2:'8738061272' },
     {title1: 'Location' , Value1: 'Kalipahadi' , 
       title2:'Pin Code' , value2:'22232233' }].map((elm , i)=>{

         return ( 
           <Grid container spacing={3} key={i} className={classes.marg}>
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
             {elm.value2}   
           </Typography>   
               
           </Paper>
           </Grid>
           </Grid>

   )

       })       
    )

} 





const UserInfo = ()=>{
    const classes = useStyle();
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
               <Grid item container alignItems='center'>
       
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
                  Admin DashBoard
              </Typography>
              <Typography variant='caption'>
                  USA
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



  
  
export {Content , UserInfo };