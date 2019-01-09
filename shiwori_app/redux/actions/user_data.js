// ユーザーデータに対する処理を行うメソッド群

import { SET_USER_ID } from './type';
import { SET_USER_NAME } from './type';
import { SET_USER_EMAIL } from './type';
import { SET_USER_PASS } from './type';

import { CLEAR_USER_ID } from './type';
import { CLEAR_USER_NAME } from './type';
import { CLEAR_USER_EMAIL } from './type';
import { CLEAR_USER_PASS } from './type';
import { CLEAR_USER_DATA } from './type';


// @param : str
export const set_uid = (id) =>({
    type : SET_USER_ID,
    id : id
});

// @param : str
export const set_uname = (name) =>({
    type : SET_USER_NAME,
    name : name
});

// @param : str
export const set_uemail = (email) =>({
    type : SET_USER_EMAIL,
    email : email 
});

// @param : str
export const set_upass = (pass) =>({
    type : SET_USER_PASS,
    pass : pass
});

export const clear_uid = () =>({
    type : CLEAR_USER_ID,
    id : ''
});

export const clear_uname = () =>({
    type : CLEAR_USER_NAME,
    name : ''
});

export const clear_uemail = () =>({
    type : CLEAR_USER_EMAIL,
    email : ''
});

export const clear_upass = () =>({
    type : CLEAR_USER_PASS,
    pass : ''
});

// 未定
export const clear_udata = () =>({
    type : CLEAR_USER_DATA,
    id : '',
    name : '',
    email : '',
    pass : ''
});