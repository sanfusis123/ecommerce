const getCart = ()=>{
    if(localStorage.getItem('cart')){
        return JSON.parse(localStorage.getItem('cart'));
    }
    return []
}
export const addItem = (item , next)=>{

    if(typeof window !== 'undefined'){
        let cart = [];
           cart = getCart();
        cart.push({
            ...item,
            count:1
        });
        
        cart = Array.from(new Set(cart.map((p) => (p._id)))).map(id =>{
            return cart.find(p => p._id === id)
        });

        localStorage.setItem('cart' , JSON.stringify(cart));
        if(next && typeof next === 'function'){
            next();
          }
         
    }

}

export const countItem = (next)=>{
      let cart = [];
      if(typeof window !== 'undefined'){
        cart = getCart();
        }
      console.log(cart.length);
      if(!next){
           return cart.length;
      }
      if(next && typeof next === 'function'){

        return  next(cart.length);
      }
      
}