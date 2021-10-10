import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, MenuItem, MenuItemContainer, MenuTitle } from './style'

const EmployeePanelMenu = () => {
  return (
    <Menu>
      <MenuTitle><Link to="/panel/employee" className="title">Employee Panel</Link></MenuTitle>
      <MenuItemContainer>
        <MenuItem style={{ marginTop: '70px' }}><Link to="/panel/employee/unconfirmedadverts" className="link">Unconfirmed Adverts</Link></MenuItem>
        <MenuItem><Link to="/panel/employee" className="link">Feature 1</Link></MenuItem>
        <MenuItem><Link to="/panel/employee" className="link">Feature 2</Link></MenuItem>
      </MenuItemContainer>
    </Menu>
  )
}

export default EmployeePanelMenu
