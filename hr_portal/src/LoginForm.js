import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import Dbdisplay from './Dbdisplay';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = credentials;

    const storedUsername = process.env.REACT_APP_USERNAME;
    const storedPassword = process.env.REACT_APP_PASSWORD;

    if (username === storedUsername && password === storedPassword) {
      setIsLoggedIn(true);
    } else {
      setError('Invalid username or password');
    }
  };

  if (isLoggedIn) {
    return <Dbdisplay />;
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
      </div>

      {error && <p className="error">{error}</p>}

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import './LoginForm.css';
// import Dbdisplay from './Dbdisplay';

// const LoginForm = () => {
//   const [credentials, setCredentials] = useState({ username: '', password: '' });
//   const [error, setError] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({
//       ...credentials,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { username, password } = credentials;

//     if (username === 'admin' && password === 'admin@101') {
//       setIsLoggedIn(true);
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   if (isLoggedIn) {
//     return <Dbdisplay />;
//   }

//   return (
//     <form className="login-form" onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           value={credentials.username}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={credentials.password}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       {error && <p className="error">{error}</p>}

//       <button type="submit">Login</button>
//       <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
//     </form>
//   );
// };

// export default LoginForm;

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import './LoginForm.css';
// import Dbdisplay from './Dbdisplay';

// const LoginForm = () => {
//   const [credentials, setCredentials] = useState({ username: '', password: '' });
//   const [error, setError] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({
//       ...credentials,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { username, password } = credentials;

//     if (username === 'admin' && password === 'admin@101') {
//       setIsLoggedIn(true);
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   if (isLoggedIn) {
//     return <Dbdisplay />;
//   }

//   return (
//     <form className="login-form" onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           value={credentials.username}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={credentials.password}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       {error && <p className="error">{error}</p>}

//       <button type="submit">Login</button>
//       <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
//     </form>
//   );
// };

// export default LoginForm;

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import './LoginForm.css';
// import Dbdisplay from './Dbdisplay';

// const LoginForm = ({ credentials, setCredentials }) => {
//   const [inputCredentials, setInputCredentials] = useState({ username: '', password: '' });
//   const [error, setError] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputCredentials({
//       ...inputCredentials,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { username, password } = inputCredentials;

//     if (username === credentials.username && password === credentials.password) {
//       setIsLoggedIn(true);
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   if (isLoggedIn) {
//     return <Dbdisplay />;
//   }

//   return (
//     <form className="login-form" onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           value={inputCredentials.username}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={inputCredentials.password}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       {error && <p className="error">{error}</p>}

//       <button type="submit">Login</button><br></br>
//     </form>
//   );
// };

// export default LoginForm;

