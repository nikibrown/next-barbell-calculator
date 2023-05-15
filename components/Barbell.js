import React, { useState, useEffect } from "react"
export default function Barbell({
    weightNum,
    onPress,
    disableBarbell,
    reset,
    setReset,
}) {
    const [barbellSelected, setBarbellSelection] = useState(false)

    const updateBarbell = () => {
        if (!disableBarbell) {
            setBarbellSelection(true)
        }
    }

    useEffect(() => {
        if (reset) {
            setBarbellSelection(false)
            setReset(false)
        }
    }, [reset])

    return (
        <span style={{ display: "inline-block" }} onClick={updateBarbell}>
            <button
                type="button"
                className={`btn btn-secondary ${
                    barbellSelected ? "checked" : ""
                }`}
                onClick={onPress}
                disabled={disableBarbell}
            >
                {weightNum} Barbell
            </button>
        </span>
    )
}
