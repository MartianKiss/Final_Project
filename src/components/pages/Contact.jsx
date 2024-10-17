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
                            <a href="https://mail.google.com/mail" target="_blank"><img src="../../../imagini/email.jpg" alt="" className="facebook"/></a>

                        </div>
                        <div className="adresa">
                            <h3>Matisesti 448, Com. Horea, Jud. Alba</h3>
                            <a href="https://www.google.com/maps/place/Mătișești,+Romania/@46.507903,22.906247,10z/data=!4m6!3m5!1s0x4748d719b4b808ad:0xb370d1b1f63c72d3!8m2!3d46.5069962!4d22.9061388!16s%2Fg%2F122tjcln?hl=en&entry=ttu&g_ep=EgoyMDI0MTAwNy4xIKXMDSoASAFQAw%3D%3D" target="_blank"><img src="../../../imagini/location.jpg" alt=""/></a>

                        </div>
                    </div>
                    <h1>Ne poti contacta direct pe
                    retelele sociale:</h1>
                    <div className="social_media_links">
                    <a href="https://www.facebook.com" target="_blank"><img src="../../../imagini/facebook.png" alt="" className="facebook"/></a>
                    <a href="https://www.instagram.com" target="_blank"><img src="../../../imagini/instagram.png" alt="" className="instagram"/></a>

                    </div>
                </div>
                
            </div>
        </>
    );
};
