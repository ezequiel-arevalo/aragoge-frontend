import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfessionalPlannings, deletePlanning } from '@/redux/plannings/planningsSlice';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import PlanningCard from './PlanningCard';
import Loader from '@/components/Loader';

export const HomeProPage = () => {
  const dispatch = useDispatch();
  const { items: plannings, loading, error } = useSelector((state) => state.plannings);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [planningToDelete, setPlanningToDelete] = useState(null);
  const [localPlannings, setLocalPlannings] = useState([]);

  useEffect(() => {
    dispatch(fetchProfessionalPlannings());
  }, [dispatch]);

  useEffect(() => {
    setLocalPlannings(plannings);
  }, [plannings]);

  const handleDeleteClick = (planning) => {
    setPlanningToDelete(planning);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (planningToDelete) {
      dispatch(deletePlanning(planningToDelete.id));
      setLocalPlannings(prevPlannings =>
        prevPlannings.filter(p => p.id !== planningToDelete.id)
      );
      setDeleteModalOpen(false);
      setPlanningToDelete(null);
    }
  };

  return (
    <>
      <header className="bg-gradient-to-r from-[#da1641] to-[#ff6b6b] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Panel de Profesional</h1>
          <p className="text-xl">Gestiona tus planificaciones y potencia tu carrera fitness</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/professional/create"
            className="bg-[#da1641] text-white no-global-styles no-styles-global px-6 py-2 rounded-full hover:text-white hover:bg-[#c30d35] transition duration-300 flex items-center"
          >
            <Plus size={20} className="mr-2" />
            Crear Planificación
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <Loader />
          </div>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <AnimatePresence>
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {localPlannings.map((planning) => (
                <PlanningCard
                  key={planning.id}
                  planning={planning}
                  onDeleteClick={handleDeleteClick}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </main>

      <DeleteConfirmationModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
    </>
  );
};