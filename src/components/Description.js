import "../styles/Description.css"

function Description() {
    const emoji = "🎍🌴🌲";
    return (
        <div className="js-description">
            <p className="js-description-text">Achetez les plantes de vos rêves <br/> et chouchoutez les !{emoji}</p>
            <a href="#js-shopping-section" className="js-description-button">Catalogue</a>
        </div>
    );
}

export default Description;