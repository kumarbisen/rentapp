

import HomePage from "./routes/homePage/homePage"

import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import Register from "./routes/Register/register";


function App() {
 

    const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout/>,
        children:[

          {
            path:"/",
            element:<HomePage/>
          },
          {
            path:"/list",
            element:<ListPage/>
          },
          {
            path:"/register",
            element:<Register/>
          },
          {
            path:"/:id",
            element:<SinglePage/>
          }
          
        ]
      }
    ]);
    
    return (

    
    <RouterProvider router={router}/>
  )
}

export default App