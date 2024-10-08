import { Button } from "@chakra-ui/react";

export const FeaturedTrainers = () => (
  <section className="py-16">
    <h2 className="text-3xl font-bold text-center mb-8">Entrenadores Destacados</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[1, 2, 3, 4].map((trainer) => (
        <div key={trainer} className="bg-white rounded-lg shadow-md overflow-hidden" aria-label={`Entrenador destacado ${trainer}`}>
          <img
            src={`https://placehold.co/600x400?text=Entrenador+${trainer}`}
            alt={`Entrenador ${trainer}`}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Entrenador {trainer}</h3>
            <p className="text-[#131211]/70 mb-2">Especialidad: Boxeo</p>
            <Button colorScheme='light' variant="outline" size="sm" className="text-[#DA1641] border-[#DA1641] hover:bg-[#DA1641] hover:text-white">
              Ver Perfil
            </Button>
          </div>
        </div>
      ))}
    </div>
  </section>
);