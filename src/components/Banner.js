import "../styles/Banner.css"
import logo from "../assets/logo.png"
import Recommendation from "../components/Recommendation"

function Banner() {
    const text = "Jungle Seed"
    

    return (
        <div className="js-banner">
            <Recommendation />
            <div className="js-banner-row">
                <img src={logo} alt="Logo de Jungle Seed" className="js-logo" />
                <h1 className="js-title"> {text.toUpperCase()} </h1>
            </div>
        </div>
    );
}

export default Banner;