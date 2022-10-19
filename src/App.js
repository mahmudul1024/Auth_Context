import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Layout/Login";
import Main from "./Components/Layout/Main";
import Registration from "./Components/Layout/Registration";
import Order from "./Components/Orders/Order";
import PrivateRoute from "./Components/Routes/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/login", element: <Login></Login> },
        { path: "/registration", element: <Registration></Registration> },
        {
          path: "/orders",
          element: (
            <PrivateRoute>
              <Order></Order>
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
