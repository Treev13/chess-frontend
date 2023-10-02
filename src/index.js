import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssBaseline } from '@mui/material';

import Layout from "./Pages/Layout";
import ErrorPage from "./Pages/ErrorPage";
import PlayerList from "./Pages/PlayerList";
import PlayerDisplay from "./Pages/PlayerDisplay";
import PlayerCreator from "./Pages/PlayerCreator";
import PlayerUpdater from "./Pages/PlayerUpdater";
import TournamentList from "./Pages/TournamentList";
import TournamentDisplay from "./Pages/TournamentDisplay";
import TournamentUpdater from "./Pages/TournamentUpdater";
import PlayerOnTourDisplay from "./Pages/PlayerOnTourDisplay";

import './index.css';
import reportWebVitals from './reportWebVitals';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/players",
        element: <PlayerList />,
      },
      {
        path: "/player/:id",
        element: <PlayerDisplay />,
      },
      {
        path: "/player/create",
        element: <PlayerCreator />,
      },
      {
        path: "/player/update/:id",
        element: <PlayerUpdater />,
      },
      {
        path: "/tournaments",
        element: <TournamentList />,
      },
      {
        path: "/tournament/update/:id",
        element: <TournamentUpdater />,
      },
      {
        path: "/tournament/:id",
        element: <TournamentDisplay />
      },
      {
        path: "/playerontour/:id/:type",
        element: <PlayerOnTourDisplay />
      }]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline>
      <RouterProvider router={router} />
    </CssBaseline>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
