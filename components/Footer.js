import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { designTokens } from "./designTokens"
import Container from "./Container"
import { useClickAway } from "@uidotdev/usehooks"

const FooterWrapper = styled.footer`
    background-color: ${designTokens.colors.black};
    color: ${designTokens.colors.white};
    padding: 20px 0;
    position: relative;
    text-align: center;

    p {
        margin: 0;
    }

    span {
        display: inline-block;
        margin: 0 5px;
    }

    .nextjs {
        fill: #ffffff;
    }

    .info svg,
    .github svg {
        transition: opacity 0.15s ease-in-out;
        &:hover {
            cursor: pointer;
            opacity: 0.7;
        }
    }
`

const InfoDialog = styled.dialog`
    //box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    border: 2px solid #000;
    border-radius: 10px;
    color: ${designTokens.colors.black};
    padding: 40px;
    position: absolute;
    z-index: 10;
    bottom: 40px;
    width: 75vw;
    margin: auto;
    display: block;
    animation: expand 0.15s ease-in-out;
    border-radius: 8px;
    text-align: center;

    a {
        color: ${designTokens.colors.black}!important;
    }

    .close {
        position: absolute;
        top: 5px;
        right: 10px;
        transition: 0.15s ease-in-out;
        z-index: 20;
        font-size: 30px;
        &:hover {
            cursor: pointer;
            opacity: 0.7;
        }
    }
`

export default function Footer() {
    const [showInfo, setShowInfo] = useState(false)

    const ref = useClickAway(() => {
        setShowInfo(false)
    })
    return (
        <FooterWrapper>
            {showInfo && (
                <InfoDialog ref={ref}>
                    <span
                        className="close"
                        onClick={() => {
                            setShowInfo(false)
                        }}
                    >
                        &times;
                    </span>

                    <p>
                        Barbell calculator is a made by{" "}
                        <a href="https://nikibrown.com" target="_blank">
                            Niki Brown
                        </a>
                        , who is bad at math. 🤣 <br />
                    </p>

                    <p>
                        <a href="https://ko-fi.com/nikibrown" target="_blank">
                            <img
                                height="36"
                                style={{
                                    border: "0px",
                                    height: "36px",
                                    marginTop: "20px",
                                }}
                                src="https://storage.ko-fi.com/cdn/kofi2.png?v=3"
                                border="0"
                                alt="Buy Me a Coffee at ko-fi.com"
                            />
                        </a>
                    </p>
                </InfoDialog>
            )}
            <Container>
                <p>
                    <span className="info">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            onClick={() => {
                                setShowInfo(true)
                            }}
                        >
                            <path
                                fill="currentColor"
                                d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                            />
                        </svg>
                    </span>

                    <span className="github">
                        <a
                            href="https://github.com/nikibrown/next-barbell-calculator"
                            target="_blank"
                            aria-label="View the code for this app on github"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                />
                            </svg>
                        </a>
                    </span>
                </p>
            </Container>
        </FooterWrapper>
    )
}
