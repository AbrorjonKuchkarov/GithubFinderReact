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
         <div>
            User Item
         </div>
      )
   }
}

export default UserItem
