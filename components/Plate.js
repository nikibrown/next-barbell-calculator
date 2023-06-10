import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { designTokens } from "./designTokens"

const PlateWrapper = styled.span`
    display: inline-block;
    margin: 0.2rem;
    position: relative;

    @media screen and (min-width: 900px) {
        margin: 0.25rem 0.5rem;
    }
`

const handlePlateSize = (plateSize) => {
    switch (plateSize) {
        case "small":
            return `
                    @media screen and (min-width: 900px) {
                        min-height: 60px;
                        min-width: 60px;
                    }
                `
        default:
            return `
                    @media screen and (min-width: 900px) {
                        min-height: 90px;
                        min-width: 90px;
                    }`
    }
}

const handlePlateColor = (plateColor) => {
    switch (plateColor) {
        case "red":
            return designTokens.colors.red
        case "blue":
            return designTokens.colors.blue
        case "yellow":
            return designTokens.colors.yellow
        case "green":
            return designTokens.colors.green
        case "white":
            return designTokens.colors.white
        default:
            return designTokens.colors.black
    }
}

const handlePlateColorHover = (plateColor) => {
    switch (plateColor) {
        case "red":
            return designTokens.colors.redHover
        case "blue":
            return designTokens.colors.blueHover
        case "yellow":
            return designTokens.colors.yellowHover
        case "green":
            return designTokens.colors.greenHover
        case "white":
            return designTokens.colors.whiteHover
        default:
            return designTokens.colors.blackHover
    }
}

const PlateBtn = styled.button`
    ${({ plateSize }) => handlePlateSize(plateSize)}
    background-color: ${({ plateColor }) => handlePlateColor(plateColor)};
    border: none;
    border-radius: 50%;
    display: inline-block;
    font-size: 12px;
    line-height: 0;
    min-height: 45px;
    min-width: 45px;
    transition: background-color 0.15s ease-in-out;

    &:hover {
        background-color: ${({ plateColor }) =>
            handlePlateColorHover(plateColor)};
    }
`

const PlateNum = styled.span`
    color: #fff;
`

const PlateCountBadge = styled.span`
    background: #fff;
    border: 1px solid #000;
    border-radius: 50%;
    color: #000;
    display: inline-block;
    font-size: 10px;
    height: 20px;
    line-height: 2;
    position: absolute;
    top: -5px;
    text-align: center;
    right: -5px;

    vertical-align: baseline;
    white-space: nowrap;
    width: 20px;

    @media screen and (min-width: 900px) {
        top: 5px;
        right: 0;
    }
`

export default function LargePlate({
    onPress,
    plateColor,
    reset,
    setReset,
    weightNum,
    plateSize,
    unit,
}) {
    const [plateCount, setPlateCount] = useState(0)

    const handleUpdatePlatecount = () => {
        setPlateCount(plateCount + 2)
    }

    let noZeroWeightNum = weightNum.toString()
    noZeroWeightNum = noZeroWeightNum.replace("0.", ".")

    useEffect(() => {
        if (reset) {
            setPlateCount(0)
            setReset(false)
        }
    }, [reset])

    return (
        <PlateWrapper onClick={handleUpdatePlatecount}>
            <PlateBtn
                plateSize={plateSize}
                plateColor={plateColor}
                onClick={onPress}
            >
                <PlateNum>
                    {noZeroWeightNum} {unit}
                </PlateNum>

                {plateCount > 0 ? (
                    <PlateCountBadge className="plate-count-badge">
                        {plateCount}
                    </PlateCountBadge>
                ) : null}
            </PlateBtn>
        </PlateWrapper>
    )
}

// Storybook
LargePlate.propTypes = {
    weightNum: PropTypes.number,
    onClick: PropTypes.func,
}
