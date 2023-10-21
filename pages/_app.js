import Head from 'next/head'
import {ThemeProvider} from 'next-themes'
import '../styles/globals.css'
import React from "react";
import Link from "next/link";

function MyApp({Component, pageProps}) {
    return (
        <div>
            <Head>
                <title>careyaya</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="theme-color" content="#c92da8"/>
                <link rel="preload" href="https://fonts.cdnfonts.com/s/19795/Inter-Thin-BETA.woff" as="font"
                      type="font/woff" crossOrigin/>
                <link rel="preload" href="https://fonts.cdnfonts.com/s/19795/Inter-ExtraLight-BETA.woff" as="font"
                      type="font/woff" crossOrigin/>
                <link rel="preload" href="https://fonts.cdnfonts.com/s/19795/Inter-Light-BETA.woff" as="font"
                      type="font/woff" crossOrigin/>
                <link rel="preload" href="https://fonts.cdnfonts.com/s/19795/Inter-Regular.woff" as="font"
                      type="font/woff" crossOrigin/>
                <link rel="preload" href="https://fonts.cdnfonts.com/s/19795/Inter-Medium.woff"
                      as="font" type="font/woff" crossOrigin/>
                <link rel="preload" href="https://fonts.cdnfonts.com/s/19795/Inter-SemiBold.woff"
                      as="font" type="font/woff" crossOrigin/>
                <link rel="preload" href="https://fonts.cdnfonts.com/s/19795/Inter-Bold.woff"
                      as="font" type="font/woff" crossOrigin/>
                <link rel="preload"
                      href="https://fonts.cdnfonts.com/s/19795/Inter-ExtraBold.woff"
                      as="font" type="font/woff" crossOrigin/>
                <link rel="preload"
                      href="https://fonts.cdnfonts.com/s/19795/Inter-Black.woff"
                      as="font" type="font/woff" crossOrigin/>
            </Head>
            <Navbar />
            <ThemeProvider attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
            <footer id="footer" className="mt-4 text-center text-xs font-semibold"><Link href={"https://github.com/jwu04/HackHarvard-2023"}>© HackHarvard 2023</Link></footer>
        </div>
    )
}

export default MyApp
