import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import ProductPage from "../components/ProductPage";
import { AnimateSharedLayout } from "framer-motion";
import Menu from "../components/Menu";

const Routes = () => {
  return (
    <AnimateSharedLayout type="crossfade">
      <Router>
        <Menu />
        <Route
          render={({ location }) => (
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Home} />
              <Route exact path="/product/:id" component={ProductPage} />
            </Switch>
          )}
        />
      </Router>
    </AnimateSharedLayout>
  );
};

export default Routes;
