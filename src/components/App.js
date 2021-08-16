import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from "./views/NavBar/NavBar";
import Products from './views/Products/Products';
import Basket from './views/Basket/Basket';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/product" component={Products} />
          <Route exact path="/basket" component={Basket} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
