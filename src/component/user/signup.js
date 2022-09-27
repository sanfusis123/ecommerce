import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import img from '../../assets/account.png';
import {Redirect , Link} from 'react-router-dom';
import {signup , authenticate} from '../../apimethod/user';

const useStyles = makeStyles((theme)=>({
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
      img:{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        marginTop: '-50px',

    }
      
      

    
}))

 

const SignUp =()=>{
        const classes = useStyles(); 
        
        const [values , setvalues] = useState({
            name:'',
            email:'',
            password:'',
            confirmpassword:'',
            country:'',
            username:'',
            mob:'',
            address:'',
            redirect: false
        })

        const [helpervalues , sethelpervalues] = useState({
            nameHelper:'',
            emailHelper:'',
            passwordHelper:''
        
        })
        const {nameHelper , emailHelper ,passwordHelper} = helpervalues;
    
        const handleChange = (name) => (event)=> {
            setvalues({...values , [name]:event.target.value})
        }
       const errorHandler = (errObj)=>{
           sethelpervalues({...errObj})
       }
        const signHandle = (e)=>{
            e.preventDefault()
             const {name , email , password ,confirmpassword,country,address,username,mob}   = values     
              if(password !== confirmpassword){
                  return sethelpervalues({passwordHelper : 'Password are not Matched'});
              }   
             signup({name , email,address , password,country,username,mob: parseInt(mob)}).then(data=>{
                if(!data){
                    return
                }
                if(data.error){
                 const a = data.error;
                 let errCurrentState = {};
                 let adderrr = (name , err)=>{
                    errCurrentState[name] = err;
                 }
                  a.forEach((err)=>{
                    const errName = Object.keys(err);
                    if(errName[0] === 'Name'){
                       adderrr('nameHelper' , err[errName]);
                    }
                    if(errName[0] === 'Email'){
                        adderrr('emailHelper' , err[errName]);
                    }
                    if(errName[0] === 'Password'){
                        adderrr('passwordHelper' , err[errName]);
                    }

                })
               return errorHandler(errCurrentState);
              }
            
              authenticate(data , ()=>{
                console.log(data);  
                setvalues({...values , redirect:true});
                console.log(values);
                 
              })
            });
        }
        
        const redirectTo = ()=>{
            if(values.redirect) {
                 return <Redirect to="/" />
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
                <Grid    container spacing={1}
                    justify="center"
                    alignItems="center" >
                       <img src={img} className={classes.img}/> 
                        </Grid>      
              <Typography variant='h4'align='center' className={classes.marg}>
                   SignUp to CludeMarket 
              </Typography>
                        
                <TextField
                    id="outlined-secondary"
                    label="Name"
                    variant="outlined"
                    color="primary"
                    className={classes.textWidth}
                    margin="normal"
                    onChange={handleChange('name')}
                    helperText={nameHelper}
                />
                    <TextField
                    id="outlined-secondary"
                    label="Email"
                    variant="outlined"
                    color="primary"
                    className={classes.textWidth}
                    onChange={handleChange('email')}
                    helperText={emailHelper}
                />
                  <TextField
                    id="outlined-secondary"
                    label="Mobile No."
                    variant="outlined"
                    color="primary"
                    className={classes.textWidth}
                    onChange={handleChange('mob')}
                    helperText={emailHelper}
                />
             <TextField
                    id="outlined-secondary"
                    label="UserName"
                    variant="outlined"
                    color="primary"
                    className={classes.textWidth}
                    onChange={handleChange('username')}
                    helperText={emailHelper}
                />
                 <TextField
                    id="outlined-secondary"
                    label="Country"
                    variant="outlined"
                    color="primary"
                    className={classes.textWidth}
                    onChange={handleChange('country')}
                    helperText={emailHelper}
                />
                <TextField
                    id="outlined-secondary"
                    label="Address"
                    variant="outlined"
                    color="primary"
                    className={classes.textWidth}
                    onChange={handleChange('address')}
                    helperText={emailHelper}
                />
            <TextField
                    id="outlined-secondary"
                    label="Password"
                    variant="outlined"
                    color="primary"
                    className={classes.textWidth}
                    onChange={handleChange('password')}
                    helperText={passwordHelper}
                />
            <TextField
                    id="outlined-secondary"
                    label="Confirm Password"
                    variant="outlined"
                    color="primary"
                    className={classes.textWidth}
                    onChange={handleChange('confirmpassword')}
                    
                />
               <Grid container spacing={3}
                    justify="space-around"
                    className={classes.marg} >
                 <Grid item>   
                <Button variant="outlined" component ={Link} to='/login'>
                   LogIn
                    </Button>
                </Grid>
                <Grid item>
                <Button variant="contained" color="primary" onClick={signHandle}>
                SignUp
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

     export default SignUp;