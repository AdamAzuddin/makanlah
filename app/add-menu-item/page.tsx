'use client'
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddItemPage() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [ecoPoint, setEcoPoint] = useState('');
  const [image, setImage] = useState('/chocolate_cake.png');

  const router = useRouter()

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Process the form data here
    console.log({ name, price, ecoPoint, image });
    alert('Item added successfully!');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add an Item</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
        {/* Image Preview */}
        <div className="relative w-40 h-40 rounded-full overflow-hidden border border-gray-300">
          <Image src={image} alt="Uploaded item" fill style={{ objectFit: 'cover' }} />
        </div>

        {/* Image Upload Button */}
        <label className="cursor-pointer">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <div className="flex items-center justify-center bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
            Upload an image
          </div>
        </label>

        {/* Item Details */}
        <div className="w-full max-w-md space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter item name"
              required
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price (RM):
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter price"
              required
            />
          </div>

          <div>
            <label htmlFor="ecoPoint" className="block text-sm font-medium text-gray-700">
              Eco Point:
            </label>
            <input
              type="number"
              id="ecoPoint"
              value={ecoPoint}
              onChange={(e) => setEcoPoint(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter eco point"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          onClick={()=>router.push("/dashboard/merchant/my-menu")}
        >
          Add item
        </button>
      </form>
    </div>
  );
}
