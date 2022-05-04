import axios from "axios";

/**
 * 在外層包一個自己創建的promise對象
 * 在請求出錯時，不reject(error)，而是顯示錯誤提示
 */

export default function ajax(url, data = {}, type) {
  return new Promise((resolve, reject) => {
    let promise;
    // 1. 執行異步ajax請求
    switch (type) {
      case "GET":
        promise = axios.get(url, {
          params: data,
        });
        break;
      case "POST":
        promise = axios.post(url, data);
        break;
      default:
        return
    }
    promise
      .then((response) => {
        // 2. 如果成功，調用resolve(value)
        resolve(response);
      })
      .catch((error) => {
        // 3. 如果失敗，不調用reject(reason)，而是提示異常訊息
        reject(error)
      });
  });
}
