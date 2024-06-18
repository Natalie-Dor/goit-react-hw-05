import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './index.css';
import 'modern-normalize';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// e55c53756133ccdba699b07cf2d9ba8e
// токен доступу для читання api:
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTVjNTM3NTYxMzNjY2RiYTY5OWIwN2NmMmQ5YmE4ZSIsInN1YiI6IjY2NWI0MzQxZTJkNzA0NGJiNTQ3ZTA5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IITZYDh-x2wc2Btm6Po97qcqVrqpFiPW0ZI0GwxxFGQ
//
// Критична проблема полягає в невідповідності завданню щодо використання useLocation hook та пропа state. В завданні вказано, що компонент MovieList має містити проп state із значенням { from: location }, і для надання цього значення має використовуватися useLocation hook. Це важлива частина для реалізації логіки повернення назад, яка не працює правильно.
//
//
