import React from "react";
import { Title } from "./pageTitleStyle";

// import "./pageTitle.scss";

const Pagetitle = (props) => {
  const { title } = props;
  return <Title className="font-size-2 mt-4 mb-3">{title}</Title>;
};

export default Pagetitle;
