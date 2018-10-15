import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Menu.css';

export default class Menu extends Component {
    state = {
        dropdownOpen: false
    }

    toggleHandler = () => {
        this.setState( (prevState) => {
          return {dropdownOpen: !prevState.dropdownOpen}
        });
    }

    render() {
        return (
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleHandler}>
            <DropdownToggle className="Menu" caret>
            Order Overwiew
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>English</DropdownItem>
              <DropdownItem>Spanish</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        );
      }
}
