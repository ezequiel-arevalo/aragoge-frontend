import { motion } from "framer-motion";
import { Search } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#da1641] to-[#ff6b6b] opacity-90">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Potencia tu Rendimiento
          </h1>
          <p className="text-xl mb-8">
            Conecta con entrenadores de élite y transforma tu carrera deportiva
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="text"
              placeholder="Busca tu entrenador ideal..."
              className="w-full sm:w-96 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#da1641]"
            />
            <button className="bg-white text-[#da1641] px-6 py-3 rounded-full hover:bg-gray-100 transition duration-300 flex items-center">
              <Search className="mr-2" />
              <span>Buscar</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};