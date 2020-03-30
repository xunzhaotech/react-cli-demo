/*
 * @Author: your name
 * @Date: 2020-03-30 13:33:20
 * @LastEditTime: 2020-03-30 14:09:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-cli-demo\src\main.js
 */
import '@babel/polyfill';
const arr = [new Promise(() => { }), new Promise(() => { })];
arr.map(item => {
    console.log(item);
})