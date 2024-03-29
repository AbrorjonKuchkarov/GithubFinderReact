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
  }

  async componentDidMount() {
    this.setState({loading: true})

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secrete=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({users: res.data, loading: false})
  }

  searchUsers = text =>{
    console.log(text);
  }

  render() {
    const {users, loading} = this.state;
    return (
      <div className='App'>
        <Navbar />
        <div className='container' >
        <Search searchUsers={this.searchUsers} /> 
          <Users users={users} loading={loading} />
        </div>

      </div>
    )
  }
}


export default App;
