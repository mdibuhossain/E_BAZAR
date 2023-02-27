import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import CompleteOrder from './components/CompleteOrder/CompleteOrder';
import Header from './components/Header/Header';
import Notfound from './components/NotFound/Notfound';
import Shope from './components/Shope/Shope';
import Signin from './components/Signin/Signin';
import ViewCart from './components/ViewCart/ViewCart';
import AuthProvider from './Context/AuthProvider';
import AuthRoute from './routes/AuthRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Shope />
            </Route>
            <Route path="/shop">
              <Shope />
            </Route>
            <Route path="/view-cart">
              <AuthRoute><ViewCart /></AuthRoute>
            </Route>
            <Route path="/complete-order">
              <CompleteOrder />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
