import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

export default function Plate({
    weightNum,
    onPress,
    classNames,
    reset,
    setReset,
}) {
    const [plateCount, setPlateCount] = useState(0)

    let noZeroWeightNum = weightNum.toString()
    noZeroWeightNum = noZeroWeightNum.replace("0.", ".")

    const handleUpdatePlatecount = () => {
        setPlateCount(plateCount + 2)
    }

    useEffect(() => {
        if (reset) {
            setPlateCount(0)
            setReset(false)
        }
    }, [reset])

    return (
        <span
            style={{ display: "inline-block" }}
            onClick={handleUpdatePlatecount}
        >
            <button type="button" className={classNames} onClick={onPress}>
                {noZeroWeightNum}

                {plateCount > 0 ? (
                    <span className="plate-count-badge text-dark position-absolute translate-middle badge rounded-pill bg-light border border-dark">
                        {plateCount}
                    </span>
                ) : null}
            </button>
        </span>
    )
}

// Storybook
Plate.propTypes = {
    weightNum: PropTypes.number,
    onClick: PropTypes.func,
    classNames: PropTypes.string,
}
