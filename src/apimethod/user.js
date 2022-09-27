import {api} from '../config';



export const signup = (user)=>{
    return fetch(`${api}/user/signup` , {
         method: 'POST',
         headers:{
             Accept : 'application/json',
             'Content-Type':'application/json'
         },
        body:JSON.stringify(user)
     }).then(response => (response.json()))
       .catch(err=>console.log(err));
 
 } 

 export const signin = (user)=>{
    return fetch(`${api}/user/signin` , {
         method: 'POST',
         headers:{
             Accept : 'application/json',
             'Content-Type':'application/json'
         },
        body:JSON.stringify(user)
     }).then(response => (response.json()))
       .catch(err=>console.log(err));
 
 } 

export const signout =  ()=>{
    return fetch(`${api}/user/signout` , {
        method: 'GET',
        headers:{
            Accept: 'appliction/json',
            "Content-Type": 'application/json'
        },
       }).then(response => (response.json()))
         .catch(err=>console.log(err));
}
export const authenticate = (data , cb)=>{
         if(typeof window !== 'undefined'){
              localStorage.setItem('jwt' , JSON.stringify(data));
              cb();
         }
 }

export const unAuthenticate = (cb)=>{
      if(typeof window !== 'undefined'){
          localStorage.removeItem('jwt');
          cb();
      }
}

export const userLoged = ()=>{
     if(typeof window !== 'undefined'){
        let jwt =   localStorage.getItem('jwt') 
        if(!jwt){
            localStorage.setItem('jwt',JSON.stringify({
                "token": "",
                "user": {
                    "name": "User",
                    "email": "user@demo.com",
                    "role": 0,
                    "_id": ""
                }
            }))
        }
        jwt =  localStorage.getItem('jwt') ;
        return JSON.parse(jwt) ;
     }
}

export const userProfile = ()=>{
    const {token, user} = userLoged();
    return fetch(`${api}/user/getuser/${user._id}`,{
        method: 'GET',
        headers:{
         Accept : 'application/json',
         Authorization: `Bearer ${token}`,   
        'Content-Type':'application/json',
        }
    }).then(response => response.json())
      .catch(err => console.log(err));
}
 
export const userUpdateApi = (data)=>{
    const {token, user} = userLoged();
    return fetch(`${api}/user/updateProfile/${user._id}`,{
        method: 'PATCH',
        headers:{
         Accept : 'application/json',
         Authorization: `Bearer ${token}`,   
        'Content-Type':'application/json',
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
      .catch(err => console.log(err));
}







