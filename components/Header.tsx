"use client";
import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import { useRouter } from "next/navigation";
import Image from "next/image";
const Header = () => {
  const router = useRouter();
  return (
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
        <div style={{ marginRight: "30px" }}>
          <HamburgerMenu />
        </div>
        <Image
          src="/nasi_lemak.svg"
          alt="Nasi Lemak Icon"
          width={60}
          height={60}
          style={{ marginRight: "10px" }}
          onClick={() => router.push("/")}
        />
        <h1 style={{ color: "#FF6600", fontSize: "24px", fontWeight: "bold" }}>
          MakanLah!
        </h1>
      </div>

      <nav>
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
  );
};

export default Header;
