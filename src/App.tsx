import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MagicLine from "./components/magicLine";
import Home from "./pages/home";
import Success from "./pages/success";
import './styles/app.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <MagicLine />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
