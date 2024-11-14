import React, { useState } from "react"
import styled from "styled-components"

const ContainerWrapper = styled.div`
    width: 90vw;
    padding-right: calc(1.5rem * 0.5);
    padding-left: calc(1.5rem * 0.5);
    margin-right: auto;
    margin-left: auto;
    position: relative;

    @media (min-width: 576px) {
        max-width: 400px;
    }

    @media (min-width: 992px) {
        max-width: 700px;
    }
`

export default function Container({ children }) {
    return <ContainerWrapper>{children}</ContainerWrapper>
}
