/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

import Login from '../Login/LoadableLogin';
import ErrorPage from '../../res/components/ErrorPage';

import GlobalStyle from '../../global-styles';
import { defaultTheme } from '../../res/themes/defaultTheme';
export default function App() {
  const [menuKey,setMenuKey] = useState(1);
  console.log(menuKey);
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route path="" render={() => <ErrorPage code="404" />} />
        </Switch>
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}
