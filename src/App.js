import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import CRUDAxios from "./pages/CRUDAxios";
import "antd/dist/antd.css";

const DefaultPage = () => {
  return (
    <div id="container">
        <div id="bg"><img width="100%" height="100%" src="milk background.jpg" alt="background" /></div>  
        <div id="homepage">
          <h1>WEB BÁN ĐỒ GIA DỤNG</h1>
          <img src="milkbanner.jpg" width="100%" alt="banner" style={{height: '80px'}} />
        </div>
        <div id="menu">
          <div className="home"><a href="App.js"><img src="home.png" alt="home icon" style={{width: '30px', height: '30px'}} /></a></div>
          <ul>
            <li><Link to="/products" >Thông Tin Sản Phẩm</Link></li>
            <li><Link to="javascript:void(0)">Danh Sách Đơn Hàng</Link></li>
            <li><Link to="javascript:void(0)">Thông Tin Khách Hàng</Link></li>
          </ul>
        </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/products">
          <CRUDAxios />
        </Route>
        {/*<Route path="/product/:id">
          <CRUDStatic />
        </Route>*/}
        <Route path="/">
          <DefaultPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
