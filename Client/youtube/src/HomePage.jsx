import React, { createContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx'
import "../src/App.css"
import{CartProvider} from '../src/context/CartContext.jsx'
import MobileOnly from '../components/MobileOnly.jsx'


export default function(){
    let Navigate=useNavigate()
    const [cookies] = useCookies()
    useEffect(()=>{
        if(!cookies.token){
            Navigate('/login')
        }
        else{
            Navigate('/home')
        }
    },[])
    return(
        <>
        <CartProvider>
        <Header/>
        <Outlet/>
        </CartProvider>
        <Footer/>
        <MobileOnly/>
        </>
    )
}