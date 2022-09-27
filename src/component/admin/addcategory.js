import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link, Redirect} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import {addCatApi} from '../../apimethod/product';

import {userLoged} from '../../apimethod/user';

const useStyle = makeStyles((theme)=>({
    root: {
        minWidth: 350,
        maxWidth: 500,
        alignItems:'center',
        margin: theme.spacing(2),
        marginTop: '70px',
       [theme.breakpoints.up('md')]: {
            minWidth: 520,
            maxWidth: 800,
            },  
       },
       textWidth: {
        minWidth: 330,
        maxWidth: 500,
        margin: theme.spacing(2),
       
       [theme.breakpoints.up('md')]: {
            minWidth: 500,
            maxWidth: 600,
        
            },  
       },
     
      marg: {
        margin: theme.spacing(3),   
      },
     headTextWidth:{
         width:'100%'
     }, 
}))

const AddCategory = ()=>{
    const classes = useStyle();
    const [value , setvalue] = useState('')
    const [redirect , setRedirect] = useState('')
    
    const handleChange = (val)=>(e)=>{
          setvalue(e.target.value);
    }
    const {user: {_id } , token} = userLoged();
    const addcat = ()=>{
        addCatApi({name : value})
          .then(data =>{
              if(!data){
                  return ;
              }

              setRedirect(true);
          })
    }
    const redirectTo = ()=>{
        if(redirect){
            return <Redirect to='/account' />
        }
    }
    return(
        <React.Fragment>
             <Grid container spacing={1}
             justify="center"
             alignItems="center" >
                 <Paper elevation={3}  className={classes.root}>
                 <Grid container spacing={1}
                    justify="center"
                    alignItems="center" >
                      
                <Typography variant='h4'align='center' className={classes.marg , classes.headTextWidth}>
                   Add Category
              </Typography>
                        
                
                    <TextField
                    id="outlined-secondary"
                    label="Category"
                    variant="outlined"
                    color="primary"
                    className={classes.textWidth}
                    onChange={handleChange('category')}
                    helperText='Not be empty'
                />
            
           
               <Grid container spacing={3}
                    justify="space-around"
                    className={classes.marg} >
                 <Grid item>   
                <Button variant="outlined" component={Link} to='/account'>
                   DashBoard
                    </Button>
                </Grid>
                <Grid item>
                <Button variant="contained" color="primary"  onClick={addcat} >
                Add Category
                </Button>
                </Grid>
                 </Grid>
                </Grid>
         
                 </Paper>
                 </Grid>
                  {redirectTo()}
              </React.Fragment>
        
    )
}
export default AddCategory;