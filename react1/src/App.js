import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Exhibitions from './pages/Exhibitions'
import ModernExhibit from './pages/ModernExhibit'
import HistoricalExhibit from './pages/HistoricalExhibit'
import Navbar from './Navbar'

// createBrowserRouter
import { createHashRouter, RouterProvider } from 'react-router-dom'

function App() {
    const router = createHashRouter([
        {
            children: [
                { element: <Home />, path: '/' },
                { element: <About />, path: '/about' },
                { element: <Exhibitions />, path: '/exhibitions' },
                { element: <ModernExhibit />, path: '/modernexhibit' },
                { element: <HistoricalExhibit />, path: '/historicalexhibit' }
            ],
            element: <Navbar />
        }
    ])

    return <RouterProvider router={router} />
}

export default App
