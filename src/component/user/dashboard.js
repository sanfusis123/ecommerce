import React from 'react';
import { Grid, makeStyles, Paper, Typography  } from '@material-ui/core';
import { Content, UserInfo  ,DrawerElm} from './userinfo';
import OrderCard from '../order';

const useStyle = makeStyles((theme)=>({
    list :{
        width:'14.9%',
        overflow:'hidden',
        padding: theme.spacing(1),
        height:800,
        
    },
   
    title:{
        marginTop: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            display: 'none'
          },
    },
    info:{
      width: '84.9%',
      height:'auto', 
      padding: theme.spacing(2)
    },
    hr:{
        width:200,
        height:'2px',
        borderWidth:0,
        color:'red',
        backgroundColor:'red'
    },
    
  
}))


const DashPaper = ()=>{
    const classes = useStyle();
        
    

    return ( <React.Fragment>
       <Grid  container
            justify="flex"
            alignItems="center">
        <Paper variant={3} className={classes.list} >
            <Typography variant='h4' align='center' gutterBottom={true} className={classes.title}>
                 Your Profile
                 <hr className={classes.hr}></hr>
           
             </Typography>  
            <DrawerElm />
        </Paper >
        <Paper variant={3} className={classes.info}>
          <UserInfo />
          
          <Content />
          <OrderCard/>
        </Paper>
        </Grid>
        </React.Fragment>   
    ) 
}

const DashBoard = ()=>{
    return (
             
      <DashPaper />
    
        )
}

export default DashBoard;