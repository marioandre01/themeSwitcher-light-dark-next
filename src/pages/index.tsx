import { ThemeProvider, DefaultTheme } from 'styled-components';
import { useState } from 'react';
import usePersistedState from '../utils/usePersistedState';

import GlobalStyle from '../styles/globals';
import Header from '../components/Header';


import light from '../styles/themes/light';
import dark from '../styles/themes/dark';


export default function Home() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  // const [theme, setTheme] = useState(light);
  

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme}/>
      </div>
    </ThemeProvider>

  )
}
