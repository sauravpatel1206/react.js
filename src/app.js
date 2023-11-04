import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import ThemeContext from './utils/context';
import { ContextapiA } from './Components/contextApi/ContextapiA';
import Hoooks from './Components/Hooks/hooks';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { NavLink } from "react-router-dom";
import { CotnextapiHome } from './Components/contextApi/CotnextapiHome';
import { Outlet } from "react-router-dom";
import { ReactConcept } from './Components/Higher order fun/ReactConcept';  
import ClassBased from './Components/Class Component/ClassBased';

//not goes in infinite loop
const App = () => {

  const [contextName, setContextName] = useState("we are in light context");
  return (
    <>
      <ThemeContext.Provider value={contextName}>
        <ContextapiA />
        <Hoooks />
      </ThemeContext.Provider>
    </>
  );
}
//not goes in infinite loop
const Home = () => {

  const [contextName, setContextName] = useState("we are in light context");
  return (
    <>
      
      
      <div style={{ display: 'flex',backgroundColor:"gray",padding:"10px",fontSize:"20px" ,margin:"10px" }}>
        <NavLink
          to="/context-api"
          style={{paddingLeft:"15px",color:"white","textDecoration":"none"}}
        >
          Contaxt Api
        </NavLink>
        <NavLink
          to="/hooks/userparmahook"
          style={{paddingLeft:"15px",color:"white","textDecoration":"none"}}
        >
         Hooks
        </NavLink>
        <NavLink
          to="/higher-order-react-concept"
          style={{paddingLeft:"15px",color:"white","textDecoration":"none"}}
        >
         Higher-order-fun
        </NavLink>
        <NavLink
          to="/class-component"
          style={{paddingLeft:"15px",color:"white","textDecoration":"none"}}
        >
         Class Component
        </NavLink>
      </div>

      <div style={{padding:"30px"}}>
      <Outlet />
      </div>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/context-api",
        element: <CotnextapiHome/>,
      },
      {
        path: "/hooks/:name",
        element: <Hoooks/>,
      },
      {
        path: "/higher-order-react-concept",
        element: <ReactConcept/>,
      },
      {
        path: "/class-component",
        element: <ClassBased/>,
      },
    ],
  },
 
]);

//  const parent = React.createElement("div",{},"my name is saurav");
//  const parent = React.createElement("div",{id:"parent"}, [React.createElement("div",{id:"child1"},"my name is saurav"),React.createElement("div",{id:"child2"},"my name is saurav")]);


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <RouterProvider router={router} />
);  //that append our parent to dom

