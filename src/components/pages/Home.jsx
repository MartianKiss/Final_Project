import {useState,} from "react";
import Navbar from "../complex/Navbar";
import "../../styling/Home.css";
import "../../styling/Carusel.css"
import Carusel from "../complex/Carusel";
import Modal from "../complex/Modal"; // Importă componenta Modal
import RezervForm from "../complex/rezervForm";
import { Link } from "react-router-dom";


const Home = () => {
    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
        setShowForm(true); // Afișează modalul când se apasă butonul
    };

    const handleCloseModal = () => {
        setShowForm(false); // Închide modalul
    };

    return (
        <div className="Body">
            <Navbar />
            <div className="container">
                <div className="carusel-container">
                    <Carusel/>
                </div>
                <div>
                    <h1 className="Bun-venit">Bun venit</h1>
                    <h3 className="h3">La cabana noastră</h3>
                </div>
            </div>
            <div className="container-text">
                <div className="text-title">
                    <div className="title">
                        <h1>Petrece o vacanță liniștită.</h1>
                    </div>
                    <div className="text">
                         <p>Cu vedere la munți, dincolo de nori locația noastră este dedicată oamenilor care iubesc,respectă natura și liniștea ei, 
                         astfel ne dorim ca cei ce ne calcă pragul să fie în asentimentul nostru. 
                          
                         </p>
                     </div>
                     <div className="btn">
                        <button onClick={handleButtonClick}>Rezervă acum ➮</button>
                     </div>
                    </div>
                <div>
                    <img src="../../../imagini/h1.jpeg" alt="" />
                </div>
            </div>
            <div className="atractii">
                    <img src="../../../imagini/at1.jpg" alt="" />
                    <div className="text-title">
                        <div className="title">
                            <h1>Casa memoriala Horea</h1>
                        </div>
                        <div  className="text">
                            <p>Din păcate casa în care a crescut și a locuit Horea acum nu mai este. Autoritățile au ridicat un monument
                            pe acel loc, iar la 20 metri mai spre deal se poate vizita Casa Memorială Horea .
                            În incinta Casei Memoriale se regăsesc multe obiecte folosite de Horea, cea mai 
                            remarcabilă fiind lancea cu care acesta pleca la luptă.
                            </p>
                        </div>
                        <div className="btn_1">
                           <Link to="obiective-turistice">
                                <button >Obiective turistice ➮</button>
                            </Link>
                        </div>
                    </div>
            </div>
            <Modal show={showForm} onClose={handleCloseModal}>
                <RezervForm />
            </Modal> {/* Afișează modalul cu formularul în interior */}
        </div>
    )  
};

export default Home;
