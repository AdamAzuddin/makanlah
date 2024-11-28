'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Page() {
    const router = useRouter()
  return (
    <div className="min-h-screen bg-yellow-400 flex flex-col items-center justify-start">
      {/* Top section: Title and Details on the left, Image on the right */}
      <div className="flex flex-row gap-6 mt-20">
        {/* Left Column */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4">Nabil Cafe</h1>
          <div className="flex items-center gap-2 mb-2 text-3xl">
            <span>🕒</span>
            <p>7:00 - 23:00</p>
          </div>
          <div className="flex items-center gap-2 mb-2 text-3xl">
            <span>📍</span>
            <p>5, Jalan Kearney, Sabah</p>
          </div>
          <div className="flex items-center gap-2 text-3xl">
            <span>📞</span>
            <p>012-345 6789</p>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <Image
            src="/nabil_cafe_img.png"
            alt="Nabil Cafe"
            width={200}
            height={200}
          />
        </div>
      </div>

      <div className="flex flex-row gap-6">
        {/* First Box */}
        <div className="mt-6 bg-[#fff1cc] p-10 flex-[1.5] text-xl">
          <p className="whitespace-nowrap">
            <strong>Total revenue:</strong> RM 9876
          </p>
          <p className="whitespace-nowrap">
            <strong>Today's revenue:</strong> RM 40
          </p>
          <div className="flex justify-between items-center mt-2 whitespace-nowrap">
            <p className="mr-4">
              <strong>Incoming orders:</strong> 5
            </p>
            <button className="bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600">
              View
            </button>
          </div>
        </div>

        {/* Second Box */}
        <div className="mt-6 bg-[#fff1cc] p-10 flex-[1.5] text-xl">
          <div className="flex justify-between items-center mt-2 whitespace-nowrap">
            <p className="mr-4">
              <strong>Menu</strong>
            </p>
            <button className="bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600" onClick={()=>router.push("/dashboard/merchant/my-menu")}>
              View
            </button>
          </div>
          <div className="flex justify-between items-center mt-2 whitespace-nowrap">
            <p className="mr-4">
              <strong>Promotions</strong>
            </p>
            <button className="bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
