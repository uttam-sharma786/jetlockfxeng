import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n'

// Small delay to ensure i18n is fully initialized
setTimeout(() => {
  createRoot(document.getElementById("root")!).render(<App />);
}, 100);
