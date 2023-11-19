import React from "react"
import styled from "styled-components"
import { designTokens } from "./designTokens"

const ResetButtonWrapper = styled.button`
    background-color: ${designTokens.colors.red};
    border: none;
    border-radius: 6px;
    padding: 6px 16px;
    position: absolute;
    right: 10px;
    top: 0;
    color: ${designTokens.colors.white};
    transition: all 0.15s ease-in-out;

    @media screen and (min-width: 900px) {
        padding: 10px 12px 6px 12px;
    }

    svg {
        transition: 0.3s ease-in-out;
        rotate: 0deg;
    }

    &:hover {
        background-color: ${designTokens.colors.redHover};
        transform:scale(1.1, 1.1);
        -webkit-transform:scale(1.1, 1.1);
        -moz-transform:scale(1.1, 1.1);
    }
`

export default function ResetButton({ resetEverything }) {
    return (
        <ResetButtonWrapper
            className=""
            onClick={resetEverything}
            aria-label="Reset Barbell"
        >
            Reset barbell
        </ResetButtonWrapper>
    )
}
