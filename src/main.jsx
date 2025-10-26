import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home/Home.jsx'
import PagErro from './pages/erro/PagErro.jsx'
import Jogo from './pages/jogo/Jogo.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <PagErro />,
  },
  {
    path: '/jogo',
    element: <Jogo />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
