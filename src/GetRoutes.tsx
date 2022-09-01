import React from 'react';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';

function GetRoutes(){

    return(

        <Router><Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='Home' element={<Home/>}/>
         
        </Routes></Router>

    );
    
}export default GetRoutes;