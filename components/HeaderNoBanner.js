import React from "react"
import styled from "styled-components"
import { designTokens } from "./designTokens"
import Container from "./Container"
import ResetButton from "./ResetButton"
import Link from "next/link"

const HeaderWrapper = styled.header`
    background-color: ${designTokens.colors.black};
    color: ${designTokens.colors.white};
    padding: 15px 0px;

    h1 {
        font-size: 1.2rem;
        margin: 0;

        @media screen and (min-width: 900px) {
            font-size: 2rem;
        }
    }

    a {
        text-decoration: none;
        color: ${designTokens.colors.white};
    }
`
const NavbarWrapper = styled.nav`
    color: ${designTokens.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default function Header({ resetEverything }) {
    return (
        <>
            <HeaderWrapper>
                <Container>
                    <NavbarWrapper>
                        <h1>
                            <Link href="/">&larr;</Link> Barbell Calculator
                        </h1>

                        <ResetButton
                            resetEverything={() => resetEverything()}
                            aria-label="Reset Barbell"
                        />
                    </NavbarWrapper>
                </Container>
            </HeaderWrapper>
        </>
    )
}
