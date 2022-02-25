import React, { Component } from "react";
import Header from "./components/header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./pages/detail";
import Home from "./pages/home";
import Login from "./pages/login";
import Write from "./pages/write";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        {/* TODO: Router下必须只有一个根元素，所以需要Routes包裹起来 */}
        <Routes>
          {/* react-router-dom@6 版本可以省略/ 更简洁 https://juejin.cn/post/7029615069679845384 */}
          <Route path='detail/:id' element={<Detail />}></Route>
          <Route path='' element={<Home />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='write' element={<Write />}></Route>
        </Routes>
      </Router>
    );
  }
}
export default App;
