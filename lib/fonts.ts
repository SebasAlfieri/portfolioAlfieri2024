// fonts
import localFont from "next/font/local";

// SpotifyMixNarrow
// --font-spotify-mix-narrow
export const Consolas = localFont({
  src: [
    {
      path: "../public/fonts/consolas.woff2",
      weight: "100",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--consolas",
  preload: true,
});

// SpotifyMixWide
// --font-spotify-mix-wide
// export const SpotifyMixWide = localFont({
//   src: [
//     {
//       path: "../public/fonts/SpotifyMixWide-Black.woff2",
//       weight: "900",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/SpotifyMixWide-Ultra.woff2",
//       weight: "1000",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/SpotifyMixWide-Bold.woff2",
//       weight: "bold",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/SpotifyMixWide-Regular.woff2",
//       weight: "normal",
//       style: "normal",
//     },
//   ],
//   display: "swap",
//   variable: "--font-spotify-mix-wide",
//   preload: true,
// });
