// app/page.tsx (or MenuPage)

"use client";

import { useOrder } from "../context/order";
import Image from "next/image";

// Menu items array

const menuItems = [
  {
    id: 1,
    name: "Nasi Lemak",
    description: "Mak kau hijau",
    price: 8.0,
    image: "/nasi-lemak.png",
    quantity: 1,
  },
  {
    id: 2,
    name: "Roti Canai",
    description: "Made with love and sweat of mapleh.",
    price: 5.0,
    image: "/roti_canai.png",
    quantity: 1,
  },
  {
    id: 3,
    name: "Mee Goreng Mamak",
    description: "Spicy fried noodles with tofu, potatoes, and veggies.",
    price: 7.0,
    image: "/mee_goreng_mamak.png",
    quantity: 1,
  },
  {
    id: 4,
    name: "Teh Tarik",
    description: "Minum lu boss.",
    price: 3.0,
    image: "/teh_tarik.png",
    quantity: 1,
  },
  {
    id: 5,
    name: "Nasi Lemak",
    description: "Mak kau hijau",
    price: 8.0,
    image: "/nasi-lemak.png",
    quantity: 1,
  },
  {
    id: 6,
    name: "Roti Canai",
    description: "Made with love and sweat of mapleh.",
    price: 5.0,
    image: "/roti_canai.png",
    quantity: 1,
  },
  {
    id: 7,
    name: "Mee Goreng Mamak",
    description: "Spicy fried noodles with tofu, potatoes, and veggies.",
    price: 7.0,
    image: "/mee_goreng_mamak.png",
    quantity: 1,
  },
  {
    id: 8,
    name: "Teh Tarik",
    description: "Minum lu boss.",
    price: 3.0,
    image: "/teh_tarik.png",
    quantity: 1,
  },
];

export default function MenuPage() {
  const { order, setOrder } = useOrder();

  const handleIncrease = (item: any) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        // Increase quantity if the item exists
        return prevOrder.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Add item if it's not in the cart yet
        return [...prevOrder, { ...item, quantity: 1 }];
      }
    });
  };

  const handleDecrease = (item: any) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem?.quantity! > 1) {
        // Decrease quantity if greater than 1
        return prevOrder.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      } else {
        // Remove item from cart if quantity is 1
        return prevOrder.filter((cartItem) => cartItem.id !== item.id);
      }
    });
  };

  const getQuantity = (id: any) => {
    const item = order.find((cartItem) => cartItem.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <main
      style={{
        padding: "20px",
        fontFamily: "Arial",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          color: "#FF6600",
          fontSize: "28px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Restaurant Alif
      </h2>
      <h2
        style={{
          color: "#FF6600",
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Our Menu
      </h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {menuItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              background: "#fff",
              width: "30%",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={150}
              height={150}
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <h3
                style={{ color: "#333", fontSize: "20px", marginBottom: "8px" }}
              >
                {item.name}
              </h3>
              <p
                style={{
                  color: "#666",
                  fontSize: "14px",
                  marginBottom: "10px",
                }}
              >
                {item.description}
              </p>
              <p
                style={{
                  color: "#FF6600",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                RM {item.price}.00
              </p>
              <button
                style={{
                  padding: "10px 15px",
                  backgroundColor: "#FF6600",
                  color: "#fff",
                  borderRadius: "100%",
                  cursor: "pointer",
                  marginTop: "10px",
                  fontWeight: "bold",
                }}
                onClick={() => handleDecrease(item)}
              >
                -
              </button>
              <span style={{ padding: "10px" }}>{getQuantity(item.id)}</span>
              <button
                style={{
                  padding: "10px 15px",
                  backgroundColor: "#FF6600",
                  color: "#fff",
                  borderRadius: "100%",
                  cursor: "pointer",
                  marginTop: "10px",
                  fontWeight: "bold",
                }}
                onClick={() => handleIncrease(item)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
