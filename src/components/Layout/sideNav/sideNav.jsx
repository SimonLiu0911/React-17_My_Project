import React from "react";
import { withRouter, NavLink } from "react-router-dom";

// import "./sideNav.scss";
import {SideNavStyle, SideNavTitleStyle, SideNavWrapStyle} from "./sytle";

import sideNavList from "../../../config/sideNavListConfig";

const Sidenav = (props) => {
  return (
    <SideNavStyle>
      <SideNavTitleStyle>
        <span>後台管理</span>
      </SideNavTitleStyle>
      <SideNavWrapStyle>
        <ul>
          {sideNavList.map((sideNavItem) => {
            return (
              <li key={sideNavItem.id}>
                <NavLink
                  activeClassName="active"
                  to={sideNavItem.path}
                >
                  {sideNavItem.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </SideNavWrapStyle>
    </SideNavStyle>
  );
};
const SidenavWithRouter = withRouter(Sidenav);
export default SidenavWithRouter;
