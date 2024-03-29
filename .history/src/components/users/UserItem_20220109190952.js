import React, { Component } from 'react';

class UserItem extends Component {
   constructor(){
      super();
      this.state ={
         id: 'id',
         login: 'mojombo',
         avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
         html_url: 'https://github.com/defunkt'
      }
   }

   render() {
      return (
         <div className='card text-center'>
            <img src={this.state.avatar_url} className='round-img' style= {{width: "60px"}} />
            <h3>{this.state.login}</h3>
            <div>
               <a href={this.state.html_url} className='btn btn-dark btn-sm my-1' >More</a>
            </div>
         </div>
      )
   }
}

export default UserItem
