import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './components/Users';
import Backend from './components/Backend';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';

const App = () => {
  const Login1 = (details) => {
    console.log(details);
  };
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Users />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Login Login={Login1} />
                <Register Login={Login1} />
                <Link className="btn-back" to="/">
                  {' '}
                  Go Back
                </Link>
              </>
            }
          />
          <Route path="/books" element={<Backend />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
