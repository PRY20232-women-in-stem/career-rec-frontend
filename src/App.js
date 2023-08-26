import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import './App.css';
import Home from './pages/Home';
import Root from './pages/Root';
import Register from './pages/Register';
import Login from './pages/Login';
import ErrorNotFound from './pages/ErrorNotFound';
import VocationalTest from './pages/VocationalTest';
import AboutUs from './pages/AboutUs';
import LearnSTEM from './pages/LearnSTEM';
import Content from './pages/Content';
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import theme from './theme'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorNotFound />,
    children: [
      { path: "", element: <Home /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "vocational-test", element: <VocationalTest /> },
      { path: "content", element: <Content /> },
      { path: "learn", element: <LearnSTEM /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </div>
  );
}

export default App;