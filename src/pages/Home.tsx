import React from 'react';
import { ArrowRight, Leaf, Truck, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    { icon: <Leaf className="h-6 w-6" />, title: 'Fresh Produce', description: 'Direct from local farmers' },
    { icon: <Truck className="h-6 w-6" />, title: 'Fast Delivery', description: 'Same-day delivery available' },
    { icon: <Shield className="h-6 w-6" />, title: 'Quality Guaranteed', description: 'Satisfaction guaranteed' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1495570689269-d883b1224443?auto=format&fit=crop&q=80"
            alt="Fresh produce"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Fresh From Farm to Table</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Discover the finest selection of fresh, locally sourced produce delivered right to your doorstep.
            </p>
            <Link
              to="/store"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg text-lg transition-colors"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-green-50 rounded-lg">
                <div className="text-green-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Fresh Tomatoes', price: '$4.99/lb', image: 'https://images.unsplash.com/photo-1546470427-f5b713b6f3de?auto=format&fit=crop&q=80' },
              { name: 'Organic Apples', price: '$3.99/lb', image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&q=80' },
              { name: 'Fresh Lettuce', price: '$2.99/head', image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&q=80' },
              { name: 'Organic Carrots', price: '$2.49/lb', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80' },
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-green-600 font-medium">{product.price}</p>
                  <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-500 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}