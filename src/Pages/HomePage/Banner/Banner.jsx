
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    badge: "Welcome to AgroConnect",
    title: "Grow Better. Farm Smarter.",
    description:
      "Connect with farmers, discover fresh farm products and learn better farming.",
    image:
      "https://i.ibb.co.com/27jWRT85/jan-kopriva-LTMa-Awxan-Gk-unsplash.jpg",
    primaryButton: "Explore Marketplace",
    secondaryButton: "Farming Guide",
  },
  {
    id: 2,
    badge: "Fresh From The Farm",
    title: "Healthy Food Starts With Healthy Farms.",
    description:
      "Discover fresh crops and agricultural products directly from local farmers.",
    image:
      "https://i.ibb.co.com/zH2kj3dy/megan-thomas-x-Mh-ww8-HN-Q-unsplash.jpg",
    primaryButton: "Explore Products",
    secondaryButton: "Meet Farmers",
  },
  {
    id: 3,
    badge: "Farm Beyond Crops",
    title: "From Fish Ponds To Green Fields.",
    description:
      "Explore fish, dairy, livestock and other farm products from local farms.",
    image:
      "https://i.ibb.co.com/mrsWnsxW/saikiran-kesari-z-Sn8-Vuw-V7-Kg-unsplash.jpg",
    primaryButton: "Explore Marketplace",
    secondaryButton: "Learn More",
  },
  {
    id: 4,
    badge: "Learn & Grow",
    title: "Learn Today. Grow Tomorrow.",
    description:
      "Learn simple farming techniques and discover better ways to grow.",
    image:
      "https://i.ibb.co.com/tPCxhbc3/boudewijn-huysmans-Ohvko-OYl-ASk-unsplash.jpg",
    primaryButton: "Farming Guide",
    secondaryButton: "Get Started",
  },
];

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const currentSlide = slides[activeSlide];

  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.realIndex);
        }}
        className="hero-swiper h-[550px] md:h-[650px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full overflow-hidden">

              {/* Background Image */}
              <motion.img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 4.5,
                  ease: "easeOut",
                }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r to-transparent" />

              {/* Content */}
              <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-10 lg:px-16">
                <motion.div
                  key={activeSlide}
                  className="max-w-2xl text-white"
                >

                  {/* Badge */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -50,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    className="mb-5"
                  >
                    <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md">
                      🌱 {currentSlide.badge}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h1
                    initial={{
                      opacity: 0,
                      y: 60,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.15,
                      ease: "easeOut",
                    }}
                    className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
                  >
                    {currentSlide.title}
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.35,
                      ease: "easeOut",
                    }}
                    className="mt-5 max-w-xl text-base leading-7 text-gray-200 md:text-lg"
                  >
                    {currentSlide.description}
                  </motion.p>

                  {/* Buttons */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.55,
                      ease: "easeOut",
                    }}
                    className="mt-8 flex flex-col gap-3 sm:flex-row"
                  >
                    {/* Primary */}
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="rounded-lg bg-green-600 px-6 py-3 font-semibold shadow-lg hover:bg-green-700"
                    >
                      {currentSlide.primaryButton}
                    </motion.button>

                    {/* Secondary */}
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="rounded-lg border border-white/70 bg-white/10 px-6 py-3 font-semibold backdrop-blur-sm hover:bg-white hover:text-green-800"
                    >
                      {currentSlide.secondaryButton}
                    </motion.button>
                  </motion.div>

                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;