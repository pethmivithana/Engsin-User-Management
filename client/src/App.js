import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AdminDash from './components/Admin/AdminDash';
import TopNav from './components/topNav';
import Profile from './components/User/Profile';
import Recovery from './components/User/Recovery';
import Reset from './components/User/Reset';
import User_login from './components/User/User_login';
import User_signup from './components/User/User_signup';
import Usermanage from './components/User/Usermanage';



function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
      
          <Route path="/login" element={<User_login />} /> {/* New route for user login */}
          <Route path="/signup" element={<User_signup />} /> {/* New route for user signup */}
          <Route path="/reset/:token" element={<Reset/>} /> 
          <Route path="/recover" element={<Recovery/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/" element={<><TopNav/></>} />
          


          <Route path="/admindash" element={<AdminDash />} />
          <Route path="/usermanage" element={<><AdminDash /> <Usermanage/></>} />
          <Route path="/profile/:id" element={<Profile />} /> {/* Admin can view any user’s profile */}


          
        </Routes>
      

      
    </div>
    </Router>
    
  );
}

export default App;
