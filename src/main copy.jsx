

import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import Login from './Login'
import Amazon from './Amazon/AmazonHeader1'

import About from './AboutUs/About.jsx'
import NeatStarter from './NeatStarter.jsx'
import AmazonBody from './Amazon/AmazonBody.jsx'
import AmazonApp from './Amazon/AmazonApp.jsx'
import AmazonContainer from './Amazon/AmazonContainer.jsx'
import Api from './Api/Api.jsx'
import DynamicText from './hari1.jsx'


import Blog from './Portfolio/Blog/Blog.jsx'
import Router1 from './Portfolio/Router/Router1.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode >
    {/*<NeatStarter/>
    <Login/>
    <About/>*/}
    {/* <AmazonContainer/> */}
    {/*<AmazonApp/>   <Api/>  <DynamicText/>*/}
   {/* <Headerport className="bg-slate-400"/> */}
   <Router1/>
    
  </StrictMode>,
)
