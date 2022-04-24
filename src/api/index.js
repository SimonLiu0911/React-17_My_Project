/*
包含應用中所有街口請求函數的模塊
每個函數的反回值都是promise
*/

import ajax from "./ajax";

// 登錄
export const reqLogin = (username, password) => ajax("/login", { username, password }, "POST");

// 添加用戶
export const reqAddUser = (user) => ajax("/manage/user/add", user, "POST");

