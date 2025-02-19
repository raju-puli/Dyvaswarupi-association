import "./hero.css";
import useScrollLogo from "../../utility/scrollEvents";

const Hero = () => {
    const showLogo = useScrollLogo();

    return (
        <>
            <section id="hero" className="hero section dark-background">

                <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />

                <div className="container text-center" data-aos="fade-up" data-aos-delay="100">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <img src="assets/logo.png" className="img-fluid" alt="" />
                            <h2>Welcome to Our Website</h2>
                            <p>We are team of talented designers making websites with Bootstrap</p>
                            <a href="#about" className="btn-get-started">Get Started</a>
                        </div>
                    </div>
                </div>
                {!showLogo &&
                    <div className="arrow-container">
                        <div className="chevron"></div>
                        <div className="chevron"></div>
                        <div className="chevron"></div>
                        <a href="#about" className="text">Scroll down</a>
                    </div>
                }
            </section>
        </>
    )
}
export default Hero;