import React from "react"
import styled from "styled-components"
import { designTokens } from "./designTokens"
import Container from "./Container"
import ResetButton from "./ResetButton"
import UndoButton from "./UndoButton"

const HeaderWrapper = styled.header`
    background-color: ${designTokens.colors.black};
    color: ${designTokens.colors.white};
    padding: 10px 0px;

    h1 {
        font-size: 1.5rem;
        margin: 0;

        @media screen and (min-width: 900px) {
            font-size: 2rem;
        }
    }
`
const NavbarWrapper = styled.nav`
    color: ${designTokens.colors.white};
    display: flex;
    text-align: center;
`

export default function Header({ resetEverything, undoPlate }) {
    return (
        <HeaderWrapper>
            <Container>
                <NavbarWrapper>
                    <h1>Barbell Calculator</h1>

                    <ResetButton
                        resetEverything={() => resetEverything()}
                        aria-label="Reset Barbell"
                    />
                    <UndoButton
                        undoClick={() => undoPlate()}
                        aria-label="Undo plate button"
                    />
                </NavbarWrapper>
            </Container>
        </HeaderWrapper>
    )
}
