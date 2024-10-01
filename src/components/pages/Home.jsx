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
            <div className="Bun-venit">
                    <h1 className="Bun">Bun venit</h1>
                    <h3 className="h3">La cabana noastră</h3>
                    <p className="bunText">La noi la cabana  este un proiect de suflet care s-a născut din 
                        dorința de a restaura o casa veche din Munții Apuseni, care 
                        inițial a fost gândita ca o casa de vacanta a familiei si care
                         ulterior a fost pusa in circuitul turistic pentru a împărtăși 
                         si altora frumusețea si energia acestui loc</p>
                </div>
            <div className="container-carusel">
                <div className="carusel-container">
                    <Carusel/>
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
            <div className="descopera">
                <h1>Descopera cabanele noastre dincolo de nori</h1>
                <div className="descopera_container">
                    <div className="descopera_img1">
                        <div>
                            <img src="../../../imagini/A1.jpg" alt="" />
                        </div>
                        <div className="overlay">
                            <h1>Casa Boema</h1>
                            <p>Capacitate: 2+1 persoane</p>
                            <button>Rezerva</button>
                        </div>
                    </div>
                    <div className="descopera_img2">
                        <div>
                            <img src="../../../imagini/a2.jpg" alt="" />
                        </div>
                        <div className="overlay">
                            <h1>Casa Boema</h1>
                            <p>Capacitate: 2+1 persoane</p>
                            <button>Rezerva</button>
                        </div>
                    </div>
                    <div className="descopera_img3">
                        
                        <div className="overlay">
                            <h1>Casa Boema</h1>
                            <p>Capacitate: 2+1 persoane</p>
                            <button>Rezerva</button>
                        </div>
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
