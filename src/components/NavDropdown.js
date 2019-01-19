import React, {Component} from "react";
import { MenuItem, SplitButton } from "react-bootstrap";
import { NavLink } from 'react-router-dom';


class NavDropdown extends Component {
  render(){
    return(
        <SplitButton title={"Project Menu"}>
          <MenuItem id={'clock'}>
            <NavLink to="/clock">
              <h1>Clock</h1>
            </NavLink>
          </MenuItem>
          <MenuItem id={'weather'}>
            <NavLink to="/weather">
              <h1>Weather</h1>
            </NavLink>
          </MenuItem>
          <MenuItem id={'towers of hanoi'}>
            <NavLink to="/towers">
              <h1>Towers of Hanoi</h1>
            </NavLink>
          </MenuItem>
        </SplitButton>
    )}
} 

  export default NavDropdown;