import { Consolas } from "@/lib/fonts";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sebastian Alfieri Web Developer",
  description: "Hello this is my portfolio. Have a seat.",
  authors: [
    { name: "Sebastian Alfieri", url: "https://sebastianalfieri.vercel.app/" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon.ico",
    },
  },
  openGraph: {
    type: "website",
    url: "https://subelealamexcla.byspotify.com",
    images: [
      {
        url: "/images/opengraph.jpg",
        width: 600,
        height: 600,
        alt: "me",
      },
      {
        url: "/images/opengraph.jpg",
        width: 1080,
        height: 1080,
        alt: "me",
      },
    ],
  },
};

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    themeColor: "#FFFFFF",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Consolas.variable}`}>{children}</body>
    </html>
  );
}
