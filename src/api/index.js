/*
包含應用中所有街口請求函數的模塊
每個函數的反回值都是promise
*/

import ajax from "./ajax";

// 登錄
export const reqLogin = (email, password) => ajax("https://course-ec-api.hexschool.io/api/auth/login", { email, password }, "POST");

// 添加用戶
// export const reqAddUser = (user) => ajax("/manage/user/add", user, "POST");

// 確認Token
export const checkToken = (api_token) => ajax("https://course-ec-api.hexschool.io/api/auth/check", { api_token }, "POST")

// Logout
export const reqLogout = (api_token) => ajax("https://course-ec-api.hexschool.io/api/auth/logout", { api_token }, "POST")