import React, { useState } from 'react';
import  {makeStyles} from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
const useStyles = makeStyles((theme)=>({
     group:{
         padding:theme.spacing(1),
         [theme.breakpoints.down('md')]:{
             display: 'flex',
             width: '100%',
             height:80,
             float: 'left',
             overflow: 'scroll'
         }
     },
    sliderWidth :{
        margin: theme.spacing(2),
        padding:theme.spacing(3)
    }
}))

export const CatList = ({categories ,handleFilter})=>{
    const classes = useStyles();

   const [checked , setChecked] = useState([]);
   const handleChange =(id)=> ()=>{
         const currectChecked = checked.indexOf(id);
         const allChecked = [...checked];
         if(currectChecked === -1){
            allChecked.push(id); 
         }
         else{
             allChecked.splice(currectChecked , 1);
         }
         setChecked(allChecked);
         handleFilter(allChecked);
   }


    return (
        <FormGroup className={classes.group} >
        {  categories.map((c,i) =>(
             <FormControlLabel
             key={i}
             control={<Checkbox onChange={handleChange(c._id)} />}
             label={c.name}
           />
          ))
        }
       </FormGroup>
    )
}


 export const PriceRange = ({priceHandler})=>{

    const classes = useStyles();
   const [value , setValue] = useState([0,1000]);
   function valuetext(value) {
    return `${value}°C`;
  }
  const handleChange = (event , newvalue) =>{
      setValue(newvalue);
      priceHandler(newvalue);
  }

    return (<React.Fragment>
        <Typography variant='h5'>
            Filter By Price Range
        </Typography>
        <div className={classes.sliderWidth} >
       <Slider  
        value={value}
        max={10000}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
      </div>
     </React.Fragment>
    )
}



