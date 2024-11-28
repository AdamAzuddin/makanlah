"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AddMenuPage() {
    const router = useRouter();

    // Sample menu items array
    const menuItems = [
        { id: 1, name: "Cake", price: "RM 23.30", image: "/chocolate_cake.png" },
        { id: 2, name: "Chocolate Cake", price: "RM 23.30", image: "/chocolate_cake.png" },
        { id: 3, name: "Another Cake", price: "RM 23.30", image: "/chocolate_cake.png" },
        { id: 4, name: "Cake", price: "RM 23.30", image: "/chocolate_cake.png" },
        { id: 5, name: "Cake", price: "RM 23.30", image: "/chocolate_cake.png" },
        { id: 6, name: "Chocolate Cake", price: "RM 23.30", image: "/chocolate_cake.png" },
        { id: 7, name: "Another Cake", price: "RM 23.30", image: "/chocolate_cake.png" },
        { id: 8, name: "Cake", price: "RM 23.30", image: "/chocolate_cake.png" }
    ];

    return (
        <div className="p-6">
            {/* Header */}
            <h1 className="text-3xl font-bold mb-6">My Menu</h1>

            {/* Menu Items Flexbox Container */}
            <div className="flex flex-wrap justify-center gap-4">
                {menuItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center bg-orange-300 rounded-lg p-4 justify-center w-full sm:w-1/3" // 3 items per row (w-1/3 for sm and above)
                        style={{ maxWidth: "200px", height: "200px" }} // Keep items square
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-24 object-cover mb-4" // Ensure the image stays square and fits well
                        />
                        <div className="text-center">
                            <p className="text-lg font-bold">{item.name}</p>
                            <p className="text-sm">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Item Button */}
            <div className="mt-6 flex justify-center">
                <button
                    className="flex items-center bg-transparent border-2 border-gray-400 rounded-full px-6 py-2"
                    onClick={() => router.push("/add-menu-item")}
                >
                    <span className="text-lg mr-2">Add an item</span>
                    <Image
                        src="/circle_add_button.png"
                        alt="Add Button"
                        width={30}
                        height={30}
                    />
                </button>
            </div>
        </div>
    );
}