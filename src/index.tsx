import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './styles/global.module.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/Home';
import Game from './pages/game/Game';
import Result from './pages/result/Result';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>Error</div>,
  },
  {
    path: 'game/:gameId',
    element: <Game />,
  },
  {
    path: 'result',
    element: <Result />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
