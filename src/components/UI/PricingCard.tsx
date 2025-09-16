import React from 'react';
import { motion } from 'framer-motion';
import { Plan } from '../../types';

interface PricingCardProps {
  plan: Plan;
  serviceId: string;
}

export const PricingCard = ({ plan, serviceId }: PricingCardProps) => {
  const handlePurchase = () => {
    // In a real implementation, this would integrate with Razorpay
    const options = {
      key: 'rzp_test_your_key_here', // Replace with your Razorpay key
      amount: plan.price * 100, // Amount in paise
      currency: 'INR',
      name: 'dunspire',
      description: `${plan.name} Plan - ${serviceId}`,
      image: '/logo.png',
      handler: function (response: any) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: '',
        email: 'dunbillbusiness@gmail.com',
        contact: '+919942824657'
      },
      theme: {
        color: '#6366F1'
      }
    };

    // @ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const getCtaText = () => {
    switch (plan.name.toLowerCase()) {
      case 'starter':
        return 'Kickstart Now';
      case 'growth':
        return 'Boost My Business';
      case 'scale':
        return "Let's Scale";
      default:
        return 'Get Started';
    }
  };

  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-xl border-2 p-8 relative overflow-hidden ${
        plan.popular ? 'border-indigo-500 scale-105' : 'border-gray-200'
      }`}
      whileHover={{ y: -8, scale: plan.popular ? 1.05 : 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{plan.name}</h3>
        <div className="text-4xl font-bold text-indigo-600 mb-2">
          ₹{plan.price.toLocaleString('en-IN')}
          <span className="text-lg font-normal text-gray-500">
            /{plan.duration === 'monthly' ? 'month' : 'project'}
          </span>
        </div>
        {plan.duration === 'monthly' && (
          <p className="text-sm text-gray-500">Billed monthly</p>
        )}
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <span className="text-green-500 font-bold mt-1 text-lg">✓</span>
            <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handlePurchase}
        className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
          plan.popular
            ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-indigo-500/25'
            : 'bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-900 hover:to-black shadow-gray-500/25'
        }`}
      >
        {getCtaText()}
      </button>

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          Secure payment via Razorpay
        </p>
      </div>
    </motion.div>
  );
};