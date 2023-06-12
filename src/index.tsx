import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import translationEN from '../src/locales/en/translation.json';
import translationSR from '../src/locales/sr/translations.json';

i18n.init({
  interpolation: { escapeValue: false }, // Potrebno ako želite da koristite HTML u prevodima
  lng: 'en', // Početni jezik (engleski u ovom slučaju)

  resources: {
    en: {
      translation:
        translationEN
      ,
    },
    sr: {
      translation:
        translationSR
      ,
    },
  },
});


const queryConfig = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: false,
  },
}

const queryClient = new QueryClient({ defaultOptions: queryConfig }) //Kada koristimo defaultOptions opciju prilikom stvaranja instance, ta opcija će pregaziti inace postavljena podrazumevana (default) podesavanja.

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);




