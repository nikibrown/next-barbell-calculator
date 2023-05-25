import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { designTokens } from "./designTokens"

const handlePlatetype = (plateType) => {
    switch (plateType) {
        case "plate55":
            return `
                background-color: ${designTokens.colors.red};
                height: 80px;
                width: 20px;
                @media screen and (min-width: 900px) {
                    height: 120px;
                    width: 55px;
                }
            `
        case "plate45":
            return `
                background-color: ${designTokens.colors.blue};
                height: 80px;
                width: 20px;
                @media screen and (min-width: 900px) {
                    height: 120px;
                    width: 45px;
                }
            `
        case "plate35":
            return `
                background-color: ${designTokens.colors.yellow};
                height: 80px;
                width: 20px;
                @media screen and (min-width: 900px) {
                    height: 120px;
                width: 35px;
                }
            `
        case "plate25":
            return `
                background-color: ${designTokens.colors.green};
                height: 80px;
                width: 20px;
                @media screen and (min-width: 900px) {
                    height: 120px;
                    width: 25px;
                }
            `

        case "plate15":
            return `
                background-color: ${designTokens.colors.black};
                height: 80px;
                width: 20px;
                    @media screen and (min-width: 900px) {
                    height: 120px;
                    }                
            `
        case "plate10":
            return `
                background-color: ${designTokens.colors.black};
                height: 80px;
                width: 20px;
                @media screen and (min-width: 900px) {
                    height: 120px;
                    } 
            `
        case "plate5":
            return `
                background-color: ${designTokens.colors.black};
                height: 60px;
                width: 15px;
                @media screen and (min-width: 900px) {
                    height: 60px;
                    width: 15px;
                }
            `

        case "plate1":
            return `
                background-color: ${designTokens.colors.black};
                height: 60px;
                width: 15px;
                @media screen and (min-width: 900px) {
                    height: 60px;
                    width: 15px;
                }
            `
        case "plate0.75":
            return `
                background-color: ${designTokens.colors.black};
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

        case "plate0.5":
            return `
                background-color: ${designTokens.colors.black};
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
        case "plate0.25":
            return `
                background-color: ${designTokens.colors.black};
                height: 60px;
                width: 15px;
                ${WeightNumber} {
                    transform: rotate(90deg);
                }
            `

        default:
            return `
                background-color: ${designTokens.colors.black};
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
    }
}

const BarbellPlate = styled.span`
    ${({ plateType }) => handlePlatetype(plateType)}
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

export default function PlateOnBarbell({ weightNum, plateType }) {
    let noZeroWeightNum = weightNum.toString()
    noZeroWeightNum = noZeroWeightNum.replace("0.", ".")

    return (
        <BarbellPlate plateType={plateType}>
            <WeightNumber>{noZeroWeightNum}</WeightNumber>
        </BarbellPlate>
    )
}

// Storybook
PlateOnBarbell.propTypes = {
    weightNum: PropTypes.number,
    classNames: PropTypes.string,
}
