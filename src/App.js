import { useReactiveVar } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import { isLoggedInVar, darkModeVar } from "./apollo"
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, ligthTheme } from "./styles";
import SingUp from "./screens/SingUp";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar)
  const darkMode = useReactiveVar(darkModeVar)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : ligthTheme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            {isLoggedIn ? <Home /> : <Login />}
          </Route>
          {!isLoggedIn ? <Route path="/sign-up"><SingUp /></Route> : null}
          <Route><NotFound /></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
