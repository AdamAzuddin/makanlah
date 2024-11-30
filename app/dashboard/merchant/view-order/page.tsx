"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AddMenuPage() {
  const router = useRouter();

  // Sample menu items array
  const menuItems = [
    {
      id: 1,
      name: "Cake",
      price: "RM 23.30",
      image: "/chocolate_cake.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Chocolate Cake",
      price: "RM 23.30",
      image: "/chocolate_cake.png",
      quantity: 1,
    },
    {
      id: 3,
      name: "Another Cake",
      price: "RM 23.30",
      image: "/chocolate_cake.png",
      quantity: 1,
    },
    {
      id: 4,
      name: "Cake",
      price: "RM 23.30",
      image: "/chocolate_cake.png",
      quantity: 1,
    },
    {
      id: 5,
      name: "Cake",
      price: "RM 23.30",
      image: "/chocolate_cake.png",
      quantity: 1,
    },
    {
      id: 6,
      name: "Chocolate Cake",
      price: "RM 23.30",
      image: "/chocolate_cake.png",
      quantity: 1,
    },
    {
      id: 7,
      name: "Another Cake",
      price: "RM 23.30",
      image: "/chocolate_cake.png",
      quantity: 3,
    },
    {
      id: 8,
      name: "Cake",
      price: "RM 23.30",
      image: "/chocolate_cake.png",
      quantity: 2,
    },
  ];
  const orderItems = menuItems.filter((item) => [1, 2, 6].includes(item.id));

  return (
    <div className="min-h-screen bg-yellow-400 flex flex-col items-center justify-start">
      <h1 className="text-5xl font-bold mb-4 top-9">Order List</h1>
      <ul className="w-full max-w-md">
        {orderItems.map((item) => (
          <li
            key={item.id}
            className="flex items-center gap-4 mb-4 p-4 bg-white rounded-lg shadow"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={50}
              height={50}
              className="rounded-lg"
            />
            <div className="flex-1">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="text-gray-600">{item.price}</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
