import { AiFillStar as Star } from 'react-icons/ai';

export const AthleteReviews = () => (
  <section className="py-16 px-4 md:px-8 bg-gray-100">
    <h2 className="text-3xl font-bold mb-8 text-center">Reseñas de Atletas</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3].map((review) => (
        <div key={review} className="bg-white rounded-lg shadow-md p-6" aria-label={`Reseña del atleta ${review}`}>
          <div className="flex items-center mb-4">
            <img
              src={`https://placehold.co/50x50?text=User+${review}`}
              alt={`Atleta ${review}`}
              className="rounded-full mr-4"
            />
            <div>
              <h3 className="font-semibold">Atleta {review}</h3>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#DA1641] text-[#DA1641]" />
                ))}
              </div>
            </div>
          </div>
          <p className="text-[#131211]/70">"¡Excelente entrenador, me ayudó a mejorar mis tiempos en natación!"</p>
        </div>
      ))}
    </div>
  </section>
);