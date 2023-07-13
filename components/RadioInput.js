import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { designTokens } from "./designTokens"

const RadioInputLabel = styled.label`
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

    &.isSelected {
        background-color: red;
    }
`

export default function RadioInput({ onPress, value, id, isChecked }) {
    // const [barbellSelected, setBarbellSelection] = useState(false)

    // const updateBarbell = () => {
    //     if (!disableBarbell) {
    //         setBarbellSelection(true)
    //     }
    // }

    // useEffect(() => {
    //     if (reset) {
    //         setBarbellSelection(false)
    //         setReset(false)
    //     }
    // }, [reset])

    return (
        <RadioInputLabel>
            <input
                type="radio"
                value={value}
                id={id}
                name="unit"
                onClick={onPress}
                defaultChecked={isChecked ? true : false}
            />
            {value}
        </RadioInputLabel>
    )
}
