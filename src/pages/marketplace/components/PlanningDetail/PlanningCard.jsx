import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const PlanningCard = ({ planning }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="bg-white rounded-lg shadow-md overflow-hidden"
  >
    <img
      src={planning.image_id ? `/api/images/${planning.image_id}` : "https://placehold.co/400"}
      alt={planning.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{planning.title}</h3>
      <p className="text-sm text-gray-600 mb-4">{planning.synopsis.substring(0, 100)}...</p>
      <div className="flex justify-between items-center">
        <span className="text-[#da1641] font-bold">${planning.price.toFixed(2)}</span>
        <Link
          to={`/planning/${planning.id}`}
          className="bg-[#da1641] text-white hover:text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#b81235] transition duration-300"
        >
          Ver Detalles
        </Link>
      </div>
    </div>
  </motion.div>
)