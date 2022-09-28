import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './views/Home';
import Register from './views/Register';
import Login from './views/Login';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);



  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
