import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import TermsAndCondition from "./components/TermsAndCondition/TermsAndCondition";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { useEffect } from "react";
import EditorialPolicy from "./components/EditorialPolicy/EditorialPolicy";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, mirror: false });
  }, []);
  return (
    <>
      <HashRouter>
        <div className="App">
          <ScrollToTop />
          <Route path="/" component={Dashboard} exact />
          <Route path="/privacy-policy" component={PrivacyPolicy} exact />
          <Route path="/terms-of-service" component={TermsAndCondition} exact />
          <Route path="/editorial-policy" component={EditorialPolicy} exact />
        </div>
      </HashRouter>
    </>
  );
}

export default App;
