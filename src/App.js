import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Notfound from './components/NotFound/Notfound';
import Shope from './components/Shope/Shope';
import ViewCart from './components/ViewCart/ViewCart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Shope />
          </Route>
          <Route path="/shop">
            <Shope />
          </Route>
          <Route path="/viewCart">
            <ViewCart />
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
