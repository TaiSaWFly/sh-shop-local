import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/ui/footer/footerComponent/footer";
import Header from "./components/ui/header/headerComponent/header";
import CollectionLayout from "./components/layouts/collectionLayout";
import AboutPage from "./components/page/aboutPage/aboutPage";
import BasketPage from "./components/page/basketPage/basketPage";
import MainPage from "./components/page/mainPage/mainPage";
import PageLayout from "./components/layouts/pageLayout";
import AuthLayout from "./components/layouts/authLayout/authLayout";
import AccountLayout from "./components/layouts/accountLayout/accountLayout";
import ContactPage from "./components/page/contactPage/contactPage";
import ProductCardLayout from "./components/layouts/productCardLayout/productCardLayout";
import ProtectedRoute from "./components/common/protectedRoutes/protectedRoute";
import NewArrivalsPage from "./components/page/newProductsPages/newArrivalsPage";
import withRedux from "./hoc/withRedux";
import withRouter from "./hoc/withRouter";
import AppLoader from "./hoc/appLoader";

function App() {
  return (
    <AppLoader>
      <Header />
      <PageLayout>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/auth" component={AuthLayout} />
          <ProtectedRoute path="/account" component={AccountLayout} />
          <Route path="/collection" component={CollectionLayout} />
          <Route path="/product/:productId?" component={ProductCardLayout} />
          <Route path="/basket" component={BasketPage} />
          <Route path="/newarrivals" component={NewArrivalsPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />

          <Redirect to="/" from="*" />
        </Switch>
      </PageLayout>
      <Footer />
    </AppLoader>
  );
}

const AppWithStoreAndRoutes = withRedux(withRouter(App));
export default AppWithStoreAndRoutes;
