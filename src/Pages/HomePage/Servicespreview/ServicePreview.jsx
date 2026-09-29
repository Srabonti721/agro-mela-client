
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const ServicePreview = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/services")
      .then((res) => {
        // Home page-এ শুধু 4টি service দেখাবে
        setServices(res.data.slice(0, 4));
      })
      .catch((error) => {
        console.error("Failed to load services:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-20">
        <div className="text-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-green-600 font-semibold uppercase tracking-wider">
            Our Services
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            What We Offer
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            We provide reliable agricultural services to farmers and
            customers for a better farming experience.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
            >

              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="text-xl font-bold text-gray-800">
                  {service.name}
                </h3>

                <p className="text-gray-500 text-sm leading-6 mt-3">
                  {service.description}
                </p>

                <Link
                  to={`/services/${service._id}`}
                  className="inline-block mt-5 text-green-600 font-semibold hover:text-green-800 transition"
                >
                  Learn More →
                </Link>

              </div>
            </div>
          ))}

        </div>

        {/* All Services */}
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-block px-7 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
          >
            View All Services
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicePreview;
