import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About  from './components/pages/About';
import './App.css';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // Search Github Users
  const searchUsers = async text =>{
    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setUsers(res.data.items)
    setLoading(false);
  }

  //Get single Github user
  const getUser = async username => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

      setUser(res.data);
      setLoading(false);
  }

  // Get users props
  const getUserRepos = async username => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setRepos(res.data);
    setLoading(false);
  }

  //Clear Users
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  }

  //Set Alert
  const showAlert = (msg, type) => {
    setAlert(msg, type)

    setTimeout(() => setAlert( null ), 2000)
  }

  return (
      <Router>
          <div className='App'>
            <Navbar />
            <div className='container' >
            <Alert alert= {alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers} 
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false  }
                     setAlert={showAlert}
                   /> 
                  <Users users={users} loading={loading} />
              </Fragment>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props => (
                <User {...props} getUser={getUser} getUserRepos={getUserRepos} repos={repos} user={user} loading={loading} />
              )} />
            </Switch>
            </div>
          </div>
    </Router>
    )
}


export default App;
