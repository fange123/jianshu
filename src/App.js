import React, { Component } from "react";
import Header from "./components/header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./pages/detail";
import Home from "./pages/home";
import Login from "./pages/login";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        {/* TODO: Router下必须只有一个根元素，所以需要Routes包裹起来 */}
        <Routes>
          <Route path='/detail/:id' element={<Detail />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Router>
    );
  }
}
export default App;
