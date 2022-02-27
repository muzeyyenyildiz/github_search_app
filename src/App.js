import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { HOME_SCREEN, STARED_REPOS_SCREEN } from "./constants/navigations";
import HomeScreen from "./screens/home";
import StaredReposScreen from "./screens/staredRepos";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path={`${STARED_REPOS_SCREEN}`}>
          <StaredReposScreen />
        </Route>
        <Route exact path={`${HOME_SCREEN}`}>
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
