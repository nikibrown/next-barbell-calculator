import React from "react"
import Head from "next/head"
import "../styles.scss"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>🏋️💪 Barbell Calculator</title>
                <meta name="keywords" content="Barbell Calculator" />
                <meta
                    name="description"
                    content="A free calculator that helps you add up the weight on your barbell"
                />
                <meta name="language" content="en-us" />
                <meta name="robots" content="index,follow" />
                <meta name="rating" content="general" />
                <meta name="distribution" content="global" />
                <meta name="URL" content="https://barbellcalculator.com" />
                <meta name="revisit-after" content="3 days" />
                <meta
                    name="copyright"
                    content="Copyright 1999 - ∞ Niki Brown"
                />
                <meta name="author" content="Niki Brown" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
