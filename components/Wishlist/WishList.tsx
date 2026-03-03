import { Product } from "@/types";
import WishlistCard from "./WishlistCard";

function WishList() {
  const products: Product[] = [
    {
      id: "550e8400-e29b-41d4-a716-446655440000",
      name: "ErgoClick Mechanical Keyboard",
      description:
        "A high-performance tactile mechanical keyboard with RGB backlighting and programmable macros.",
      price: 129.99,
      stockQuantity: 45,
      imageUrl:
        "https://images.unsplash.com/photo-1648923731727-8f300f9db4b2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      brand: "TechGear",
      weight: 1.2,
      weightUnit: "kg",
      createdAt: new Date("2024-01-10T10:00:00Z"),
      updatedAt: new Date("2024-01-10T10:00:00Z"),
    },
    {
      id: "721f9211-b11c-42e1-a321-998877665544",
      name: "UltraView 27-inch Monitor",
      description:
        "4K UHD resolution with 144Hz refresh rate, perfect for professional editing and gaming.",
      price: 449.5,
      stockQuantity: 12,
      imageUrl:
        "https://images.unsplash.com/photo-1646771032500-27b440b2d947?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      brand: "Visionary",
      weight: 5.5,
      weightUnit: "kg",
      createdAt: new Date("2024-01-10T10:00:00Z"),
      updatedAt: new Date("2024-02-28T14:20:00Z"),
    },
    {
      id: "a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d",
      name: "Pro-Grip Wireless Mouse",
      description:
        "Ergonomic wireless mouse with 20,000 DPI sensor and 80-hour battery life.",
      price: 79.0,
      stockQuantity: 110,
      imageUrl:
        "https://images.unsplash.com/photo-1755373255602-c030aac3bc69?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      brand: "TechGear",
      weight: 85.0,
      weightUnit: "g",
      createdAt: new Date("2024-02-10T11:45:00Z"),
      updatedAt: new Date("2024-02-10T11:45:00Z"),
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col gap-2">
          <WishlistCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default WishList;
