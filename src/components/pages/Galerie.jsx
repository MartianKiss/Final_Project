import {useState,} from "react";
import Modal from "../complex/Modal"; // Importă componenta Modal
import RezervForm from "../complex/rezervForm";

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
    <Modal show={showForm} onClose={handleCloseModal}>
      <RezervForm />
    </Modal> {/* Afișează modalul cu formularul în interior */}

    </div>
    
    </>

  )
}

export default Galerie;