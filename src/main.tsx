import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import { Router } from "./routes"
import { FormProvider } from './contexts/FormContext'

import GlobalStyles from './styles/global';
import { theme } from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <FormProvider>
          <Router/>
        </FormProvider>
    </ThemeProvider>
  </React.StrictMode>
)
