import React from "react";
import { Link, withRouter } from "react-router-dom";

// import "./sideNav.scss";

import sideNavList from "../../../config/sideNavListConfig";

const Sidenav = (props) => {
  const { pathname } = props.location;
  const checkActive = () => {
	  if (pathname === '/role') return 'active'
	  return ''
  }
  return (
    <div id="sideNav">
      <div className="title">
        <span>後台管理</span>
      </div>
      <div className="sideNav">
        <ul>
          {sideNavList.map((sideNavItem) => {
            return (
              <li className={checkActive()} key={sideNavItem.id}>
                <Link className="sideNav_link" to={sideNavItem.path}>
                  {sideNavItem.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
const SidenavWithRouter = withRouter(Sidenav);
export default SidenavWithRouter;
