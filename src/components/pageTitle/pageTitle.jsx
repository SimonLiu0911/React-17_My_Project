import React from "react";

// import "./pageTitle.scss";

const Pagetitle = (props) => {
  const { title } = props;
  return <h1 id="pageTitle" className="font-size-2 mt-4 mb-3">{title}</h1>;
};

export default Pagetitle;
