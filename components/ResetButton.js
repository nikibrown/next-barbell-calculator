import React from "react"
import styled from "styled-components"
import { designTokens } from "./designTokens"

const ResetButtonWrapper = styled.button`
    background-color: ${designTokens.colors.red};
    border: none;
    border-radius: 6px;
    padding: 6px 12px;
    transition: all 0.15s ease-in-out;
    color: ${designTokens.colors.white};

    &:hover {
        background-color: ${designTokens.colors.redHover};
    }
`

export default function ResetButton({ resetEverything }) {
    return (
        <ResetButtonWrapper
            onClick={resetEverything}
            aria-label="Reset Barbell"
        >
            Reset
        </ResetButtonWrapper>
    )
}
