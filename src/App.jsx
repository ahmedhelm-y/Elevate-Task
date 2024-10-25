import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home.jsx';

function App() {


  let router = createBrowserRouter([
    { path: '/', element: <Layout />, children: [
      { index: true, element: <Home /> }
    ] }
  ]);




  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
