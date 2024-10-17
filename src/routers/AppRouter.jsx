import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Despre from "../components/pages/Despre";
import Galerie from "../components/pages/Galerie"
import ObiectiveTuristice from "../components/pages/ObiectiveTuristice";
import { Contact } from "../components/pages/Contact";
import Navbar from "../components/complex/Navbar";
import Footer from "../components/complex/footer"
import ScrollToTop from "../components/complex/ScrollToTop";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <ScrollToTop /> {/* Aicea se importa componenta care atunci cand se navigheaza de pe o pagina pe alta se va incepe din partea superioara a pagini */}
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/despre" element={<Despre />} />
                <Route path="/galerie" element={<Galerie />} />
                <Route path="/obiective-turistice" element={<ObiectiveTuristice />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default AppRouter;
