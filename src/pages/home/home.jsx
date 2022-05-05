import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
// import memoryUtils from "../../utils/memoryUtils";
import { checkToken } from "../../api";

// Components
import PageTitle from "../../components/PageTitle/pageTitle";

const Home = (props) => {

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
    <div className="home_content p-3">123</div>
  </>;
};

export default withRouter(Home);
