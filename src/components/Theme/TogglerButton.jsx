import React, { useState, useEffect } from "react";
import {ThemeProvider} from "styled-components";
import  {useDarkMode} from "./useDarkMode";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Themes";
import Toggle from "./Toggler";
import '../../App.css'

const TogglerButton= () => {
  
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!mountedComponent) return <div/>

  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
        <div className="App">
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </div>
      </>
    </ThemeProvider>
    
  );
};

export default TogglerButton;
