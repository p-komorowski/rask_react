import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="register">
      <div className="btn-reg">
        <Link className="link-color" to="/register">
          Register/Login
        </Link>
      </div>
      <div className="btn-get">
        <Link className="link-color" to="/books">
          Get Books
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
