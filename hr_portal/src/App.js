// import './App.css';
// import Form from './Form';
// import Navbar from './Navbar';
// import Status from './Status';
// import Dbdisplay from './Dbdisplay';
// import LoginForm from './LoginForm';
// import { Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Form/>}/>
//         <Route path="/home" element={<Form />} />
//         <Route path="/status" element={<Status />} />
//         <Route path="/admin" element={<LoginForm />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import Form from './Form';
// import Navbar from './Navbar';
// import Status from './Status';
// import Dbdisplay from './Dbdisplay';
// import LoginForm from './LoginForm';
// import ForgotPassword from './ForgotPassword';
// import { Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Form />} />
//         <Route path="/home" element={<Form />} />
//         <Route path="/status" element={<Status />} />
//         <Route path="/admin" element={<LoginForm />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Navbar from './Navbar';
import Status from './Status';
import Dbdisplay from './Dbdisplay';
import LoginForm from './LoginForm';
// import ForgotPassword from './ForgotPassword';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [credentials, setCredentials] = useState({ username: 'admin', password: 'admin@101' });

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/home" element={<Form />} />
        <Route path="/status" element={<Status />} />
        <Route path="/admin" element={<LoginForm/>} />
      </Routes>
    </div>
  );
}

export default App;
