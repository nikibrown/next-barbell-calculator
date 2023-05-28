import React from "react"
import Head from "next/head"
import "bootstrap/dist/css/bootstrap.css"
import "../styles.scss"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>🏋️💪 Barbell Calculator</title>
                <meta name="keywords" content="Barbell Calculator" />
                <meta
                    name="description"
                    content="A little calculator that helps you add up the weight on your barbell"
                />
                <meta name="language" content="en-us" />
                <meta name="robots" content="index,follow" />
                <meta name="rating" content="general" />
                <meta name="distribution" content="global" />
                <meta
                    name="URL"
                    content="https://react-barbell-calculator.vercel.app/"
                />
                <meta name="revisit-after" content="3 days" />
                <meta
                    name="copyright"
                    content="Copyright 1999 - ∞ Niki Brown"
                />
                <meta name="author" content="Niki Brown" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
