import PropTypes from 'prop-types'
import CareScale from "./CareScale"
import defaultCover from "../assets/monstera.jpg"
import "../styles/PlantItem.css"

function handleClick(plantName) {
    console.log(`Vous voulez acheter 1 ${plantName} ?`)
}


function PlantItem({ name, cover, id, price, light, water, isSpecialOffer, capitalizeFirstLetter }) {
    return (
        <li className="js-plant-item" onClick={() => handleClick(name)}>
            <img src={cover} alt={`Un(e) ${name}`} className="js-plant-item-cover" />
            <h3>{capitalizeFirstLetter(name)}</h3>
            <div className='js-plant-item-scales'>
                <div>
                    <CareScale id={`${id}-light`} careType="light" scaleValue={light} />
                    <CareScale id={`${id}-light`} careType="water" scaleValue={water} />
                </div>
                <div className='js-plant-item-scales-price'>{price}€</div>
            </div>
            {isSpecialOffer && <div className="js-sales">Soldé !</div>}
        </li>
    )
}

// Typage des props permet d'éviter les erreurs de type

PlantItem.propTypes = {
    name: PropTypes.string,
    cover: PropTypes.string,
    id: PropTypes.string,
    light: PropTypes.number,
    water: PropTypes.number,
    isSpecialOffer: PropTypes.bool,
};
PlantItem.defaultProps = {
    name: 'plante',
    cover: defaultCover
}

export default PlantItem