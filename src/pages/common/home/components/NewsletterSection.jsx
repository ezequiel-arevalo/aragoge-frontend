import { Button, Input } from "@chakra-ui/react";

export const NewsletterSection = () => (
  <section className="bg-[#DA1641] text-white py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Suscríbete a Nuestro Newsletter</h2>
      <p className="text-lg mb-6">Recibe actualizaciones, ofertas y tips directamente en tu correo.</p>
      <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Input 
          placeholder="Ingresa tu correo electrónico" 
          size="lg" 
          type="email" 
          variant="filled" 
          required
          aria-label="Correo electrónico"
          className="w-full sm:w-auto"
        />
        <Button 
          colorScheme="whiteAlpha" 
          size="lg"
          type="submit"
          aria-label="Suscribirse"
        >
          Suscribirse
        </Button>
      </form>
    </div>
  </section>
);