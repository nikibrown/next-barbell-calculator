import React, { useState } from "react"
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

    a {
        color: white;
    }

    p {
        margin: 0;
    }

    svg {
        transition: opacity 0.15s ease-in-out;
        &:hover {
            cursor: pointer;
            opacity: 0.7;
        }
    }
`

const InfoModal = styled.div`
    background-color: #fff;
    border: 2px solid #000;
    border-radius: 10px;
    color: ${designTokens.colors.black};
    padding: 20px;
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    transition: 0.25s ease-in-out;

    a {
        color: ${designTokens.colors.black};
    }

    &.showInfo {
        top: 20px;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 10px;
        transition: 0.15s ease-in-out;
        &:hover {
            cursor: pointer;
            opacity: 0.7;
        }
    }
`

const NavbarWrapper = styled.nav`
    color: ${designTokens.colors.white};
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`

export default function Header() {
    const [showInfo, setShowInfo] = useState(false)

    const handleShowInfoToggle = () => {
        setShowInfo(!showInfo)
    }

    return (
        <HeaderWrapper>
            <InfoModal className={`info ${showInfo == true ? "showInfo" : ""}`}>
                <span className="close" onClick={handleShowInfoToggle}>
                    &times;
                </span>

                <p>
                    Barbell calculator is a made by{" "}
                    <a href="https://nikibrown.com" target="_blank">
                        Niki Brown
                    </a>{" "}
                    who is bad at math. 🤣 <br />
                </p>
            </InfoModal>

            <Container>
                <NavbarWrapper>
                    <h1>Barbell Calculator</h1>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        onClick={handleShowInfoToggle}
                    >
                        <path
                            fill="currentColor"
                            d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                        />
                    </svg>
                </NavbarWrapper>
            </Container>
        </HeaderWrapper>
    )
}
