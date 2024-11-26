import React, { useState } from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

export default function Help() {
  const [activeTab, setActiveTab] = useState('faq');

  const faqs = [
    {
      question: "How does delivery work?",
      answer: "We deliver within 24 hours of order placement. Delivery is available 7 days a week, and you can choose your preferred delivery time slot during checkout."
    },
    {
      question: "What is your return policy?",
      answer: "If you're not satisfied with the quality of your produce, we offer a 100% satisfaction guarantee. Contact us within 24 hours of delivery for a refund or replacement."
    },
    {
      question: "How do you ensure produce quality?",
      answer: "We work directly with trusted local farmers who follow sustainable farming practices. All produce is inspected for quality before delivery."
    },
    {
      question: "Do you offer organic options?",
      answer: "Yes! We have a wide selection of certified organic produce. Look for the 'Organic' label on our products."
    }
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-4">How Can We Help?</h1>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-6 py-2 rounded-lg ${
                activeTab === 'faq'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              FAQs
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-2 rounded-lg ${
                activeTab === 'contact'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Contact Us
            </button>
          </div>
        </div>

        {activeTab === 'faq' ? (
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <span>support@farmera.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <span>1-800-FARMERA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageSquare className="h-5 w-5 text-green-600" />
                  <span>Live chat available 24/7</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-500 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}