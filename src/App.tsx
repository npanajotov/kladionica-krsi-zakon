import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "./routes";
import ScrollToTop from "./components/functional/ScrollToTop";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";

const App: React.FC = () => {
  return (
    <Router>
        <ScrollToTop>
            <Header />
            <Main>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
            </Main>
            <Footer />
        </ScrollToTop>
    </Router>
  );
};

export default App;
