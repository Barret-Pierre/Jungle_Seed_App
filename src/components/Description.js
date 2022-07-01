import "../styles/Description.css"

function Description() {
    const text = "Achetez les plantes de vos rêves et chouchoutez les !";
    const emoji = "🎍🌴🌲";
    return (
    <p className="js-description">{text + emoji}</p>
    );
}

export default Description;