import React, { useState } from 'react';

function Loginpage() {
  // Predefined "duplicate" email and password pairs
  const validCredentials = [
    { email: 'arravalipavan@gmail.com', password: '123' },
    { email: 'nandu@gmail.com', password: '123' },
    // Add more predefined email/password pairs as needed
  ];

  // State to store the user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state to track if the user is logged in

  // Function to handle the login process
  const handleLogin = () => {
    const valid = validCredentials.find((val) => val.email === email && val.password === password);

    if (valid) {
      setIsValid(true);
      setMessage(`Welcome, ${email}!`);
      setIsLoggedIn(true); // Set the user as logged in
    } else {
      setIsValid(false);
      setMessage('Invalid credentials.');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <>
      {isLoggedIn ? ( // Check if the user is logged in
        <div className="mt-5 text-center">
          <h2 style={{ color: 'green' }}>{message}</h2>
        </div>
      ) : (
        <div className="border w-25 mt-5 m-auto p-4 rounded shadow-lg bg-white" style={{ maxWidth: '400px' }}>
          <h2 className="text-primary text-center mb-4">Login Form</h2>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                borderRadius: '8px',
                padding: '10px',
                border: '1px solid #ced4da',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
              }}
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                borderRadius: '8px',
                padding: '10px',
                border: '1px solid #ced4da',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
              }}
            />
          </div>
          <button
            className="btn btn-primary w-100"
            style={{
              borderRadius: '8px',
              padding: '10px',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #007bff, #0056b3)',
              border: 'none',
              transition: 'background 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.background = 'linear-gradient(to right, #0056b3, #003d80)')}
            onMouseOut={(e) => (e.target.style.background = 'linear-gradient(to right, #007bff, #0056b3)')}
            onClick={handleLogin}
          >
            Login
          </button>

          {message && (
            <div className="mt-3 text-center" style={{ color: isValid ? 'green' : 'red' }}>
              {message}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Loginpage;
