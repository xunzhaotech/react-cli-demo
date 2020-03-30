/*
 * @Author: your name
 * @Date: 2020-03-30 14:33:50
 * @LastEditTime: 2020-03-30 14:49:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-cli-demo\src\react.js
 */
import React, { Component } from 'react';
import ReactDom from 'react-dom';
class App extends Component {
    
    render() {
        return <div>
            hello word`12
        </div>
    }
}
// 需要在 index.html 中增加一个 div标签 id 设置为 'app'
ReactDom.render(<App />, document.getElementById('app'));