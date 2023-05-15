import React from "react"
import PropTypes from "prop-types"

export default function PlateOnBarbell({ weightNum }) {
    return (
        <span className={`barbell-plate barbell-plate-${weightNum}`}>
            <span className="weight-number">{weightNum}</span>
        </span>
    )
}

// Storybook
PlateOnBarbell.propTypes = {
    weightNum: PropTypes.number,
    classNames: PropTypes.string,
}
