import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import AccountCircle from '@material-ui/icons/AccountCircleRounded';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme)=>({
    margin: {
        margin: theme.spacing(1),
      },
      root: {
        minWidth: 350,
        maxWidth: 800,
      },
      textWidth: {
        minWidth: 275,
        maxWidth: 800,
      },
      title: {
        fontSize: 18,   
      },  
      
}))

const SignInA = ()=>{
      const classes = useStyles();  
       return(<from>
        <Card  className={classes.root}>
         <CardContent>
              
         <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
              
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
        </CardContent>
        <CardActions>
            
        </CardActions>
        </Card>


       </from>)
     }

     const SignIn =()=>{
        const classes = useStyles();  
      
         return(
             <Grid container spacing={1}
             justify="center"
             alignItems="center" >
              <Card  className={classes.root}>
              <CardContent>
              
           
             <Grid item>
             <Grid container spacing={1} alignItems="flex-end" >
               <Grid item>
               <AccountCircle />
                </Grid>
           <Grid item>
            <TextField id="input-with-icon-grid" 
                        label="With a grid" 
                       className={classes.textWidth}
                     />
          </Grid>
        </Grid>
        </Grid>
             
        </CardContent>
        <CardActions>
            
        </CardActions>
        </Card>

             </Grid>

             
         )
     }

     export default SignIn;