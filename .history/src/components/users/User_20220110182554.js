import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'


class User extends Component {
   componentDidMount( ) {
      this.props.getUser(this.props.match.params.login)
   }

   static propTypes = {
      loading: PropTypes.bool,
      user: PropTypes.object.isRequired,
      getUser: PropTypes.func.isRequired,
   }

   render() {
      const {
         name,
         avatar_url,
         location,
         bio,
         blog,
         login,
         html_url,
         followers,
         following,
         public_repos,
         public_gists,
         hireable
      } = this.props.user;

      const {loading} = this.props;

      if(loading) return <Spinner/>
      return (
      <Fragment>
         <Link to='/' className='btn btn-light' >Back To Search</Link>
         Hireable: { ' ' }
         {hireable ? (
            <i className='fas fa-check text-success' />) : (<i className='fas fa-times-circle text-danger' />
         )}
         <div className='card grid-2' >
            <div className='all-center' >
               <img src={avatar_url} className='round-img' alt='avatar img' style={{width: '150px'}} />
               <h1>{name}</h1>
               <p>Location: {location}</p>
            </div>
            <div>
               {bio && (
                  <Fragment>
                     <h3>Bio</h3>
                     <p>{bio}</p>
                  </Fragment>
               )}
            </div>
         </div>
      </Fragment>

      )   

   }
}

export default User
