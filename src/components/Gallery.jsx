// src/components/Gallery.jsx
import React from "react";

const images = [
  "https://i.ibb.co/gFZjDfKj/zoshua-colah-qfrth-Fy-Hio-unsplash.jpg",
  "https://i.ibb.co/20yMnLRH/Chat-GPT-Image-Jun-24-2025-10-03-21-AM.png",
  "https://i.ibb.co/vxmCgRd8/Chat-GPT-Image-Jun-24-2025-09-50-17-AM.png",
  "https://i.ibb.co/v4gjFyqS/Whats-App-Image-2025-06-22-at-12-15-27-2bd9a741.jpg",
];

const Gallery = () => {
  return (
    <section className="px-6 py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Institute Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Gallery ${i + 1}`}
            className="rounded-lg shadow-md object-cover w-full h-[250px]"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
