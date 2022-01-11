import React, { Component } from 'react'

class Navbar extends Component {
   static defaulProps = {
      title: 'Github Finder',
      icon: 'fab fa-github'
   }

   render() {
      return (
         <nav className='navbar bg-primary'>
            <h1>
               <i className='fab fa-github'/> {this.props.title}
               </h1>
         </nav>
      )
   }
}

export default Navbar
