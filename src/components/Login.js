import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitLogHandler = async (e) => {
    e.preventDefault();
    const body = { email, password };
    await fetch('/auth/login', {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'include',
      body: JSON.stringify(body),
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="container">
      <form onSubmit={submitLogHandler}>
        <div className="log-window">
          <h1>Login</h1>
          <div className="label-log-email">
            <label>Email</label>
            <input
              type="text"
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="label-log-pass">
            <label>Password</label>
            <input
              type="password"
              placeholder="Your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input className="btn-log" type="submit" value="Log in" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
