import Header from "./Components/Header";
import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Cart from "./Components/Cart";
import ProductDetail from "./Components/ProductDetail";
import {Provider} from "react-redux";
import store from "./utils/store";



const App = ()=> {
  return (
    <Provider store={store}>
        <Header/>
        <Outlet/>
        <Footer/>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/About",
        element:<About/>
      },
      {
        path:"/Contact",
        element:<Contact/>,
      },
      {
        path:"/Cart",
        element:<Cart/>,
      },
      {
        path:"/clothes/:id",
        element:<ProductDetail/>
    }
    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);