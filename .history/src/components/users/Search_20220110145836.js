import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Search extends Component {
   state ={ 
      text: ''
   }

   static propTypes = {
      searchUsers: PropTypes.func.isRequired,
      clearUsers: PropTypes.func.isRequired,
      showClear: PropTypes.bool.isRequired,
   }

   onChange = e => {
      this.setState({text: e.target.value})
   }
   
   onSubmit = e => {
      e.preventDefault();
      this.props.searchUsers(this.state.text);
      this.setState({text: ''})
   }

   render() {
      const {showClear, clearUsers} = this.props;
      return (
         <div>
            <form className='form' onSubmit={this.onSubmit} >
               <input type='text' name='text' placeholder='Search Users...' value={this.state.value} onChange={this.onChange} />
               <input type='submit' value='Search' className='btn btn-dark btn-block' />
            </form>
            {showClear && (
            <button className='btn btn-light btn-block' onClick={clearUsers} >Clear</button>
            )}
         </div>
      )
   }
}

export default Search
