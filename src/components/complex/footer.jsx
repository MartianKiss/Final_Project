import "../../styling/footer.css";

const footer = () =>{
    return(

        <div className="footer-dark">
            <footer>
                    <div className="container_footer">
                        <div className="row">
                            <div className="col-sm-6-col-md-3-ite">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="/galerie">Rezervare</a></li>
                                    <li><a href="/obiective-turistice">What to do?</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6-col-md-3-item">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="/despre">Despre noi</a></li>
                                    <li><a href="/contact">Ne gasesti</a></li>
                                </ul>
                            </div>
                            
                        </div>
                        <div className="col-md-6-item-text">
                            
                        </div>
                            <div className="col item social">
                                <a href="https://www.facebook.com" target="_blank"><img src="../../../imagini/facebook.png" alt="" className="facebook"/></a>
                                <a href="https://x.com/?lang=ro" target="_blank"><img src="../../../imagini/twitter.png" alt="" className=" twitter"/></a>
                                <a href="https://www.instagram.com" target="_blank"><img src="../../../imagini/instagram.png" alt="" className="instagram"/></a>
                                <a href="https://www.linkedin.com/feed/" target="_blank"><img src="../../../imagini/linkedin.png" alt="" className="linkedin"/></a>
                            </div>
                        </div>
            </footer>
        </div>
    );
};

export default footer;