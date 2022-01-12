import React, { useEffect, useContext, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';




const User = (  ) => {
   const githubContext = useContext(GithubContext);

   const {getUser, loading, user, getUserRepos, repos, match} = githubContext;
   useEffect( () => {
      getUser(match.params.login)
     getUserRepos(match.params.login)
     //eslint-disable-next-line
   }, [])


      const {
         name,
         avatar_url,
         location,
         bio,
         blog,
         login,
         html_url,
         company,
         followers,
         following,
         public_repos,
         public_gists,
         hireable
      } = user;

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
               <a href={html_url} className='btn btn-dark my-1'> Visit Github Profile </a>
               <ul>
                  <li>
                     {login && (
                        <Fragment>
                           <strong>Username:</strong> {login}
                        </Fragment>
                     )}
                  </li>
                  <li>
                     {company && (
                        <Fragment>
                           <strong>Company:</strong> {company}
                        </Fragment>
                     )}
                  </li>
                  <li>
                     {blog && (
                        <Fragment>
                           <strong>Website:</strong> {blog}
                        </Fragment>
                     )}
                  </li>
               </ul>
            </div>
         </div>

         <div className='card text-center' >
            <div className='badge badge-primery' >Followers: { followers }</div>
            <div className='badge badge-success' >Following: { following }</div>
            <div className='badge badge-danger' >Public Repos: { public_repos }</div>
            <div className='badge badge-dark' >Public Gists: { public_gists }</div>
         </div>
         <Repos repos={repos} />
      </Fragment>
      )   
}


export default User