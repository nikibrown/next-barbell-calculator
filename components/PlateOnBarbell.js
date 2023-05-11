import React, { useState, useEffect } from "react"

export default function PlateOnBarbell({
    weightNum,
    onPress,
    disableBarbell,
    reset,
    setReset,
}) {
    let className

    // switch statement to assign a classname based on the weightNum in the array?

    return (
        <span className={`barbell-plate barbell-plate-${weightNum}`}>
            <span className="weight-number">{weightNum}</span>
        </span>
    )
}
