const {nameHelper, emailHelper,passwordHelper} = helpervalues;
        
        const errorHandler = (name , err) =>{
            sethelpervalues({...helpervalues , [name]: err})
        }


        if(password !== confirmpassword){
            return    errorHandler('passwordHelper' , 'password not equal')
        }          

        const a = data.error || []
        a.map(err=>{
            const errName = Object.keys(err)
            if(errName[0] === 'Name'){
               return errorHandler('nameHelper' , err[errName]);
            }
            if(errName[0] === 'Email'){
               return errorHandler('emailHelper' , err[errName]);
            }

            // switch(errName[0]){
            //     case 'Name' :
            //        errorHandler('nameHelper' , err[errName])
            //         console.log(errName);
            //         break;
            //     case 'Email' :
            //      return   errorHandler('emailHelper' , err[errName])
            //         console.log(errName);
            //         break;
            //     case 'Password' :
            //        return errorHandler('passwordHelper' , err[errName])
            //         console.log(errName);
            //         break;
            //         default:
            //             break;    
            // }
        })        