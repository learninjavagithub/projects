import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Routes from "./Routes.js";

const switchRoutes = (
  <Switch>
    {Routes.map((prop, key) => {
      return (
        <Route
          exact
          path={prop.path}
          component={prop.component}
          key={key}
        />
      );
    })}
  </Switch>
);

function App() {
  return (
    <div>
      <div>{switchRoutes}</div>
    </div>
  );
}

export default App;
