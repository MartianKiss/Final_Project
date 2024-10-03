import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Despre from "../components/pages/Despre";
import Galerie from "../components/pages/Galerie"
import ObiectiveTuristice from "../components/pages/ObiectiveTuristice";
import { Contact } from "../components/pages/Contact";
import Navbar from "../components/complex/Navbar";
import Footer from "../components/complex/footer"

const AppRouter = () => {
    return (
        <BrowserRouter>
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
