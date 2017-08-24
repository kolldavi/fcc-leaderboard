import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component{
 static propTypes = {
   user: PropTypes.object.isRequired
 }

 render(){
   const user = this.props.user

   return (
     <div className='user'>
        <td className='username'>
           <img className='userImg' src={user.img} alt='user'/>
            <a href={`https://www.freecodecamp.com/${user.username}`}>{user.username}</a>
        </td>
        <td className='points'>
           <h4>{user.recent}</h4>
        </td>
        <td className='points'>
           <h4>{user.alltime}</h4>
        </td>
     </div>
   )
 }
}

export default User
