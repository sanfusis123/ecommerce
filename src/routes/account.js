import React from 'react';
import {userLoged} from '../apimethod/user';
import { Redirect } from 'react-router-dom';
import DashBoard from '../component/user/dashboard';
import AdminDashBoard from '../component/admin/dashoboard';
const reDirectTo = ()=>{
   const jwt = userLoged()
    if(!jwt){
      return (<Redirect to='/login' />)
   }
}

export default ()=>{
    return(
        <div>
            {reDirectTo()}
           {userLoged().user.role === 1 &&(<AdminDashBoard />)}
           {userLoged().user.role === 0 &&(<DashBoard />)}
        </div>
         )
}