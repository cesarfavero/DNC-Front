import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')
const root = createRoot(container)
import { App } from './App'


root.render(<App />)

//Modo de renderização do React 18