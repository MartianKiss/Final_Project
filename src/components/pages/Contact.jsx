import "../../styling/Contact.css"


export const Contact = () => {
    return (
        <>
            <div className="container_contact">
                <div className="maps" style={{ width: "100%", height: "400px" }}>
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d351802.3033683485!2d22.780642!3d46.45948500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4748d719b4b808ad%3A0xb370d1b1f63c72d3!2zTcSDdGnImWXImXRpLCBSb21hbmlh!5e0!3m2!1sen!2sus!4v1728489322370!5m2!1sen!2sus"
                        width="400"
                        height= "600"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="continut">
                    <h1 className="h1_title">Contacteaza-ne</h1>
                    <p className="text_contact">Va rugam sa ne contactati direct pe retelele sociale
                         sau la telefon pentru a fi siguri ca va vom oferi raspunsul pe care il 
                         cautati in cel mai scurt timp.
                    </p>
                    <div className="mail_adresa">
                        <div className="mail">
                            <h3>andrei.martianu@gmail.com</h3>
                            <img src="../../../imagini/email.jpg" alt="" />
                        </div>
                        <div className="adresa">
                            <h3>Matisesti 448, Com. Horea, Jud. Alba</h3>
                            <img src="../../../imagini/location.jpg" alt="" />
                        </div>
                    </div>
                    <h1>Ne poti contacta direct pe
                    retelele sociale:</h1>
                    <div className="social_media_links">
                        <img src="../../../imagini/facebook.png" alt="" />
                        <img src="../../../imagini/instagram.png" alt="" />
                    </div>
                </div>
                
            </div>
        </>
    );
};
