import React from "react";
import {withRouter} from "react-router-dom";

import sideNavList from "../../config/sideNavListConfig";
// import "./pageTitle.scss";

const Pagetitle = (props) => {
  const { pathname } = props.location
  const newSideNavItem = sideNavList.filter(sideNavItem => {
    return sideNavItem.path === pathname
  })
  return <h1 id="pageTitle" className="font-size-2 mt-4 mb-3">{newSideNavItem[0].name}</h1>;
};

export default withRouter(Pagetitle);
