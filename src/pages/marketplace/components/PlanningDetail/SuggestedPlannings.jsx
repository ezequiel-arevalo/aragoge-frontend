import { motion } from 'framer-motion'
import {PlanningCard} from './PlanningCard'

export const SuggestedPlannings = ({ suggestedPlannings }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mt-12"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Planificaciones Sugeridas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {suggestedPlannings.slice(0, 4).map((suggestedPlanning) => (
          <PlanningCard key={suggestedPlanning.id} planning={suggestedPlanning} />
        ))}
      </div>
    </motion.section>
  )
}