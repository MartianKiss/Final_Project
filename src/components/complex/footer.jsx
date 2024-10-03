import "../../styling/footer.css";

const footer = () =>{
    return(

        <div className="footer-dark">
            <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6-col-md-3-ite">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="#">Web design</a></li>
                                    <li><a href="#">Development</a></li>
                                    <li><a href="#">Hosting</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6-col-md-3-item">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </div>
                            
                        </div>
                        <div className="col-md-6-item-text">
                            <h3>Company Name</h3>
                            <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
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