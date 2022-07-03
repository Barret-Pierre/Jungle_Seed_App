import PropTypes from 'prop-types'
import "../styles/CareScale.css"
import sun from "../assets/soleil.png"
import water from "../assets/eau.png"

function CareScale({ careType, scaleValue, id }) {
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? (
        <img src={sun} alt="Icone de soleil" />
    ) : (
        <img src={water} alt="Icone de eau" />
    )

    return (
        <div>
            {range.map((rangeElement, index) =>
                scaleValue >= rangeElement && <span key={`${id}-${index}`} className='js-item-carscale'>{scaleType}</span>
            )}
        </div>
    )
}

// Typage des props permet d'éviter les erreurs de type

CareScale.propTypes = {
    careType: PropTypes.string,
    scaleValue: PropTypes.number,
}
CareScale.defaultProps = {
    careType: 'light',
    scaleValue: 0,
}

export default CareScale