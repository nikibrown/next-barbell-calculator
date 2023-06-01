import React from "react"
import styled from "styled-components"
import { designTokens } from "./designTokens"
import Container from "./Container"

const HeaderWrapper = styled.header`
    background-color: ${designTokens.colors.black};
    color: ${designTokens.colors.white};
    padding: 20px 0px;

    h1 {
        font-size: 2.5rem;
        margin: 0;
    }
`

const NavbarWrapper = styled.nav`
    color: ${designTokens.colors.white};
    // position: relative;
    // display: flex;
    // flex-wrap: wrap;
    // align-items: center;
    // justify-content: space-between;
    // flex-direction: row;
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
