import Image from "next/image";

export default function MenuPage() {
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
                Our Menu
            </h2>

            <div
                style={{

                    flexDirection: "column",
                    display: "flex", // Flex container to align items horizontally
                     // Vertically center content,
                    gap: "20px",
                }}
            >
                {menuItems.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            display: "flex",
                            background: "#fff",
                            borderRadius: "8px",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            overflow: "hidden",
                            transition: "transform 0.2s",
                        }}
                    >
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={150}
                            height={150}
                            style={{ width: "150px", height: "150px", objectFit: "cover",}}
                        />
                        <div style={{ padding: "15px" }}>
                            <h3 style={{ color: "#333", fontSize: "20px", marginBottom: "8px" }}>
                                {item.name}
                            </h3>
                            <p style={{ color: "#666", fontSize: "14px", marginBottom: "10px" }}>
                                {item.description}
                            </p>
                            <p style={{ color: "#FF6600", fontSize: "18px", fontWeight: "bold" }}>
                                {item.price}
                            </p>
                            <button
                            style={{padding:"10px 15px",
                            backgroundColor: "#FF6600",
                            color: "#fff",
                            borderRadius: "10px",
                            cursor: "pointer",
                            marginTop: "10px",
                            fontWeight: "bold",}}
                            >Add to Order</button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

const menuItems = [
    {
        id: 1,
        name: "Nasi Lemak",
        description: "Mak kau hijau",
        price: "RM 8.00",
        image: "/images/nasi_lemak.jpg",
    },
    {
        id: 2,
        name: "Roti Canai",
        description: "Made with love and sweat of mapla.",
        price: "RM 5.00",
        image: "/images/roti_canai.jpg",
    },
    {
        id: 3,
        name: "Mee Goreng Mamak",
        description: "Spicy fried noodles with tofu, potatoes, and veggies.",
        price: "RM 7.00",
        image: "/images/mee_goreng.jpg",
    },
    {
        id: 4,
        name: "Teh Tarik",
        description: "Minum lu boss.",
        price: "RM 3.50",
        image: "/images/teh_tarik.jpg",
    },
];
