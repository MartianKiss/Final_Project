import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Despre from "../components/pages/Despre";
import Galerie from "../components/pages/Galerie"
import ObiectiveTuristice from "../components/pages/ObiectiveTuristice";
import { Contact } from "../components/pages/Contact";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/despre" element={<Despre />} />
                <Route path="/galerie" element={<Galerie />} />
                <Route path="/obiective-turistice" element={<ObiectiveTuristice />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
