import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import Navigation from "./navigation/Navigation";

import { mainRoutes } from "../routes/mainRoutes";
import { optionRoutes } from "../routes/optionRoutes";
import Spiner from "./loader/Loader";

const App = () => (
  <Layout>
    <Navigation />
    <Suspense fallback={<Spiner />}>
      <Switch>
        {mainRoutes.map((route) => (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
      {optionRoutes.map((route) => (
        <Route
          key={route.path}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      ))}
    </Suspense>
  </Layout>
);

export default App;
