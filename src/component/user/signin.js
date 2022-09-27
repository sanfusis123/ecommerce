import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import img from '../../assets/account.png';
import {Link, Redirect} from 'react-router-dom';
import {signin , authenticate} from '../../apimethod/user';

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
            email:'',
            password:'',
            redirect: false
        })

        const [helpervalues , sethelpervalues] = useState({
            emailHelper:'',
        
        })
        const { emailHelper} = helpervalues;
    
        const handleChange = (name) => (event)=> {
            setvalues({...values , [name]:event.target.value})
        }
       const errorHandler = (errObj)=>{
           sethelpervalues({...errObj})
       }
        
       //
       const signHandle = (e)=>{
        e.preventDefault()
         const {email , password }   = values     
            
         signin({ email , password}).then(data=>{
            if(!data){
                return
            }
            if(data.Error){
           return  errorHandler({emailHelper: data.Error});
          }
           authenticate(data , ()=>{
            console.log(data);  
            setvalues({...values , redirect:true});
             
          })
        });
    }

           // 
        
        
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
                   SignIn to CludeMarket 
              </Typography>
                        
                
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
                    label="Password"
                    variant="outlined"
                    color="primary"
                    className={classes.textWidth}
                    onChange={handleChange('password')}
                />
           
               <Grid container spacing={3}
                    justify="space-around"
                    className={classes.marg} >
                 <Grid item>   
                <Button variant="outlined" component={Link} to='/signup' >
                   SignUp
                    </Button>
                </Grid>
                <Grid item>
                <Button variant="contained" color="primary" onClick={signHandle}>
                SignIn
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