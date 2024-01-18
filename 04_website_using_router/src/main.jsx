import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Comonents/Home.jsx'
import About from './Comonents/About.jsx'
import Contactus from './Comonents/Contactus.jsx'
import User from './User/User.jsx'
import Github from './Comonents/Github.jsx'

// const router = createBrowserRouter([
//   // Add your routes here...
//   {
//     path: '/', //top leevel element
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home/>
//       }, 
//       {
//         path: 'about',
//         element: <About/>
//       }, 
//       {
//         path: 'contactus',
//         element: <Contactus/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contactus' element={<Contactus />} />
      <Route path='user/:UserId' element={<User />} />
      {/* user/:id provides the individual user if to login  */}
      <Route path='github' element={<Github />} />
      {/* we can access the loader property for the route */}
    </Route>)
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* we wont be exporting app here, we will use router method */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
