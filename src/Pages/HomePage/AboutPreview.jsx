import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin, Leaf } from "lucide-react";
import { Link } from "react-router";

const AboutPreview = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ================= IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative Shape */}
            <div className="
              absolute
              -top-5
              -left-5
              w-24
              h-24
              bg-green-100
              rounded-full
              -z-10
            " />

            <div className="overflow-hidden rounded-3xl shadow-xl">
              <motion.img
                src="https://static.vecteezy.com/system/resources/previews/065/830/455/large_2x/lush-agricultural-fields-showcase-diverse-crops-under-clear-skies-in-a-tropical-setting-photo.jpeg"
                alt="Our agriculture farm"
                className="
                  w-full
                  h-[350px]
                  sm:h-[430px]
                  lg:h-[500px]
                  object-cover
                "
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6 }}
              />
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="
                absolute
                -bottom-6
                right-5
                sm:right-8
                bg-green-600
                text-white
                rounded-2xl
                px-6
                py-4
                shadow-xl
              "
            >
              <p className="text-2xl sm:text-3xl font-bold">
                10+
              </p>

              <p className="text-sm text-green-50">
                Years of Farming
              </p>
            </motion.div>
          </motion.div>


          {/* ================= CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            {/* Small Heading */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="
                flex
                items-center
                gap-2
                text-green-600
                font-semibold
                text-sm
                uppercase
                tracking-widest
                mb-4
              "
            >
              <span className="w-8 h-[2px] bg-green-600" />
              About Our Farm
            </motion.p>


            {/* Title */}
            <h2 className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              text-gray-800
              leading-tight
            ">
              Growing Naturally,
              <span className="block text-green-600">
                Caring for Tomorrow
              </span>
            </h2>


            {/* Description */}
            <p className="
              mt-6
              text-gray-600
              text-base
              sm:text-lg
              leading-8
              max-w-xl
            ">
              We are a family-owned farm dedicated to growing fresh,
              healthy and quality agricultural products. From our fields
              to your table, we believe in responsible farming and
              taking care of nature.
            </p>


            {/* ================= INFO CARDS ================= */}
            <div className="
              grid
              grid-cols-1
              sm:grid-cols-3
              gap-4
              mt-8
            ">

              {/* Card 1 */}
              <div className="
                flex
                sm:flex-col
                items-center
                sm:items-start
                gap-3
                p-4
                rounded-xl
                bg-green-50
                border
                border-green-100
              ">
                <div className="
                  w-10
                  h-10
                  rounded-lg
                  bg-green-600
                  flex
                  items-center
                  justify-center
                  shrink-0
                ">
                  <CalendarDays
                    size={20}
                    className="text-white"
                  />
                </div>

                <div>
                  <p className="font-bold text-gray-800">
                    Since 2015
                  </p>

                  <p className="text-sm text-gray-500">
                    Our Journey
                  </p>
                </div>
              </div>


              {/* Card 2 */}
              <div className="
                flex
                sm:flex-col
                items-center
                sm:items-start
                gap-3
                p-4
                rounded-xl
                bg-green-50
                border
                border-green-100
              ">
                <div className="
                  w-10
                  h-10
                  rounded-lg
                  bg-green-600
                  flex
                  items-center
                  justify-center
                  shrink-0
                ">
                  <MapPin
                    size={20}
                    className="text-white"
                  />
                </div>

                <div>
                  <p className="font-bold text-gray-800">
                    Mymensingh
                  </p>

                  <p className="text-sm text-gray-500">
                    Bangladesh
                  </p>
                </div>
              </div>


              {/* Card 3 */}
              <div className="
                flex
                sm:flex-col
                items-center
                sm:items-start
                gap-3
                p-4
                rounded-xl
                bg-green-50
                border
                border-green-100
              ">
                <div className="
                  w-10
                  h-10
                  rounded-lg
                  bg-green-600
                  flex
                  items-center
                  justify-center
                  shrink-0
                ">
                  <Leaf
                    size={20}
                    className="text-white"
                  />
                </div>

                <div>
                  <p className="font-bold text-gray-800">
                    Natural
                  </p>

                  <p className="text-sm text-gray-500">
                    Farming
                  </p>
                </div>
              </div>

            </div>


            {/* ================= BUTTON ================= */}
            <Link
              to="/about"
              className="
                inline-flex
                items-center
                gap-2
                mt-8
                bg-green-600
                hover:bg-green-700
                text-white
                font-semibold
                px-6
                py-3.5
                rounded-lg
                transition
                duration-300
                shadow-lg
                shadow-green-600/20
                group
              "
            >
              Learn More

              <ArrowRight
                size={19}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;