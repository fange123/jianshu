import React, { Component } from "react";
import Header from "./components/header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          {/* TODO: Router下必须只有一个根元素，所以需要Routes包裹起来 */}
          <Routes>
            <Route path='/about' element={<div>about</div>}></Route>
            <Route path='/users' element={<div>users</div>}></Route>
            <Route path='/' element={<div>home</div>}></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
export default App;
