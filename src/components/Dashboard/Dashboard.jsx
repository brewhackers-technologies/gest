import React from "react";
import Download from "../Download/Download";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";

export default function Dashboard() {
  return (
    <div>
      <Home />
      <Features />
      <Download />
      <Footer />
    </div>
  );
}
