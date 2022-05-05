import React, { useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { checkToken } from "../../api";

import PageTitle from "../../components/PageTitle/pageTitle";

const Product = (props) => {
  useEffect(() => {
    console.log('product');
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
  return (
    <>
      <PageTitle title={'產品'}></PageTitle>
    </>
  );
}

export default withRouter(Product);
