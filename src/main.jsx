import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from './Components/About/About';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Users from './Components/Users/Users';
import Footer from './Components/Footer/Footer';
import UserDetails from './Components/UserDetails/Userdetails';
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/PostDetails/PostDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  children:[
{
  path:'/about',
  element: <About></About>
},
{
  path: '/users',
  loader : ()=> fetch('https://jsonplaceholder.typicode.com/users'),
  element: <Users></Users>
},
{
  path: '/user/:userId',
  loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.usrId}`),
  element:<UserDetails></UserDetails>
},
{
path:'/posts',
loader:()=> fetch('https://jsonplaceholder.typicode.com/posts'),
element: <Posts></Posts>
},
{
  path:'/post/:postId',
  loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
  element:<PostDetails></PostDetails>
},{
  path:'/footer',
  element: <Footer></Footer>
},

  ]
  
  
  }
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
