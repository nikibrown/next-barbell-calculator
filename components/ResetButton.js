import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { designTokens } from "./designTokens"

const ResetButtonWrapper = styled.button`
    background-color: ${designTokens.colors.red};
    border: none;
    border-radius: 6px;
    padding: 6px 12px;
    position: absolute;
    right: 0;
    top: 0;
    transition: background-color 0.15s ease-in-out;

    &:hover {
        background-color: ${designTokens.colors.redHover};
    }
`

export default function ResetButton({ onPress }) {
    return (
        <ResetButtonWrapper
            className=""
            onClick={onPress}
            aria-label="Reset Barbell"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                    fill="currentColor"
                    d="M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z"
                />
            </svg>
        </ResetButtonWrapper>
    )
}
