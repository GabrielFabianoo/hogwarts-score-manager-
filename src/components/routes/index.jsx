import { Switch, Route } from "react-router-dom";
import Home from "../../pages/home";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
  </Switch>
);

export default Routes;
