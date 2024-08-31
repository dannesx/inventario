import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from './components/theme-provider'
import { ComputerProvider } from './contexts/ComputerContext'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<ComputerProvider>
				<App />
			</ComputerProvider>
		</ThemeProvider>
	</StrictMode>
)
