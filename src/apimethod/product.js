import {api} from '../config';
import {userLoged} from './user';


const {user  , token} = userLoged(); 

export const addCatApi = (cat )=>{

   return fetch(`${api}/category/create/${user._id}`, {
        method: 'POST',
        headers:{
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(cat)
    }).then((response) => (response.json()))
      .catch((err)=> console.log(err))
  }

export const addProduct = (product)=>{
     return fetch(`${api}/product/create/${user._id}`, {
       method: 'POST',
       headers:{
         Authorization : `Bearer ${token}`,
         Accept: 'application/json'
       },
       body: product
     }).then((response)=> (response.json()))
       .catch((err)=>console.log(err));

}
export const getAllCat = ()=>{
  return fetch(`${api}/category/allcat` , {
          method: 'GET'
        }).then((response) => (response.json()))
          .catch(err => console.log(err));
}

export const getProductBy = (sortBy)=>{
  return fetch(`${api}/product/products?sortBy=${sortBy}&order=desc&limit=10`,
         {
           method: 'GET'
         }).then(response => (response.json()))
           .catch(err => console.log(err));
}


export const productBySearch = (limit , skip , filter)=>{
        
    const data = {limit , skip , filter};
  
      return fetch(`${api}/product/by/search`, {
        method: 'POST',
         headers:{
           Accept: 'application/json',
           'Content-Type':'application/json'
         },
         body: JSON.stringify(data)          
       }).then((response)=>(response.json()))
         .catch((err)=> console.log(err));  

}

export const productByQuery = (queryparam)=>{

   return fetch(`${api}/product/query/product?search=${queryparam}`,{
           method:'GET'
   }).then((response)=>(response.json()))
     .catch(err => console.log(err));
}


export const singleProduct  = (id)=>{
      return fetch(`${api}/product/getproduct/${id}`, {
        method:'GET',

      }).then((data)=>(data.json()))
        .catch((err)=> console.log(err));

      }

export const getRelatedProduct = (id)=>{
  return fetch(`${api}/product/relatedProduct/${id}`, {
      method:'GET'
  }).then((response)=>(response.json()))
    .catch((err)=> console.log(err));
} 

export const payment = (amount,orderId)=>{
  let data = {amount,orderId};
  return fetch(`${api}/paytm/payment/${user._id}` , {
     method:'POST',
     headers:{
       Accept : 'application/json',
       "Content-Type": 'application/json',
       Authorization : `Bearer ${token}`,
        
     },
     body: JSON.stringify(data)
   }).then(response => response.json())
     .catch(err => console.log(err));   
}

export const orderPost = (prods)=>{
  return fetch(`${api}/user/order/${user._id}` , {
    method: 'POST',
    headers:{
      Accept : 'application/json',
      'Content-Type': 'application/json',
      Authorization:`Bearer ${token}`
    },
    body: JSON.stringify(prods)
  }).then(response => response.json())
    .catch(err => console.log(err));


}

export const orderGet = ()=>{
  return fetch(`${api}/user/order/${user._id}` , {
    method: 'GET',
    headers:{
      Accept : 'application/json',
      'Content-Type': 'application/json',
      Authorization:`Bearer ${token}`
    },
  }).then(response => response.json())
    .catch(err => console.log(err));


}




