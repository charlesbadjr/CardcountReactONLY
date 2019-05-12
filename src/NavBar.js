import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class NavBar extends Component {
  

  render() {
    return (
      <div className="navBar" >
        <Menu >
          <Link to="/">
            <Menu.Item name="home" />
          </Link>
       
        <Link to="/PlayCards">
          <Menu.Item name="Play" />
        </Link>
      </Menu>
  
      </div>
    );
  }
}


export default NavBar;

