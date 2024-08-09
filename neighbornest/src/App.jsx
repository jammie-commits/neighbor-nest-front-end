// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// // import DefaultPage from './pages/DefaultPage'; // Import DefaultPage
// // import ContactUs from './components/ContactUs/ContactUs'; // Import ContactUs
// // import AboutUs from './components/AboutUs/AboutUs'; // Import AboutUs
// // import Dashboard from './components/Superadmin/Dashboard'; // Import Dashboard
// // import './App.css';
// // import '@fortawesome/fontawesome-free/css/all.min.css';

// // function App() {
// //   return (
// //     <Router>
// //       <div className="App">
// //         <nav>
// //           <ul>
// //             <li>
// //               <Link to="/">Home</Link>
// //             </li>
// //             <li>
// //               <Link to="/about">About Us</Link>
// //             </li>
// //             <li>
// //               <Link to="/contact">Contact Us</Link>
// //             </li>
// //             <li>
// //               <Link to="/dashboard">Dashboard</Link> {/* Add Dashboard link */}
// //             </li>
// //           </ul>
// //         </nav>
// //         <Routes>
// //           <Route path="/" element={<DefaultPage />} /> {/* Default route */}
// //           <Route path="/about" element={<AboutUs />} />
// //           <Route path="/contact" element={<ContactUs />} />
// //           <Route path="/dashboard/*" element={<Dashboard />} /> {/* Add Dashboard route */}
// //           <Route path="*" element={<DefaultPage />} /> {/* Handle unmatched routes */}
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import DefaultPage from './pages/DefaultPage'; // Import DefaultPage
// import ContactUs from './components/ContactUs/ContactUs'; // Import ContactUs
// import AboutUs from './components/AboutUs/AboutUs'; // Import AboutUs
// import Dashboard from './components/Superadmin/Dashboard'; // Import Dashboard
// import ProfilePage from './components/ProfilePage';
// import './App.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import ProfilePage from './components/ProfilePage';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* Removed the navigation links */}
//         <Routes>
//           <Route path="/" element={<DefaultPage />} /> {/* Default route */}
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/contact" element={<ContactUs />} />
//           <Route path="/dashboard/*" element={<Dashboard />} /> {/* Add Dashboard route */}
//           <Route path="/profilepage/*" element={<ProfilePage />} />
//           <Route path="*" element={<DefaultPage />} /> {/* Handle unmatched routes */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DefaultPage from './pages/DefaultPage'; // Import DefaultPage
import ContactUs from './components/ContactUs/ContactUs'; // Import ContactUs
import AboutUs from './components/AboutUs/AboutUs'; // Import AboutUs
import Dashboard from './components/Superadmin/Dashboard'; // Import Dashboard
import ProfilePage from './components/ProfilePage'; // Import ProfilePage
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DefaultPage />} /> {/* Default route */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/dashboard/*" element={<Dashboard />} /> {/* Dashboard route */}
          <Route path="/profile" element={<ProfilePage />} /> {/* ProfilePage route */}
          <Route path="*" element={<DefaultPage />} /> {/* Handle unmatched routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

