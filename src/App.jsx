import "./App.css";
import Download from "./components/Download/Download";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Features />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
