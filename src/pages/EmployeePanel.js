import React from 'react'
import { Route, Switch, useLocation } from 'react-router'
import EmployeePanelMenu from '../components/EmployeePanelMenu'
import UnconfirmedAdverts from '../components/UnconfirmedAdverts'
import {EmployeePanelOpenPage} from '../components/EmployeePanelOpenPage'

const EmployeePanel = () => {
  
const location = useLocation()
const isFeatureRendering = location.pathname.startsWith("/panel/employee/")

  return (
    <div>
      <EmployeePanelMenu />
      {!isFeatureRendering && <EmployeePanelOpenPage/>}
      <Switch>
        <Route path="/panel/employee/unconfirmedadverts" component={UnconfirmedAdverts} />
      </Switch>
    </div>
  )
}

export default EmployeePanel
