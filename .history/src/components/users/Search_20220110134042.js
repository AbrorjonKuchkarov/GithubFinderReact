import React, { Component } from 'react'

class Search extends Component {
   state ={ 
      text: ''
   }

   onChange = e => {
      this.setState({text: e.target.value})
   }
   
   onSubmit = e => {
      e.preventDefault();
      this.setState({text: e.target.value})
   }

   render() {
      return (
         <form className='form' onSubmit={this.onSubmit} >
            <input type='text' name='text' placeholder='Search Users...' value={this.state.value} onChange={this.onChange} />
            <input type='submit' value='Search' className='btn btn-dark btn-block' />
            
         </form>
      )
   }
}

export default Search
