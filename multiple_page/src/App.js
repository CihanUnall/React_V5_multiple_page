import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from "./pages/notFound";
import HomeInfo from "./pages/homeInfo";
import HomeProduct from "./pages/homeProduct";
import Container from "./components/container";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Container />
      <Routes>
        <Route to="/" element={<Home />}>
          <Route to="homeInfo" element={<HomeInfo />} />
          <Route to="homeProduct" element={<HomeProduct />} />
        </Route>
        <Route to="/about" element={<About />} />
        <Route to="/contact" element={<Contact />} />
        <Route to="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
