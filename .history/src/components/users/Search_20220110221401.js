import React from 'react';
import PropTypes from 'prop-types'


const Search = () => {
   state ={ 
      text: ' '
   }

   onSubmit = e => {
      e.preventDefault();
      if(this.state.text === ' '){
         this.props.setAlert('Please enter the text', 'light')
      }else{
         this.props.searchUsers(this.state.text);
         this.setState({text: ' '})
      }
   }

   onChange = e => {
      this.setState({[e.target.name]: e.target.value})
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

Search.propTypes = {
   searchUsers: PropTypes.func.isRequired,
   clearUsers: PropTypes.func.isRequired,
   showClear: PropTypes.bool.isRequired,
   setAlert: PropTypes.func.isRequired,
}

export default Search
