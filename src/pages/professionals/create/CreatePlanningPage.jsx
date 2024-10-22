import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPlanning, fetchCategories } from '@/redux/plannings/planningsSlice';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export const CreatePlanningPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories, loading, error } = useSelector((state) => state.plannings);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    synopsis: '',
    price: '',
    category_id: '',
  });

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: name === 'price' || name === 'category_id' ? Number(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createPlanning(formData)).unwrap();
      navigate('/professional');
    } catch (err) {
      console.error('Failed to create the planning:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-[#da1641] to-[#ff6b6b] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/professional')}
            className="flex items-center text-white mb-4 hover:underline no-global-styles no-styles-global bg-transparent"
          >
            <ArrowLeft size={20} className="mr-2" />
            Volver al Panel
          </button>
          <h1 className="text-4xl font-bold">Crear Nueva Planificación</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-xl overflow-hidden"
        >
          <div className="p-8">
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#da1641] focus:border-[#da1641]"
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción</label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#da1641] focus:border-[#da1641]"
                ></textarea>
              </div>
              <div>
                <label htmlFor="synopsis" className="block text-sm font-medium text-gray-700">Sinopsis</label>
                <input
                  type="text"
                  id="synopsis"
                  name="synopsis"
                  required
                  value={formData.synopsis}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#da1641] focus:border-[#da1641]"
                />
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Precio</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  required
                  value={formData.price}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#da1641] focus:border-[#da1641]"
                />
              </div>
              <div>
                <label htmlFor="category_id" className="block text-sm font-medium text-gray-700">Categoría</label>
                <select
                  id="category_id"
                  name="category_id"
                  required
                  value={formData.category_id}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#da1641] focus:border-[#da1641]"
                >
                  <option value="">Selecciona una categoría</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#da1641] text-white px-6 py-2 rounded-full hover:bg-[#c30d35] transition duration-300 disabled:opacity-50"
                >
                  {loading ? 'Creando...' : 'Crear Planificación'}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </main>
    </div>
  );
};