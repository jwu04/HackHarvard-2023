import Head from 'next/head'
import {ThemeProvider} from 'next-themes'
import '../styles/globals.css'
import React from "react";

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
            <ThemeProvider attribute="class">
                <Component {...pageProps} />
                  <div>
                        <div class="flex justify-center bigText">
                              <h1>Close your eyes and think of a deep fond memory…</h1>
                        </div>
                        <div class="flex justify-center">
                              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    Try Now
                              </button>
                        </div>
                  </div>

                        {/* <div class="h-56 grid grid-cols-3 gap-4 content-normal ...">
                              <div>01</div>
                              <div>02</div>
                              <div>03</div>
                              <div>04</div>
                              <div>05</div>
                        </div> */}
                        {/* <div class="bigText">
                              <h1>Close your eyes and think of a deep fond memory…</h1>
                              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Try Now
                              </button>
                        </div> */}
                {/* <footer id="footer" className="inter text-center text-xs font-semibold">Made for HackHarvard</footer> */}
            </ThemeProvider>
        </div>
    )
}

export default MyApp
