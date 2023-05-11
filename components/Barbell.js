import React, { useState, useEffect } from "react"
export default function Barbell({
    weightNum,
    onPress,
    disableBarbell,
    reset,
    setReset,
}) {
    const [checked, setChecked] = useState(false)

    const updateChecked = () => {
        if (!disableBarbell) {
            setChecked(true)
        }
    }

    useEffect(() => {
        if (reset) {
            setChecked(false)
            setReset(false)
        }
    }, [reset])

    return (
        <span style={{ display: "inline-block" }} onClick={updateChecked}>
            <button
                type="button"
                className="btn btn-secondary"
                onClick={onPress}
                disabled={disableBarbell}
            >
                {checked ? "✔" : ""} {weightNum} Barbell
            </button>
        </span>
    )
}
