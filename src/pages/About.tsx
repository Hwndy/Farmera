import React from 'react';
import { Users, Leaf, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80"
            alt="Farm landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-xl max-w-2xl">
              Connecting farmers and consumers for a sustainable future
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Community First</h3>
              <p className="text-gray-600">
                Supporting local farmers and creating sustainable communities
              </p>
            </div>
            <div className="text-center">
              <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Sustainable Practices</h3>
              <p className="text-gray-600">
                Promoting eco-friendly farming and distribution methods
              </p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Quality Promise</h3>
              <p className="text-gray-600">
                Ensuring the highest quality produce for our customers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2024, Farmera was born from a simple idea: to bridge the gap between local farmers and consumers. We believe in creating a sustainable food system that benefits both producers and consumers.
              </p>
              <p className="text-gray-600 mb-4">
                Our platform has grown to support hundreds of local farmers, making fresh produce accessible to thousands of households while promoting sustainable farming practices.
              </p>
              <p className="text-gray-600">
                Today, we continue to innovate and expand our services, always keeping our core mission at heart: supporting local agriculture and providing the freshest produce to our customers.
              </p>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&q=80"
                alt="Farmer in field"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}