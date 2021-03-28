import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Support from "./components/Support/Support";
import TermsAndCondition from "./components/TermsAndCondition/TermsAndCondition";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Route path="/" component={Dashboard} exact />
        <Route path="/privacy-policy" component={PrivacyPolicy} exact />
        <Route path="/terms-of-service" component={TermsAndCondition} exact />
        <Route path="/support" component={Support} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
