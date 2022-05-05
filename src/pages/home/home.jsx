import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { checkToken } from "../../api";
import { Table } from "react-bootstrap";

import BaseButton from "../../components/Base/BaseButton/BaseButton";

// Components
import PageTitle from "../../components/PageTitle/pageTitle";

const Home = (props) => {
  const clickAddBtn = () => {
    console.log(1);
  }

  // 用來確認是否可以登入
  useEffect(() => {
    const habdleToken = async () => {
      const apiToken = sessionStorage.getItem("apiToken")
      try {
        const response = await checkToken(apiToken)
        const { success } = response.data
        if (!success) {
          props.history.replace('/login')
        }
      } catch ({ response }) {
        props.history.replace('/login')
      }
    }
    habdleToken()
  }, [props.history])

  return <>
    <PageTitle title={'首頁'}></PageTitle>
    <div className="home_content rounded p-3">
      <div className="home_contnt_top d-flex justify-content-between align-items-center">
        <p className="m-0">分類</p>
        <BaseButton variant="primary" onClick={clickAddBtn} prefix="plus">新增</BaseButton>
      </div>
      <div className="home_content_bottom">
        <Table responsive="sm">
          <thead>
            <tr>
              {Array.from({ length: 6 }).map((_, index) => (
                <th key={index}>Table</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Array.from({ length: 6 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              {Array.from({ length: 6 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              {Array.from({ length: 6 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  </>;
};

export default withRouter(Home);
