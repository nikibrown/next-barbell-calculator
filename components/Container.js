import React, { useState } from "react"
import styled from "styled-components"

const ContainerWrapper = styled.div`
    width: 90%;
    padding-right: calc(1.5rem * 0.5);
    padding-left: calc(1.5rem * 0.5);
    margin-right: auto;
    margin-left: auto;
    position: relative;

    @media (min-width: 576px) {
        max-width: 540px;
    }
    @media (min-width: 768px) {
        max-width: 720px;
    }
    @media (min-width: 992px) {
        max-width: 960px;
    }
    @media (min-width: 1200px) {
        max-width: 1140px;
    }
    @media (min-width: 1400px) {
        max-width: 1320px;
    }
`

export default function Container({ children }) {
    return <ContainerWrapper>{children}</ContainerWrapper>
}
