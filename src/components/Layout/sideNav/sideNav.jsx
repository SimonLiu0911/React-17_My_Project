import React from "react";
import { Link } from "react-router-dom"
import "./sideNav.scss";
const sideNavList = [
  {
    id: "1",
    name: "列表一",
    path: "/list1"
  },
  {
    id: "2",
    name: "列表二",
    path: "/list2"
  },
  {
    id: "3",
    name: "列表三",
    path: "/list3"
  },
]

const Sidenav = () => {
  return (
    <div id="sideNav">
      <div className="title">
        <span>後台管理</span>
      </div>
      <div className="sideNav">
        <ul>
          {
            sideNavList.map(sideNavItem => {
              return (
                <li key={sideNavItem.id}>
                  <Link to={sideNavItem.path}>{sideNavItem.name}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
