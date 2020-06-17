import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import UploadProductPage from './views/UploadProductPage/UploadProductPage'
import DetailProductPage from './views/DetailProductPage/DetailProductPage';
import CartPage from './views/CartPage/CartPage';
import HistoryPage from './views/HistoryPage/HistoryPage';
import RecommendPage from './views/RecommendPage/RecommendPage';
import BestPage from './views/BestPage/BestPage';
import NewPage from './views/NewPage/NewPage';
import UserInfoPage from './views/UserInfoPage/UserInfoPage';
import AdminInfoPage from './views/AdminInfoPage/AdminInfoPage';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/product/upload" component={Auth(UploadProductPage, true)} />
          <Route exact path="/product/:productId" component={Auth(DetailProductPage, null)} />
          <Route exact path="/user/cart" component={Auth(CartPage, true)} />
          <Route exact path="/history" component={Auth(HistoryPage, true)} />
          <Route exact path="/recommend" component={Auth(RecommendPage,null)}/>
          <Route exact path="/best" component={Auth(BestPage,null)}/>
          <Route exact path="/new" component={Auth(NewPage,null)}/>
          <Route exact path="/userinfo" component={Auth(UserInfoPage,null)}/>
          <Route exact path="/admininfo" component={Auth(AdminInfoPage,null)}/>
          
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
