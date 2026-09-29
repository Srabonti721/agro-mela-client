import { ArrowRight } from 'lucide-react';
import React from 'react'

const Card = () => {
  return (
    <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group p-7 bg-white rounded-2xl border border-gray-100
                shadow-sm hover:shadow-xl transition-all duration-300
                hover:-translate-y-2"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl bg-green-50
                  flex items-center justify-center mb-6
                  group-hover:bg-green-600 transition-colors duration-300"
                >
                  <Icon
                    size={28}
                    className="text-green-600 group-hover:text-white transition-colors duration-300"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-6 mb-5">
                  {item.description}
                </p>

                {/* Link */}
                <button
                  className="flex items-center gap-2 text-green-600
                  font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight size={17} />
                </button>
              </div>
            );
          })} */}
        </div>
    </div>
  )
}

export default Card
