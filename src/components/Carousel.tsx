
import React from 'react';
import './Carousel.css';

interface ImageItem {
  src: string;
  alt: string;
}

interface CarouselProps {
  images?: ImageItem[];
}

export const Carousel: React.FC<CarouselProps> = ({ images = [] }) => {
  const defaultImages = [
    {
      src: "https://placehold.co/600x400/533B4D/FFFFFF/svg",
      alt: "placeholder"
    },
    {
      src: "https://placehold.co/1024x768/FAA4BD/FFFFFF/svg",
      alt: "placeholder"
    },
    {
      src: "https://placehold.co/768x400/FAE3C6/FFFFFF/svg",
      alt: "placeholder"
    },
    {
      src: "https://placehold.co/600x800/F564A9/FFFFFF/svg",
      alt: "placeholder"
    },
    {
      src: "https://placehold.co/600x300/FAE3C6/FFFFFF/svg",
      alt: "placeholder"
    },
    {
      src: "https://placehold.co/768/FAA4BD/FFFFFF/svg",
      alt: "placeholder"
    },
    {
      src: "https://placehold.co/768x400/FAE3C6/FFFFFF/svg",
      alt: "placeholder"
    },
    {
      src: "https://placehold.co/600x750/533B4D/FFFFFF/svg",
      alt: "placeholder"
    },
    {
      src: "https://placehold.co/600x800/F564A9/FFFFFF/svg",
      alt: "placeholder"
    },
    {
      src: "https://placehold.co/600x400/533B4D/FFFFFF/svg",
      alt: "placeholder"
    },
    {
      src: "https://placehold.co/1024x768/FAA4BD/FFFFFF/svg",
      alt: "placeholder"
    },
    {
      src: "https://placehold.co/600x300/533B4D/FFFFFF/svg",
      alt: "placeholder"
    },
    {
      src: "https://placehold.co/768x400/FAE3C6/FFFFFF/svg",
      alt: "placeholder"
    },
    {
      src: "https://placehold.co/600x800/F564A9/FFFFFF/svg",
      alt: "placeholder"
    },
    {
      src: "https://placehold.co/1024x768/FAA4BD/FFFFFF/svg",
      alt: "placeholder"
    },
    {
      src: "https://placehold.co/600x400/533B4D/FFFFFF/svg",
      alt: "placeholder"
    },
  ];

  const imagesToRender = images.length > 0 ? images : defaultImages;

  return (
    <div className="carousel">
      <section className="carousel__masonry-container">
        {imagesToRender.map((image, index) => (
          <img
            key={index}
            className="carousel__masonry-item"
            src={image.src}
            alt={image.alt}
            loading="lazy"
          />
        ))}
      </section>
    </div>
  );
};