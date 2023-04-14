import './App.css'
import { DarkModeProvider } from './components/DarkModeContext'
import Container from './components/Container'

function App() {
    return (
        <>
            <DarkModeProvider>
                <Container />
            </DarkModeProvider>
        </>
    )
}

export default App
