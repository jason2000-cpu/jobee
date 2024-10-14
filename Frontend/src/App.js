import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import JobSearch from './pages/JobSearch';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import JobDetailView from './pages/JobDetailView';
import Contacts from './pages/Contacts';
import Blogs from './pages/Blogs';
import UserDashboard from './pages/User/Dashboard';
import UserResume from './pages/User/UserResume';
import SavedJobs from './pages/User/SavedJobs';
import Settings from './pages/User/Settings';

const userContext = createContext();

function App() {
  const [ isLoggedIn , setIsLoggedIn ] = useState(true);

  return (
    <userContext.Provider value={{ isLoggedIn }} >
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/job-search' element={<JobSearch />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register'  element={<Register />} />
            <Route path='/details/:jobId' element={<JobDetailView />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/dashboard' element={<UserDashboard />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/my-resume/:loc' element={<UserResume />} />
            <Route path='/saved-jobs' element={<SavedJobs />} />
          </Routes>
        </Router>
      </div>
    </userContext.Provider>
  );
}

export default App;


export const useUser = () => {
  return useContext(userContext);
}
