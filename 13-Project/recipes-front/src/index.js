import ReactDOM from 'react-dom/client';
import './index.css';
import RecipeList from './components/RecipeList/RecipeList';
import { StrictMode } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RecipeList countStart={1}/>
  </StrictMode>
);

