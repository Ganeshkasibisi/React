import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import {Outlet} from 'react-router-dom';
import RestaurantMenu from "./components/RestaurantMenu"
import UserContext from './utils/UserContext';
import {useState, useEffect} from 'react';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart'; 

/*
    1. Header
        - Logo
        - Nav Items
    2. Body
        - Search
        - Restaurant Card
    3. Footer
        - Copyright
        - Links
        - Address
        - Contact
*/

const AppLayout = () => {
    const[userName, setUserName] = useState();

    useEffect(()=>{
     const data ={
        name:"Ganesh K"
     };
     setUserName(data.name);
    },[])
    return (
        <Provider store={appStore}>
   <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
   <div className="app">
        <Header/>
        <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
    )
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children: [
        {
             path: '/',
            element: <Body />,
        },   
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/restaurants/:resId",
            element:<RestaurantMenu/>
        },
        {
            path:"/cart",
            element:<Cart/>
        }
        ],
        errorElement:<Error/>
        }
   
       ]) 


const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);