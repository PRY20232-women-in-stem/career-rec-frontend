import './App.css';
import Home from './pages/Home';
import Root from './pages/Root';
import Register from './pages/Register';
import Login from './pages/Login';
import ErrorNotFound from './pages/ErrorNotFound';
import VocationalTest from './pages/VocationalTest';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorNotFound />,
    children: [
      { path: "", element: <Home /> },
      { path: "about-us", element: <Home /> },
      { path: "vocational-test", element: <VocationalTest /> },
      { path: "learn", element: <Home /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;