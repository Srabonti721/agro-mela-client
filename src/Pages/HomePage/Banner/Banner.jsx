import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative overflow-hidden">
      {/* ================= BACKGROUND IMAGE ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNoMuM0ZKRc4NvCLYif2POqc7bCOLqplVYsxr1EAGuKRKZXQZPRXuTMLMC&s=10"
          alt="Farmer working in the field"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-green-950/70" />

      {/* ================= CENTERED CONTENT ================= */}
      <div className="relative mx-auto max-w-7xl px-5 py-28 text-center sm:px-8 sm:py-36 lg:px-10 lg:py-48">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Nourishing the land,
          <span className="block text-lime-400">
            feeding the future
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-base leading-8 text-green-100 sm:text-lg"
        >
          AgroMela supports farmers with honest advice, quality inputs and
          smarter tools — from seed to harvest.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5"
        >
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-8 py-4 text-sm font-semibold text-green-950 shadow-lg shadow-lime-400/25 transition duration-300 hover:bg-lime-300 sm:text-base">
            Explore Services
            <ArrowRight size={19} />
          </button> 

           <button className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:border-white hover:bg-white hover:text-green-800 sm:text-base">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;