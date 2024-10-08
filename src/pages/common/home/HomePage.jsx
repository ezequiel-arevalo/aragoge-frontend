import { HeroSection } from './components/HeroSection';
import { HowItWorks } from './components/HowItWorks';
import { FeaturedTrainers } from './components/FeaturedTrainers';
import { AthleteReviews } from './components/AthleteReviews';
import { CategoriesSection } from './components/CategoriesSection';
import { NewsletterSection } from './components/NewsletterSection';
import { CounterStats } from './components/CounterStats';

export const HomePage = () => {
  return (
    <section className="mx-auto text-center p-4">
      <h2 className="text-h2 font-semibold font-title py-4">Home Page</h2>
      <HeroSection />          {/* Captura la atención inmediata */}
      <FeaturedTrainers />     {/* Motiva al usuario a explorar entrenadores */}
      <HowItWorks />           {/* Explica el funcionamiento del servicio */}
      <CategoriesSection />    {/* Permite explorar categorías por interés */}
      <AthleteReviews />       {/* Aumenta la confianza con reseñas de usuarios */}
      <CounterStats />         {/* Refuerza la credibilidad con estadísticas */}
      <NewsletterSection />    {/* Invita al usuario a mantenerse conectado */}
    </section>
  );
};