import React from 'react';
import { XCircle, Truck, Shield, CreditCard } from 'lucide-react';

const FeaturesBanner = ({ features = [] }) => {
  // Default features if none provided
  const defaultFeatures = [
    {
      icon: <XCircle className="w-6 h-6 text-orange-400" />,
      customIcon: null,
      title: "Non-Returnable"
    },
    {
      icon: <Truck className="w-6 h-6 text-orange-400" />,
      customIcon: null,
      title: "Free Delivery"
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-400" />,
      customIcon: null,
      title: "10 Year\nWarranty"
    },
    {
      icon: <CreditCard className="w-6 h-6 text-orange-400" />,
      customIcon: null,
      title: "Pay on Delivery"
    }
  ];

  // Use provided features or fall back to defaults
  const displayFeatures = features.length > 0 ? features : defaultFeatures;

  return (
    <div className="w-full bg-white py-2 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex overflow-x-auto">
          {displayFeatures.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center min-w-[100px] px-4"
            >
              <div className="mb-2">
                {feature.customIcon ? (
                  <img 
                    src={feature.customIcon} 
                    alt={feature.title}
                    className="w-6 h-6 object-contain"
                  />
                ) : feature.icon}
              </div>
              <p className="text-xs text-blue-600 text-center whitespace-pre-line">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesBanner;