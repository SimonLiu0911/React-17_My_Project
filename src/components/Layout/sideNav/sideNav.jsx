import React, { useState } from "react";
import { withRouter, NavLink } from "react-router-dom";

// import "./sideNav.scss";

import sideNavList from "../../../config/sideNavListConfig";

const Sidenav = (props) => {
  return (
    <>
      <div id="sideNav_wrap">
        <div className="title">
          <span>後台管理</span>
        </div>
        <div className="sideNav">
          <ul>
            {sideNavList.map((sideNavItem) => {
              return (
                <li key={sideNavItem.id}>
                  <NavLink
                    activeClassName="active"
                    className="sideNav_link"
                    to={sideNavItem.path}
                  >
                    {sideNavItem.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
const SidenavWithRouter = withRouter(Sidenav);
export default SidenavWithRouter;
