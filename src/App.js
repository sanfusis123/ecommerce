import React  from 'react';
import Appbar from './component/nav/appbar';
import {BrowserRouter , Route , Switch} from 'react-router-dom';
import HomePage from './routes/home';
import CategoryPage from './routes/category';
import Account  from './routes/account';
import CartPage from './routes/cart';
import WishList from './routes/wishlist';
import Notify from './routes/notify';
import Massege from './routes/message';
import NotFount from './routes/404';
import LogIn from './component/user/signin';
import SignUp from './component/user/signup';
import { CssBaseline } from '@material-ui/core';
import PrivateRoute from './component/admin/privateroute';
import AddProduct from './component/admin/addproduct';
import AddCategory from './component/admin/addcategory';
import {Provider} from 'react-redux';
import {productStore} from './redux/product';
import SingleProduct from './component/SingleProduct';
import Footer from './component/footer';

function App() {
      return( 
       <React.Fragment> 
           <CssBaseline />          
      <BrowserRouter >        
      <div>  <Provider store={productStore}>
           
              <Appbar />
              <Switch>
            
              <Route path='/' component={HomePage} exact={true} />
              <Route path='/product/:productId' component={SingleProduct} exact={true} />
              
              <Route path='/category' component={CategoryPage} />
              <Route path='/account' component={Account} />
              <Route path='/cart' component={CartPage} />
              <Route path='/wishlist' component={WishList} />
              <Route path='/notification' component={Notify} />
              <Route path='/message' component={Massege} />
              <Route path='/login' component={LogIn} />
              <Route path='/signup' component={SignUp} />

              <PrivateRoute path='/admin/create/product' component={AddProduct} />
              <PrivateRoute path='/admin/create/category' component={AddCategory} />
              <Route component={NotFount} />
             </Switch>
             </Provider>
             <Footer/>
              
            

      </div>
      </BrowserRouter>
      </React.Fragment>
        ) 
}

export default App;



