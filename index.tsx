
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import CifApp from './cif/CifApp.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Could not find root element");

// Roteamento leve por caminho: sem lib de rotas, seguindo o padrão sem dependências
// pesadas já usado no resto do projeto. "/criacaointeligentedefilhos" é a página
// de vendas do Método CIF; qualquer outro caminho mantém o site original.
const path = window.location.pathname.replace(/\/+$/, '') || '/';
const PageComponent = path === '/criacaointeligentedefilhos' ? CifApp : App;

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <PageComponent />
  </React.StrictMode>
);
