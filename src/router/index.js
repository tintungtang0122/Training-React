import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ROUTERS from '../constants/router';

const SignInContainer = lazy(() => import('../screens/account/index'));

const IntroduceContainer = lazy(() => import('../screens/introduce/index'));
const GuiContainer = lazy(() => import('../screens/gui'));
const HomePage = lazy(() => import('../screens/home'));
const Heading = lazy(() => import('../components/Heading'));

const Router = () => {
  // const token = useSelector((state) => state.account?.token);
  // const isAuthenticated = token !== '';
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="d-none">Loading.....</div>}>
        <Switch>
          <Route exact path={ROUTERS.LOGIN} component={SignInContainer} />
          <Route exact path={ROUTERS.GIOI_THIEU} component={IntroduceContainer} />
          <Route exact path={ROUTERS.GUI} component={GuiContainer} />
          <Route exact path={ROUTERS.MAIN_HOME} component={HomePage} />
          <Route exact path={ROUTERS.HEADING} component={Heading} />
          {/* <PrivateRoute
            isAuthenticated={isAuthenticated}
            exact
            path="/"
            component={mainPageContainer}
          />
          <PrivateRoute
            isAuthenticated={isAuthenticated}
            exact
            path={ROUTERS.PRODUCT_DETAIL}
            component={ProductDetailContainer}
          /> */}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
