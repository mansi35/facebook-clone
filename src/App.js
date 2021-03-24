import './App.css';
import MyFeed from './MyFeed';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div className="app">
    <Router>
    <AuthProvider>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>

      <PrivateRoute exact path="/" component={MyFeed} />
      </Switch>
      </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
