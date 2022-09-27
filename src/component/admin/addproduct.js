import React, {useState ,useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import img from '../../assets/marketimg.jpg';
import {Redirect , Link} from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {addProduct , getAllCat} from '../../apimethod/product';
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

 

const AddProduct =()=>{
        const classes = useStyles(); 
        
        const [values , setvalues] = useState({
            categories :[],
             name:'',
             description:'',
             price:'',
             quantity:'',
             shiping:'',
             category:'',
             ProductImage:'',
            formData:''

        });
        const {categories , formData} = values;
        const [helpervalues , sethelpervalues] = useState({
                 redirect:''
        })
               
        const handleChange = (inchange) => (e)=> {
           let exactly =   inchange ===   "ProductImage" ? e.target.files : e.target.value
           setvalues({...values , [inchange]: exactly})
           if(inchange === 'ProductImage'){
            for(let i=0; i<exactly.length ; i++){
                formData.append('ProductImage' ,exactly[i]);
            }
            }else{
                formData.set(inchange , exactly);
             }

        }
       const catOption = ()=>(
        categories.map((option) => (
            <MenuItem key={option._id} value={option._id}>
            {option.name}
            </MenuItem>
        ))
       )
      useEffect(()=>{
        getAllCat().then(data =>{
            if(!data){
                return console.log('No data found');
            }
            if(data.error){
                return console.log(data.error);
            }
            setvalues({...values , categories : data ,formData : new FormData()});

        })
      }, [])        

        const createProduct = (e)=>{
            e.preventDefault();
            addProduct(formData).then((data)=>{
                if(data){
                    console.log(data);
                     sethelpervalues({...helpervalues , redirect: true});
                }   
            }).catch((err)=> console.log(err));
        }
        
        const redirectTo = ()=>{
            if(helpervalues.redirect) {
                 return <Redirect to="/account" />
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
                   Create Product 
              </Typography>
                        
                <TextField
                    id="outlined-secondary"
                    label="Product Name"
                    variant="outlined"
                    color="primary"
                    className={classes.textWidth}
                    margin="normal"
                    onChange={handleChange('name')}
                />
                    <TextField
                    id="outlined-secondary"
                    label="Description"
                    variant="outlined"
                    multiline
                    rows={4}
                    color="primary"
                    className={classes.textWidth}
                    onChange={handleChange('description')}
                />
               <TextField
                    id="outlined-secondary"
                    label="Price"
                    variant="outlined"
                    color="primary"
                    type='number'
                    className={classes.textWidth}
                    onChange={handleChange('price')}
                />
                <TextField
                    id="outlined-secondary"
                    label="Quantity"
                    variant="outlined"
                    color="primary"
                    type='number'
                    className={classes.textWidth}
                    onChange={handleChange('quantity')}
                    
                />

                 <TextField
                    id="standard-select-currency"
                    select
                    label="Select Category"
                    className={classes.textWidth}
                    onChange={handleChange('category')}
                    helperText="Please select Category"
                    >
                    {catOption()}
                    </TextField>
                    <FormControl component="fieldset" className={classes.textWidth}>
                    <FormLabel component="legend">Shiping</FormLabel>
                    <RadioGroup aria-label="ship" name="shiping"  onChange={handleChange('shiping')}>
                        <FormControlLabel value="true" control={<Radio />} label="YES" />
                        <FormControlLabel value="false" control={<Radio />} label="NO" />
                    </RadioGroup>
                    </FormControl>


                    <TextField
                    id="outlined-secondary"
                    variant="outlined"
                    color="primary"
                    type='file'
                    inputProps={{ multiple: true , accept:'image/*'}} 
                    className={classes.textWidth}
                    onChange={handleChange('ProductImage')}
                    helperText='Select Product Image' 
                />
                  

                  <Grid container spacing={3}
                    justify="space-around"
                    className={classes.marg} >
                 <Grid item>   
                <Button variant="outlined" component ={Link} to='/account'>
                   AdminDahboard
                    </Button>
                </Grid>
                <Grid item>
                <Button variant="contained" color="primary" onClick={createProduct}>
                  Create Product
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

export default AddProduct; 