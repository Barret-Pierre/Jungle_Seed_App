import PropTypes from 'prop-types'
import "../styles/CareScale.css"
import sun from "../assets/soleil.png"
import water from "../assets/eau.png"

function printInfos(careType, scaleValue) {
    let print = " "

    switch (scaleValue) {
        case 1:
            print = "Cette plante requiert peu"
            break;
        case 2:
            print = "Cette plante requiert modérement"
            break;
        case 3:
            print = "Cette plante requiert beaucoup"
            break;
        default:
            print = "Cette plante à besoin"
            break;
    }

    if (careType === 'light') {
        return print + ' de lumière'
    } else {
        return print + ' d\'eau'
    }
}

function returnInfos(e, careType, scaleValue) {
    e.preventDefault();
    e.stopPropagation();
    alert(
        printInfos(careType, scaleValue)+
        `\nCe composant est de type ${careType}`)
}

function CareScale({ careType, scaleValue, id }) {
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? (
        <img src={sun} alt="Icone de soleil" />
    ) : (
        <img src={water} alt="Icone de eau" />
    )

    return (
        <div onClick={(e) => returnInfos(e, careType, scaleValue)}>
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