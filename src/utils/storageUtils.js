/* eslint-disable import/no-anonymous-default-export */
/**
 * 進行Local數據存儲管理的工具模塊
 */
const USER_KEY = "user_key";

export default {
  // 保存user
  saveUser(user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  // 讀取user
  getUser() {
    return JSON.parse(localStorage.getItem(USER_KEY) || "{}");
  },

  // 刪除user
  removeUser() {
    localStorage.removeItem(USER_KEY);
  },
};
