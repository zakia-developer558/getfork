
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import LandingPage from "./pages/landing-page";
import TermsAndConditions from "./pages/term-conditions";
import ContactPage from "./pages/contact-page";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
