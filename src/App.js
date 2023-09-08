import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import './App.css';
// import Home from './pages/Home';
import Root from './pages/Root';
import Register from './pages/Register';
import Login from './pages/Login';
import ErrorNotFound from './pages/ErrorNotFound';
import VocationalTest from './pages/VocationalTest';
// import AboutUs from './pages/AboutUs';
import LearnSTEM from './pages/LearnSTEM';
import Content from './pages/Content';
import ScrollToTopOnNavigate from './util/ScrollToTopOnNavigate';
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import theme from './theme'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Root />
        <ScrollToTopOnNavigate />
      </>
    ),
    errorElement: <ErrorNotFound />,
    children: [
      { path: "", element: <LearnSTEM /> }, // Componente Home no se está usando, se reemplazó por LearnSTEM
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      // { path: "about-us", element: <AboutUs /> }, // Se ha quitado la ruta porque ya no es necesario
      { path: "vocational-test", element: <VocationalTest /> },
      { path: "content", element: <Content /> },
      // { path: "learn", element: <LearnSTEM /> }, // Se ha quitado la ruta porque ya no es necesario
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