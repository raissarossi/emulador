import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider, Route, Routes, useNavigate, } from "react-router-dom";
import "./index.css";
import Aprovacao from './components/Aprovacao/Aprovacao';
import Form from './components/FormsEmulador/Form';
import Login from './components/Login/Login';
import Solicitacao from './components/Solicitacao/Solicitacao';
import Bosch from './components/Images/bosch';
import Aguarde from './components/Solicitacao/Aguarde';
import LoginAdmin from './components/Login/LoginAdmin';
import CriarAdmin from './components/Login/CriarAdmin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login  />,
  },
  {
    path: "/aprovacao",
    element: <Aprovacao />,
  },
  {
    path: "/formemulador",
    element: <Form />,
  },
  {
    path: "/solicitacao",
    element: <Solicitacao />,
  },
  {
    path: "/aguarde",
    element: <Aguarde />,
  },
  {
    path: "/loginadmin",
    element: <LoginAdmin  />,
  },
  {
    path: "/criaradmin",
    element: <CriarAdmin  />,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Bosch/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
    
)