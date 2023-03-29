import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Exhibitions from './pages/Exhibitions'
import Navbar from './Navbar'

// createBrowserRouter
import { createHashRouter, RouterProvider } from 'react-router-dom'

function App() {
    const router = createHashRouter([
        {
            children: [
                { element: <Home />, path: '/' },
                { element: <About />, path: '/about' },
                { element: <Exhibitions />, path: '/exhibitions' }
            ],
            element: <Navbar />
        }
    ])

    return <RouterProvider router={router} />
}

export default App
