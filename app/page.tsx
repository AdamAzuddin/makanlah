'use client';
import SearchPlaces from "@/components/SearchPlaces";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleButtonClick = (route: string) => {
    router.push(`/${route}`);
  };

  // Menu Items Data
  const menuItems = [
    { name: "Cheese Burger", price: "RM 10.00", imgPath: "/cheese_burger.png" },
    { name: "Pancakes", price: "RM 15.00", imgPath: "/pancake.png" },
    { name: "Waffles", price: "RM 12.00", imgPath: "/waffle.png" },
    { name: "Croissant", price: "RM 8.00", imgPath: "/croissant.png" },
  ];

  // Restaurants Data
  const ecoRestaurants = [
    { name: "The Green Table", description: "Eco-friendly choices", imgPath: "/restaurant_1.png" },
    { name: "Sustain Kitchen", description: "Sustainable dining experience", imgPath: "/restaurant_2.png" },
    { name: "Verdant Bites", description: "Green menu options", imgPath: "/restaurant_3.png" },
  ];
  

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "0 auto" }}>
      {/* Hero Section */}
      <section style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", background: "#FFD54F", padding: "20px", borderRadius: "8px", margin: "20px 0" }}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <h2 style={{ fontSize: "54px", fontWeight: "bold", margin: "0 0 10px 0" }}>
            Tapao <br /> and <br /> MakanLah!
          </h2>
          <Image src="/burger.png" alt="Burger Icon" width={400} height={400} style={{ marginRight: "10px", objectFit: "cover" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontWeight: "bold", fontSize: "18px" }}>Wallet Balance:</span>
              <div style={{ display: "flex", gap: "10px" }} onClick={() => handleButtonClick("wallet")}>
                <span>RM 100.00</span>
                <Image src="/reload-wallet.svg" alt="Reload wallet Icon" width={20} height={20} style={{ marginRight: "10px" }} />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image src="/location.svg" alt="Location Icon" width={20} height={20} style={{ marginRight: "10px" }} />
            <SearchPlaces />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ fontWeight: "bold" }}>EcoPoint:</p>
            <span style={{ color: "#FF6600" }}>40 Point</span>
            <button style={{ padding: "8px 15px", background: "#FF6600", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={() => handleButtonClick("redeem")}>
              Redeem Now
            </button>
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section>
        <h3 style={{ fontSize: "24px", fontWeight: "bold", margin: "20px 0" }}>Popular Items</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
          {menuItems.map((item, index) => (
            <div key={index} style={{ border: "1px solid #ccc", borderRadius: "8px", overflow: "hidden", textAlign: "center" }}>
              <img src={item.imgPath} alt={item.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <div style={{ padding: "10px" }}>
                <h4 style={{ fontSize: "16px", margin: "10px 0" }}>{item.name}</h4>
                <p style={{ fontSize: "14px", color: "#555" }}>{item.price}</p>
                <button style={{ padding: "8px 15px", background: "#FF6600", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Eco Restaurants */}
      <section>
        <h3 style={{ fontSize: "24px", fontWeight: "bold", margin: "20px 0" }}>Eco Restaurants</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {ecoRestaurants.map((restaurant, index) => (
            <div key={index} style={{ border: "1px solid #ccc", borderRadius: "8px", overflow: "hidden", textAlign: "center" }}>
              <img src={restaurant.imgPath} alt={restaurant.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <div style={{ padding: "10px" }}>
                <h4 style={{ fontSize: "16px", margin: "10px 0" }}>{restaurant.name}</h4>
                <p style={{ fontSize: "14px", color: "#555" }}>{restaurant.description}</p>
                <button style={{ padding: "8px 15px", background: "#FF6600", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                  Open Menu
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "20px", marginTop: "20px", background: "#f8f8f8", borderTop: "1px solid #ddd" }}>
        <p style={{ fontSize: "14px", color: "#555" }}>© 2024 MakanLah! All rights reserved.</p>
      </footer>
    </div>
  );
}
