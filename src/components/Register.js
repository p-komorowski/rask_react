import { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const submitRegHandler = async (e) => {
    e.preventDefault();
    const body = { name, email, password, role };
    await fetch('http://localhost:4000/auth/register', {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }).then(() => {
      console.log(body);
    });
  };

  return (
    <div className="container">
      <form onSubmit={submitRegHandler}>
        <div>
          <h1> Registration </h1>
          <div className="label-reg-username">
            <label> Username </label>
            <input
              type="text"
              placeholder="ExampleUser"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="label-reg-email">
            <label> Email </label>
            <input
              type="text"
              placeholder="example@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="label-reg-role">
            <label> Role </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="user">User</option>
              <option value="moderator">Moderator</option>
            </select>
          </div>
          <div className="label-reg-pass">
            <label> Password </label>
            <input
              type="password"
              placeholder="*******"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input className="btn-log" type="submit" value="Sign Up" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
