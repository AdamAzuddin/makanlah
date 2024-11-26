import Image from "next/image";

export default function MenuPage() {
    return (
        <main
            style={{
                padding: "20px",
                fontFamily: "sans-serif",
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
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "20px",
                }}
            >
                {menuItems.map((item) => (
                    <div
                        key={item.id}
                        style={{
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
                            width={300}
                            height={200}
                            style={{ width: "100%", height: "auto" }}
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
        description: "Traditional Malaysian dish with fragrant rice cooked in coconut milk.",
        price: "RM 8.00",
        image: "/images/nasi_lemak.jpg",
    },
    {
        id: 2,
        name: "Roti Canai",
        description: "Crispy and flaky flatbread served with delicious curry dips.",
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
        description: "Classic Malaysian pulled tea with a frothy top.",
        price: "RM 3.50",
        image: "/images/teh_tarik.jpg",
    },
];