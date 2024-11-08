import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { designTokens } from "./designTokens"

const BarbellButtonWrapper = styled.span`
    display: "inline-block";
`

const BarbellButton = styled.button`
    color: #fff;
    background-color: #6c757d;
    display: inline-block;
    margin: 4px 8px;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    padding: 6px 12px;
    border-radius: 6px;
    border: none;

    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;

    &:hover {
        background-color: #5c636a;
    }

    &:disabled {
        background-color: #839896;
        cursor: not-allowed;
        opacity: 0.7;
        &:hovered {
            cursor: not-allowed;
        }
        &.selected {
            background-color: ${designTokens.colors.black};
        }
    }
`

export default function Barbell({
    weightNum,
    onPress,
    disableBarbell,
    reset,
    setReset,
    unit,
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
        <BarbellButtonWrapper style={{}} onClick={updateBarbell}>
            <BarbellButton
                type="button"
                className={`${barbellSelected ? "selected" : null}`}
                onClick={onPress}
                disabled={disableBarbell}
            >
                {weightNum} {unit}
            </BarbellButton>
        </BarbellButtonWrapper>
    )
}
