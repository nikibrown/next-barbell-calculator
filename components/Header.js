import React from "react"
import styled from "styled-components"
import { designTokens } from "./designTokens"
import Container from "./Container"

const HeaderWrapper = styled.header`
    background-color: ${designTokens.colors.black};
    color: ${designTokens.colors.white};
    padding: 10px 0px;

    h1 {
        font-size: 2rem;
        margin: 0;
    }
`

const NavbarWrapper = styled.nav`
    color: ${designTokens.colors.white};
    text-align: center;
`

export default function Header() {
    return (
        <HeaderWrapper>
            <Container>
                <NavbarWrapper>
                    <h1>Barbell Calculator</h1>
                </NavbarWrapper>
            </Container>
        </HeaderWrapper>
    )
}
