import PropTypes from 'prop-types'

function CareScale({careType, scaleValue}) {
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? '🌞' : '💧'

    return (
        <div>
            {range.map((rangeElement) => 
                scaleValue >= rangeElement && <span>{scaleType}</span>
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