export const CategoriesSection = () => (
    <section className="py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Explora por Deporte</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {['Boxeo', 'Natación', 'Fisicoculturismo', 'Running', 'CrossFit', 'Pilates'].map((categoria) => (
          <div key={categoria} className="bg-white rounded-lg shadow-md p-6 text-center" aria-label={`Categoría de deporte ${categoria}`}>
            <img src={`https://placehold.co/200x200?text=${categoria}`} alt={categoria} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">{categoria}</h3>
          </div>
        ))}
      </div>
    </section>
  );