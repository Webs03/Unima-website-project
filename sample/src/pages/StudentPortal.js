import React, { useState } from 'react';

export default function StudentPortal() {
  const [regNo, setRegNo] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with:\nReg No: ${regNo}\nPassword: ${password}`);
    // Later: You can connect this to a backend
  };

  const handleReset = () => {
    setRegNo('');
    setPassword('');
  };

  return (
    <div className="section">
      <h1>Student Portal Login</h1>
      <form className="portal-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Registration Number"
          value={regNo}
          onChange={(e) => setRegNo(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="btn-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
}
