import {createStore} from 'redux';

//Actions generator

const getProductByApi = (prod, sortBy) =>({
     type: 'GETPRODUCTBYAPI',
     productByApi : prod,
     sortBy:sortBy
})

const getProductBySearch = (prod , searchBy)=>({
     type: 'GETPRODUCTBYSEARCH',
     productBySearch: prod,
     searchBy
})
// cart actions

const getCartProduct = (prod)=>({
      type:'CARTPRODUCT',
      cartProd: prod
})

const removeCartProd = (id)=>({
    type: 'CARTREMOVE',
    id
})


const productQty = (qty , id)=>({
    type: 'QTYADD',
    qty,
    id
})

//Reducers 
const prodcutReducer = (productState = {sell:[] , createdAt:[] , search:[] , cartProduct:[]} , action)=>{
     const {productByApi, sortBy, searchBy ,cartProd , productBySearch,qty, id} = action
    switch(action.type){
        case 'GETPRODUCTBYAPI':
            return {
                  ...productState,
                [sortBy]  : productByApi}
        case 'GETPRODUCTBYSEARCH':
            return {
                ...productState,
                [searchBy]:productBySearch
            }
        case 'CARTPRODUCT':
            if(cartProd){
            const val=  productState.cartProduct.find((p) => p._id === cartProd._id)
           if(val){
               return {
                   ...productState
               };
           }  
           const arr = productState.cartProduct.concat(cartProd);
                return {
                    ...productState,
                     cartProduct : arr
                };
         
            }
            break;
        case 'CARTREMOVE':
            const filtarr = productState.cartProduct.filter((p)=> (p._id !==id));
            return {
                ...productState,
                cartProduct: filtarr
            }
            break;
        case 'QTYADD' :
            const maparr = productState.cartProduct.map((p)=>{
                if(p._id === id){
                    p.qty = qty
                    return p
                }
                return p
            })
            return{
                ...productState,
                cartProduct: maparr
            }       
          default: break;  
                
    }
}
// cart reducer and action

const productStore = createStore(prodcutReducer);

productStore.subscribe(()=>{
    console.log(productStore.getState());
})


export {productStore ,getProductByApi , getProductBySearch , getCartProduct ,removeCartProd,productQty}
//export default prodcutReducer;
