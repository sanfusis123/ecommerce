import React  , {Component} from 'react';
import {Route , Redirect} from 'react-router-dom';
import {userLoged} from '../../apimethod/user';


const PrivateRoute = ({component : Component,  ...rest})=>(
       
  <Route {...rest} render={props=>
        userLoged() && userLoged().user.role === 1  ?  
            (<Component {...props}/>)
          : (<Redirect to={{
              pathname: '/',
              state: {from : props.location}
             }} />)

        }
         />
)

export default PrivateRoute;