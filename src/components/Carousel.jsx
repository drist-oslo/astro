import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import WheelGesturesPlugin from 'embla-carousel-wheel-gestures';

const cards = [
  {
    image: 'https://images.squarespace-cdn.com/content/5f3537e0dc1cd21c88c39d93/7c9b02e2-e42e-48fe-9bef-51d0e886a464/Digital+promo2.jpg',
    title: 'Digital kampanje',
    tags: ['Innhold', 'Distribusjon']
  },
  {
    image: 'https://images.squarespace-cdn.com/content/5f3537e0dc1cd21c88c39d93/a67e2b38-9679-49ce-b3c3-5251c795af10/web+design2.jpg',
    title: 'Webdesign',
    tags: ['Design', 'Utvikling']
  },
  {
    image: 'https://images.squarespace-cdn.com/content/5f3537e0dc1cd21c88c39d93/6b929077-71da-4146-8a50-02f8374b980d/spisset+ra%CC%8Adgivning2.jpg',
    title: 'Spisset rådgivning',
    tags: ['Strategi', 'Analyse']
  },
  {
    image: 'https://images.squarespace-cdn.com/content/5f3537e0dc1cd21c88c39d93/d0d54e11-45c1-45f3-9e41-6c0f2ee3e72f/grafisk+design.jpg',
    title: 'Grafisk design',
    tags: ['Visuell identitet']
  },
  {
    image: 'https://images.squarespace-cdn.com/content/5f3537e0dc1cd21c88c39d93/921f68b9-c3cd-4b21-8d05-20c33634e780/KI+tjenester2.jpg',
    title: 'KI-tjenester',
    tags: ['Teknologi', 'AI']
  },
  {
    image: 'https://images.squarespace-cdn.com/content/5f3537e0dc1cd21c88c39d93/07035891-6252-4f58-90dd-526a8fbface0/powerpoint+design2.jpg',
    title: 'PowerPoint design',
    tags: ['Presentasjon']
  },
  {
    image: 'https://images.squarespace-cdn.com/content/5f3537e0dc1cd21c88c39d93/7d02f107-1f69-4a86-8642-3b3e7992ba37/Fysisk+promo2.jpg',
    title: 'Fysisk promo',
    tags: ['Trykk', 'Event']
  }
];

export default function Carousel() {
  const autoplayOptions = { delay: 3000, stopOnInteraction: false };
  const [emblaRef] = useEmblaCarousel(
    {
      align: 'start',
      loop: true,
      dragFree: true
    },
    [Autoplay(autoplayOptions), WheelGesturesPlugin()]
  );

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {cards.map((card, index) => (
          <div className="embla__slide" key={index}>
            <div className="card">
              <img src={card.image} alt={card.title} />
              <div className="overlay"></div>
              <div className="info">
                <h3>{card.title}</h3>
                <div className="tags">
                  {card.tags.map((tag, i) => (
                    <span className="tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .embla {
          overflow: hidden;
          width: 100%;
          padding: 40px 0;
        }
        .embla__container {
          display: flex;
          gap: 20px;
        }
        .embla__slide {
          flex: 0 0 320px;
        }
        .card {
          position: relative;
          width: 100%;
          height: 480px;
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
          transition: transform 0.4s ease;
        }
        .card:hover {
          transform: translateY(-10px);
        }
        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
        }
        .info {
          position: absolute;
          bottom: 0;
          padding: 16px;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .card:hover .info {
          opacity: 1;
        }
        .tag {
          display: inline-block;
          font-size: 12px;
          padding: 4px 10px;
          margin: 2px;
          border: 1px solid white;
          border-radius: 999px;
        }
      `}</style>
    </div>
  );
}
