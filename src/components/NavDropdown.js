import React, {Component} from "react";
import { MenuItem, DropdownButton } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';


class NavDropdown extends Component {
  render(title, i){
    return(
        <DropdownButton 
          title={"Project Menu"}
          id={"Dropdown"}
          >
          <MenuItem eventKey="1">
            <LinkContainer to="/clock" componentclass="span">
              <h1>Clock</h1>
            </LinkContainer>
          </MenuItem>
          <MenuItem eventKey="2">
            <LinkContainer to="/weather" componentclass="span">
              <h1>Weather</h1>
            </LinkContainer>
          </MenuItem>
          <MenuItem eventKey="3">
            <LinkContainer to="/towers" componentclass="span">
              <h1>Towers of Hanoi</h1>
            </LinkContainer>
          </MenuItem>
        </DropdownButton>
    )}
} 

  export default NavDropdown;