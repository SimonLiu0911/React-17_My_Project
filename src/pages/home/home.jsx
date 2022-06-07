import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { checkToken } from "../../api";
// import { Table } from "react-bootstrap";

// fake data
import { titleList, categoryList } from "../../fake-data/home";

// Base Component
import BaseButton from "../../components/Base/BaseButton/BaseButton";
import BaseTable from "../../components/Base/BaseTable/BaseTable";

// Components
import PageTitle from "../../components/PageTitle/pageTitle";

const Home = (props) => {
  const clickAddBtn = () => {
    console.log("trigger clickAddBtn");
  };

  // 用來確認是否可以登入
  const handleToken = async () => {
    const apiToken = sessionStorage.getItem("apiToken");
    try {
      const response = await checkToken(apiToken);
      const { success } = response.data;
      if (!success) {
        props.history.replace("/login");
      }
    } catch ({ response }) {
      props.history.replace("/login");
    }
  };

  useEffect(() => {
    handleToken();
  }, [props.history]);

  return (
    <>
      <PageTitle title={"首頁"}></PageTitle>
      <div className="home_content rounded p-3">
        <div className="home_contnt_top d-flex justify-content-between align-items-center mb-4">
          <p className="m-0">分類</p>
          <BaseButton variant="primary" onClick={clickAddBtn} prefix="plus">
            新增
          </BaseButton>
        </div>
        <div className="home_content_bottom">
          <BaseTable titleList={titleList} categoryList={categoryList}></BaseTable>
        </div>
      </div>
    </>
  );
};

export default withRouter(Home);
