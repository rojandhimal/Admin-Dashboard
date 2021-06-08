import React from 'react'
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({component:Component,...rest}) => {
    return  <Route  {...rest } component={(prpos) => {
        const token = localStorage.getItem('token');
        if(token){
            return <Component {...prpos}/>
        }else{
            return <Redirect to='/signin' />
        }
    }}/>     
}

export default PrivateRoute;
