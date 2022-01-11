import React, { Component } from 'react'
const  name = 'github'
class Navbar extends Component {
   render() {
      return (
         <nav className='navbar bg-primary'>
            <h1>
               <i className='fab fa-github'/> {name}
               </h1>
         </nav>
      )
   }
}

export default Navbar
