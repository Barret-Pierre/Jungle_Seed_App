import "../styles/Banner.css"
import logo from "../assets/logo.png"

function Banner() {
    const text = "Jungle Seed"
    return (
    <div className="js-banner">
        <img src={logo} alt="Logo de Jungle Seed" className="js-logo" />
        <h1 className="js-title"> {text.toUpperCase()} </h1>
    </div>
    );
}

export default Banner;