import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { designTokens } from "./designTokens"

const handlePlateSize = (plateSize) => {
    switch (plateSize) {
        case "small":
            return `
                height: 60px;
                width: 15px;

                @media screen and (min-width: 900px) {
                    height: 60px;
                    width: 15px;
                }
                ${WeightNumber} {
                    transform: rotate(90deg);
                }
            `
        case "large":
            return `
                height: 80px;
                @media screen and (min-width: 900px) {
                    height: 120px;
                }
            `

        default:
            return `
                height: 80px;
                @media screen and (min-width: 900px) {
                    height: 120px;
                }
            `
    }
}

const handlePlateColor = (plateColor) => {
    switch (plateColor) {
        case "red":
            return `
                background-color: ${designTokens.colors.red};
                height: 80px;
                width: 20px;
                @media screen and (min-width: 900px) {
                    height: 120px;
                    width: 55px;
                }
            `
        case "blue":
            return `
                background-color: ${designTokens.colors.blue};
                height: 80px;
                width: 20px;
                @media screen and (min-width: 900px) {
                    height: 120px;
                    width: 45px;
                }
            `
        case "yellow":
            return `
                background-color: ${designTokens.colors.yellow};
                height: 80px;
                width: 20px;
                @media screen and (min-width: 900px) {
                    height: 120px;
                width: 35px;
                }
            `
        case "green":
            return `
                background-color: ${designTokens.colors.green};
                height: 80px;
                width: 20px;
                @media screen and (min-width: 900px) {
                    height: 120px;
                    width: 25px;
                }
            `

        case "black":
            return `
                background-color: ${designTokens.colors.black};
                height: 80px;
                width: 20px;
                    @media screen and (min-width: 900px) {
                    height: 120px;
                    }                
            `
        case "black":
            return `
                background-color: ${designTokens.colors.black};
                height: 80px;
                width: 20px;
                @media screen and (min-width: 900px) {
                    height: 120px;
                } 
            `
    }
}

const BarbellPlate = styled.span`
    ${({ plateColor }) => handlePlateColor(plateColor)}
    ${({ plateSize }) => handlePlateSize(plateSize)}
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    border: 1px solid #ddd;
    font-size: 10px;
    border-radius: 5px;
`

const WeightNumber = styled.span`
    color: ${designTokens.colors.white};
`

export default function PlateOnBarbell({ weightNum, plateColor, plateSize }) {
    let noZeroWeightNum = weightNum.toString()
    noZeroWeightNum = noZeroWeightNum.replace("0.", ".")

    return (
        <BarbellPlate plateColor={plateColor} plateSize={plateSize}>
            <WeightNumber>{noZeroWeightNum}</WeightNumber>
        </BarbellPlate>
    )
}

// Storybook
PlateOnBarbell.propTypes = {
    weightNum: PropTypes.number,
    classNames: PropTypes.string,
}
