import './App.css';
import Register from './Register';
import Login from './Login';
import Navbar from './Navbar';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="page">
      <Navbar />
      <Route exact path="/register">
        <Register />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

    </div>
  );
}

export default App;
