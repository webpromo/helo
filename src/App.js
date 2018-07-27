import React, { Component } from 'react';
// import Auth from './component/Auth/Auth';
// import Dashboard from './component/Dashboard/Dashboard';
// import Form from './component/Form/Form';
import Nav from './component/Nav/Nav';
// import Post from './component/Post/Post';
import routes from './route';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
<Nav />
{routes}
      </div>
    );
  }
}

export default App;
