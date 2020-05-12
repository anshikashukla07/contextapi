import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './AuthContext'
import WelcomeUser from './WelcomeUser'
import Posts from './Posts'
import Navbar from './Navbar'
import Login from './Login'
import ProtectedRoute from './ProtectedRoute'
import Home from './Home'
import history from './history';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <BrowserRouter history={history}>
      <AuthProvider>
        <Navbar />
        <Switch>
          <ProtectedRoute path="/posts" component={Posts} />
          <Route exact path="/" component={WelcomeUser} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/navbar" component={Navbar} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  </div>
)

export default App;
