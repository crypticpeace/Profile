import React from 'react';
import { Star } from 'lucide-react';
import Image1 from '../assets/aman_creativelead.JPG';
import srk from '../assets/srk.jpeg';

const ProductComparison = () => {
  const products = [
    {
      name: "Aman Jain",
      rating: 4.8,
      reviews: 2453,
      price: 100000,
      features: [
        "Cute",
        "Funny",
        "Creative",
        "Unemployed",
        "Available"
      ],
      imgUrl: Image1,
      cartUrl: null, // No URL for Aman
    },
    {
      name: "ShahRukh Khan",
      rating: 4.6,
      reviews: 1895,
      price: 699.99,
      features: [
        "Muslim",
        "Not cute like me",
        "Decent looking",
        "Not available",
        "You can't afford him"
      ],
      imgUrl: srk,
      cartUrl: "https://example.com/shahrukh-cart" // Redirect URL for ShahRukh
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      );
    }
    return stars;
  };

  const handleAddToCart = (url) => {
    if (url) {
      window.location.href = url; // Redirect to the specified URL
    } 
  };

  return (
    <div className="w-full p-2">
      <h2 className="text-2xl font-bold mb-2">Compare similar items</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg p-4 bg-white shadow-sm">
            <div className="aspect-square relative mb-4">
              <img
                src={product.imgUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-lg font-medium mb-2 h-14 line-clamp-2">
              {product.name}
            </h3>

            <div className="flex items-center mb-2">
              <div className="flex mr-2">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-blue-600">
                ({product.reviews.toLocaleString()})
              </span>
            </div>

            <div className="mb-4">
              <span className="text-2xl font-bold">
                ₹{product.price.toFixed(2)}
              </span>
            </div>

            <div className="border-t pt-4">
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="text-sm">
                    • {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => handleAddToCart(product.cartUrl)}
              className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 text-sm text-gray-500">
        <p>Product prices and availability are accurate </p>
      </div>
    </div>
  );
};

export default ProductComparison;
