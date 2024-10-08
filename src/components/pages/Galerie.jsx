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
    <div className="main">
      <h1 className="main_h">Locatiile noastre</h1>
    
      <div className="cont_mid">
        <div className="cont_title">
          <h1 className="title">Casa deasupra de nori</h1>
          <p className="desc">Este prima din sirul celor 3 cabane nordice, tip A cu perete mare de
            sticla pe fatada „cu vedere dincolo de nori ”   catre un peisaj de vis si cu terasa infinity.
            Te asteapta cu un ambient cald, plin de culoare si viu, fiind o continuare a ceea ce se 
            vede afara, inauntrul casei.
          </p>
        </div>

        <div className="cab_1">
          <div className="cab_1_container">
            <div className="img_1">
            <button onClick={handleButtonClick}>
              <img src="../../../imagini/img_001.jpg" alt="" />
              <h1 className="hover-text">Rezerva ➮</h1>
            </button>
            </div>
            <div className="img_2-3">
              <div className="img_2">
                <button onClick={handleButtonClick}>
                  <img src="../../../imagini/img_007.jpg" alt="" />
                  <h1 className="hover-text">Rezerva ➮</h1>
                </button>
              </div>
            < div className="img_3">
              <button onClick={handleButtonClick}>
                <img src="../../../imagini/img_008.jpg" alt="" />
                <h1 className="hover-text">Rezerva ➮</h1>
              </button>
            </div>
          </div>
          </div>
          <div className="img_all">
            <div className="all">
            <div>
                <button onClick={handleButtonClick}>
                  <img src="../../../imagini/img_002.jpg" alt="" />
                  <h1 className="hover-text">Rezerva ➮</h1>
                </button>
              </div>
            <div>
                <button onClick={handleButtonClick}>
                  <img src="../../../imagini/img_004.jpg" alt="" />
                  <h1 className="hover-text">Rezerva ➮</h1>
                </button>
            </div>
            <div>
                <button onClick={handleButtonClick}>
                  <img src="../../../imagini/img_006.jpg" alt="" />
                  <h1 className="hover-text">Rezerva ➮</h1>
                </button>
            </div>
            </div>
            <div className="all_1">
              <div>
                <button onClick={handleButtonClick}>
                  <img src="../../../imagini/img_003.jpg" alt="" />
                  <h1 className="hover-text">Rezerva ➮</h1>
                </button>
              </div>
              <div>
                <button onClick={handleButtonClick}>
                  <img src="../../../imagini/img_005.jpg" alt="" />
                  <h1 className="hover-text">Rezerva ➮</h1>
                </button>
                </div>
              <div>
                <button onClick={handleButtonClick}>
                  <img src="../../../imagini/img_009.jpg" alt="" />
                  <h1 className="hover-text">Rezerva ➮</h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="cont_mid">
        <div className="cont_title">
          <h1 className="title">Cabana Boema </h1>
          <p className="desc">O locatie superba! Cabana Boema este foarte frumoasa cu o terasa perfecta si un view
            deosebit. Linistea si peisajul de vis fac vacanta perfecta. Pentru ca relaxarea sa fie deplina,
            cei de la cazare pun la dispozitia turistilor ciubăr.</p>
        </div>

        <div className="cab_1">
          <div className="img_all">
            <div className="all">
            <div>
                <button onClick={handleButtonClick}>
                  <img src="../../../imagini/img_200.jpg" alt="" />
                  <h1 className="hover-text">Rezerva ➮</h1>
                </button>
              </div>
            <div>
                <button onClick={handleButtonClick}>
                  <img src="../../../imagini/img_300.jpg" alt="" />
                  <h1 className="hover-text">Rezerva ➮</h1>
                </button>
            </div>
            <div>
                <button onClick={handleButtonClick}>
                  <img src="../../../imagini/img_500.jpg" alt="" />
                  <h1 className="hover-text">Rezerva ➮</h1>
                </button>
            </div>
            </div>
            <div className="all_1">
              <div>
                <button onClick={handleButtonClick}>
                  <img src="../../../imagini/img_600.jpg" alt="" />
                  <h1 className="hover-text">Rezerva ➮</h1>
                </button>
              </div>
              <div>
                <button onClick={handleButtonClick}>
                  <img src="../../../imagini/img_800.jpg" alt="" />
                  <h1 className="hover-text">Rezerva ➮</h1>
                </button>
                </div>
              <div>
                <button onClick={handleButtonClick}>
                  <img src="../../../imagini/img_700.jpg" alt="" />
                  <h1 className="hover-text">Rezerva ➮</h1>
                </button>
              </div>
            </div>
          </div>
          <div className="cab_1_container">
            <div className="img_2-3">
              <div className="img_2">
                <button onClick={handleButtonClick}>
                  <img src="../../../imagini/img_100.jpg" alt="" />
                  <h1 className="hover-text">Rezerva ➮</h1>
                </button>
              </div>
            < div className="img_3">
              <button onClick={handleButtonClick}>
                <img src="../../../imagini/img_400.jpg" alt="" />
                <h1 className="hover-text">Rezerva ➮</h1>
              </button>
            </div>
          </div>
          <div className="img_1">
              <button onClick={handleButtonClick}>
                <img src="../../../imagini/img_900.jpg" alt="" />
                <h1 className="hover-text">Rezerva ➮</h1>
              </button>
            </div>
          </div>
        </div>

      </div>



      <div className="cont_mid">
        <div className="cont_title">
          <h1 className="title">Montesse Chalet </h1>
            <p className="desc">Indiferent dacă vă doriți momente de liniște sau explorări în aer liber, cabana Montesse Chalet oferă tot
              ce aveți nevoie pentru o escapadă perfectă. Este cu adevărat una dintre cele mai frumoase cabane 
              A-frame pentru 4 + 2 persoane, oferind atât intimitate, cât și conexiune cu peisajele naturale impresionante.</p>
        </div>
        <div className="cab_1">
            <div className="cab_1_container">
                <div className="img_1">
                  <button onClick={handleButtonClick}>
                    <img src="../../../imagini/ab4.jpg" alt="" />
                    <h1 className="hover-text">Rezerva ➮</h1>
                  </button>
                </div>
                <div className="img_2-3">
                  <div className="img_2">
                    <button onClick={handleButtonClick}>
                      <img src="../../../imagini/ab1.jpg" alt="" />
                      <h1 className="hover-text">Rezerva ➮</h1>
                    </button>
                  </div>
                < div className="img_3">
                  <button onClick={handleButtonClick}>
                    <img src="../../../imagini/ab1.1.jpg" alt="" />
                    <h1 className="hover-text">Rezerva ➮</h1>
                  </button>
                </div>
              </div>
              
            </div>

            <div className="img_all">
              <div className="all">
              <div>
                  <button onClick={handleButtonClick}>
                    <img src="../../../imagini/ab2.jpg" alt="" />
                    <h1 className="hover-text">Rezerva ➮</h1>
                  </button>
                </div>
              <div>
                  <button onClick={handleButtonClick}>
                    <img src="../../../imagini/ab5.jpg" alt="" />
                    <h1 className="hover-text">Rezerva ➮</h1>
                  </button>
              </div>
              <div>
                  <button onClick={handleButtonClick}>
                    <img src="../../../imagini/ab7.jpg" alt="" />
                    <h1 className="hover-text">Rezerva ➮</h1>
                  </button>
              </div>
              </div>
              <div className="all_1">
                <div>
                  <button onClick={handleButtonClick}>
                    <img src="../../../imagini/abc.jpg" alt="" />
                    <h1 className="hover-text">Rezerva ➮</h1>
                  </button>
                </div>
                <div>
                  <button onClick={handleButtonClick}>
                    <img src="../../../imagini/ab6.jpg" alt="" />
                    <h1 className="hover-text">Rezerva ➮</h1>
                  </button>
                  </div>
                <div>
                  <button onClick={handleButtonClick}>
                    <img src="../../../imagini/ab3.jpg" alt="" />
                    <h1 className="hover-text">Rezerva ➮</h1>
                  </button>
                </div>
              </div>
            </div>
          
          </div>
          <div className="cont_title_rez">
            <div className="rez">
              <h1 className="title">Conditii de rezervare si plati </h1>
              <p className="desc_rez">

              După trimiterea cererii de rezervare veți aștepta confirmarea disponibilității pe e-mail. 
              După confirmare veți primi și instrucțiunile de plată : se achita integral în termen de 48 de 
              ore de la rezervare. În caz de anulare  până la data de intrare penalizarea este de 100%.
              </p>
              <p className="desc_rez">Oferta poate fi supusă unor condiții speciale pentru perioadele de sărbători, la fiecare rezervare 
              veți primi pe e-mail și contractul aferent cu toate condițiile.</p>

              <p className="desc_rez">Rezervarea devine fermă doar după achitarea avansului prin metodele specificate în e-mail : card 
              online, card de vacanță, transfer bancar sau cash la orice sucursală Banca Transilvania.
              </p>
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