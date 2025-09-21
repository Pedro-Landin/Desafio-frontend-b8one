import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import Categoria from "./components/pages/categoria";
import Ofertas from "./components/pages/ofertas";

export default function appRouter() {
  return (
    <main className="container">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/categoria' element={ <Categoria />} />
          <Route path='/ofertas' element={ <Ofertas />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
