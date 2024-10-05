import { Button } from "@chakra-ui/react";
import { AiOutlineRight as ChevronRight } from 'react-icons/ai';

export const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center text-center text-white">
    <img
      src="https://placehold.co/600x400"
      alt="Entrenadores Deportivos"
      className="absolute inset-0 z-0 w-full h-full object-cover"
    />
    <div className="relative z-10 space-y-4 p-4">
      <h1 className="text-4xl md:text-6xl font-bold">Conecta con los Mejores Entrenadores Deportivos</h1>
      <p className="text-xl md:text-2xl">Logra tus metas con entrenadores especializados en boxeo, natación, fisicoculturismo y más.</p>
      <Button colorScheme='light' size="lg" aria-label="Encuentra tu entrenador">
        Encuentra tu Entrenador
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
      <Button colorScheme='light' variant="outline" className="text-[#DA1641] border-[#DA1641] hover:bg-[#DA1641] hover:text-white" size="lg" aria-label="Regístrate como profesional">
        Regístrate como Profesional
      </Button>
    </div>
  </section>
);