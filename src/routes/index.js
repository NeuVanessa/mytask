import { Switch } from "react-router-dom";

import Home from "../pages/home";
import Login from "../pages/login";
import Route from "./routes";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} isPrivate />
    </Switch>
  );
};

export default Routes;
