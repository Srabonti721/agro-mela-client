import { motion } from "framer-motion";
import {
  ArrowRight,
  Droplets,
  FlaskConical,
  Leaf,
  Sprout,
} from "lucide-react";
import { Autoplay, A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    title: "Crop Advisory",
    description:
      "Get personalised guidance on seed selection, crop rotation and seasonal planning from certified agronomists.",
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80",
    icon: Sprout,
  },
  {
    title: "Soil Testing",
    description:
      "Know exactly what your land needs. Accurate nutrient and pH analysis with practical, affordable treatment plans.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
    icon: FlaskConical,
  },
  {
    title: "Smart Irrigation",
    description:
      "Cut water waste with drip systems, scheduling tools and moisture sensors built for every field size.",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
    icon: Droplets,
  },
  {
    title: "Organic Farming",
    description:
      "Transition confidently with certified inputs, composting help and marketing support for organic produce.",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
    icon: Leaf,
  },
];

const Service = () => {
  return (
    <section id="services" className="bg-green-50 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= SECTION HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-600 sm:text-base">
            What We Offer
          </p>

          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
            Services built around{" "}
            <span className="text-green-600">your farm</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            From soil testing to smart irrigation, we bring the right tools,
            advice and support to every stage of your crop cycle.
          </p>
        </motion.div>

        {/* ================= SERVICES CAROUSEL ================= */}
        <Swiper
          modules={[Autoplay, A11y, Keyboard, Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1.15}
          grabCursor
          loop
          speed={700}
          watchOverflow={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          keyboard={{ enabled: true }}
          navigation={{ prevEl: "#service-prev", nextEl: "#service-next" }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.7, spaceBetween: 20 },
            768: { slidesPerView: 2.3, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 3.4, spaceBetween: 28 },
          }}
          className="service-swiper mt-12 md:mt-14 !pb-14"
        >
          {services.map(({ title, description, image, icon: Icon }) => (
            <SwiperSlide key={title} className="h-auto">
              {/* ================= CARD ================= */}
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="
                  group
                  flex h-full flex-col overflow-hidden
                  rounded-2xl border border-green-100
                  bg-white shadow-md
                  transition duration-300
                  hover:-translate-y-2 hover:border-green-600 hover:bg-green-600 hover:shadow-2xl hover:shadow-green-600/25
                "
              >
                {/* IMAGE */}
                <div className="relative h-44 overflow-hidden sm:h-48">
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="
                      h-full w-full object-cover
                      transition duration-500 ease-out
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t from-green-900/40 to-transparent
                    "
                  />

                  {/* ICON BADGE */}
                  <div
                    className="
                      absolute bottom-4 left-5
                      flex h-12 w-12 items-center justify-center
                      rounded-xl bg-white text-green-600 shadow-lg
                      transition duration-300
                      group-hover:bg-green-700 group-hover:text-white
                    "
                  >
                    <Icon size={24} />
                  </div>
                </div>

                {/* BODY */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3
                    className="
                      text-lg font-bold text-gray-800 transition-colors duration-300 sm:text-xl
                      group-hover:text-white
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      mt-3 flex-1 text-sm leading-7 text-gray-600 transition-colors duration-300
                      group-hover:text-green-50
                    "
                  >
                    {description}
                  </p>

                  <button
                    className="
                      mt-5 inline-flex w-fit items-center gap-2
                      text-sm font-semibold text-green-600 transition-colors duration-300
                      group-hover:text-white
                    "
                  >
                    Learn More
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </button>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ================= CAROUSEL ARROWS ================= */}
      <div className="mx-auto mt-2 flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <button
          id="service-prev"
          aria-label="Previous services"
          className="
            flex h-11 w-11 items-center justify-center
            rounded-full border border-green-200 bg-white text-green-700
            shadow-sm transition hover:border-green-600 hover:bg-green-600 hover:text-white
          "
        >
          <ArrowRight size={20} className="rotate-180" />
        </button>

        <div className="hidden flex-1 justify-center sm:flex" />

        <button
          id="service-next"
          aria-label="Next services"
          className="
            flex h-11 w-11 items-center justify-center
            rounded-full border border-green-200 bg-white text-green-700
            shadow-sm transition hover:border-green-600 hover:bg-green-600 hover:text-white
          "
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Service;
