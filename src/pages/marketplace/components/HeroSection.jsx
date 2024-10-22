import { motion } from "framer-motion";
import { SearchBar } from "./SearchBar";

export const HeroSection = ({ onSearchSubmit }) => (
  <section className="relative py-20 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[#da1641] to-[#ff6b6b] opacity-90"></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Marketplace de Servicios Fitness
        </h1>
        <p className="text-xl mb-8">
          Encuentra el entrenador o servicio perfecto para alcanzar tus metas
        </p>
        {/* Pasar la función para manejar la búsqueda */}
        <SearchBar onSearchChange={onSearchSubmit} />
      </motion.div>
    </div>
  </section>
);
