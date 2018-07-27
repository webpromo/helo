
import React from 'react';

import { Link } from 'react-router-dom';

export default function Nav(props)  {
    return (
      <div>
        <Link to='/dashboard'><button className='btn'>Home</button></Link>
        <Link to='/new'><button className='btn'>New Post</button></Link>
        <Link to='/'><button className='btn'>Logout</button></Link>
      
      {/* You are currently on page {this.props.location.pathname} */}
      </div>

  )
}