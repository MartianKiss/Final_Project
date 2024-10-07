import {useState,} from "react";
import Modal from "../complex/Modal"; // Importă componenta Modal
import RezervForm from "../complex/rezervForm";
import "../../styling/Galerie.css"

const Galerie = () =>{

  const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
        setShowForm(true); // Afișează modalul când se apasă butonul
    };

    const handleCloseModal = () => {
        setShowForm(false); // Închide modalul
    };


  return(
    <>
    <div>Galerie
      <button onClick={handleButtonClick}>Rezerva ➮</button>
      <div className="cab_1">
        <div className="cab_1_container">
          <div className="img_1">
          <button onClick={handleButtonClick}>
            <img src="../../../imagini/img_001.jpg" alt="" />
            <h1 className="hover-text">Rezerva ➮</h1>
          </button>
            
          </div>
          <div className="img_2-3">
            <div className="img_2"><img src="../../../imagini/img_007.jpg" alt="" /></div>
          < div className="img_3"><img src="../../../imagini/img_008.jpg" alt="" /></div>
          </div>
        </div>
        <div className="img_all">
          <div className="all">
          <div><img src="../../../imagini/img_002.jpg" alt="" /></div>
          <div><img src="../../../imagini/img_004.jpg" alt="" /></div>
          <div><img src="../../../imagini/img_006.jpg" alt="" /></div>
          </div>
          <div className="all_1">
            <div><img src="../../../imagini/img_003.jpg" alt="" /></div>
            <div><img src="../../../imagini/img_005.jpg" alt="" /></div>
            <div><img src="../../../imagini/img_009.jpg" alt="" /></div>
          </div>
        </div>
      </div>
    <Modal show={showForm} onClose={handleCloseModal}>
      <RezervForm />
    </Modal> {/* Afișează modalul cu formularul în interior */}

    </div>
    
    </>

  )
}

export default Galerie;