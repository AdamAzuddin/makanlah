import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between", // Ensures space between items
            alignItems: "center", // Vertically centers the items
            padding: "10px 20px",
            background: "#fff",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/nasi_lemak.svg"
              alt="Nasi Lemak Icon"
              width={60}
              height={60}
              style={{ marginRight: "10px" }}
            />
            <h1
              style={{ color: "#FF6600", fontSize: "24px", fontWeight: "bold" }}
            >
              MakanLah!
            </h1>
          </div>

          <nav>
              <a
                  href="/menu/menu"
                  style={{
                      marginRight: "15px",
                      textDecoration: "none",
                      color: "#FF6600",
                      fontWeight: "bold",
                  }}
              >
                  Menu</a>
            <button
              style={{
                padding: "8px 15px",
                background: "#FF6600",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Sign In
            </button>

          </nav>

        </header>

        {children}
      </body>
    </html>
  );
}
