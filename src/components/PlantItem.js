import PropTypes from 'prop-types'
import CareScale from "./CareScale"


function PlantItem({ name, cover, id, light, water, isSpecialOffer }) {
    return (
        <li key={id} className="js-plant-item">
            <img src={cover} alt={`Un(e) ${name}`} className="js-plant-item-cover" />
            {name}
            <div>
                <CareScale careType="light" scaleValue={light} />
                <CareScale careType="water" scaleValue={water} />
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
    cover: "../assets/monstera.jpg"
}

export default PlantItem