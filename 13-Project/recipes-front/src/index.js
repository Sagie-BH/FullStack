import ReactDOM from 'react-dom/client';
import './index.css';
import { StrictMode } from 'react';
import { AuthProvider } from './components/Auth/AuthContext';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);

