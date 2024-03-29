import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import './App.css';
import axios from 'axios';

 class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }


  // Search Github Users
  searchUsers = async text =>{
    this.setState({loading: true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

      this.setState({users: res.data.items, loading: false})
  }

  //Clear Users
  clearUsers = () => {
    this.setState({users: [], loading: false});
  }

  //Set Alert
  setAlert = (msg, type) => {
    this.setState({alert: {msg, type}})
  }

  render() {
    const {users, loading} = this.state;
    return (
      <div className='App'>
        <Navbar />
        <div className='container' >
        <Search
          searchUsers={this.searchUsers} 
          clearUsers={this.clearUsers}
         showClear={users.length > 0 ? true : false  }
         setAlert={this.setAlert}
         /> 
          <Users users={users} loading={loading} />
        </div>

      </div>
    )
  }
}


export default App;
