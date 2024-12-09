"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductImage({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="relative w-full aspect-square">
      <Image
        src={images[currentImage]}
        alt="Product image"
        fill
        className="object-cover rounded-lg"
      />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={cn(
              "w-2 h-2 rounded-full",
              currentImage === idx ? "bg-primary" : "bg-gray-300"
            )}
          />
        ))}
      </div>
      <button
        onClick={() => setCurrentImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setCurrentImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}