import { Box, SimpleGrid, Text, Icon } from "@chakra-ui/react";
import { RepeatIcon, PhoneIcon, InfoIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

export const SecondSection = () => {
  const MotionBox = motion.create(Box);

  const features = [
    {
      icon: RepeatIcon,
      title: "Envío Rápido",
      subtitle: "Entrega rápida en todo el mundo",
    },
    {
      icon: PhoneIcon,
      title: "Soporte 24/7",
      subtitle: "Asistencia todo el día, todos los días",
    },
    {
      icon: InfoIcon,
      title: "Reembolsos en 30 días",
      subtitle: "Satisfacción garantizada o te devolvemos tu dinero",
    },
  ];

  return (
    <Box py={10}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} maxW="1200px" mx="auto" px={4}>
        {features.map((feature, index) => (
          <MotionBox
            key={index}
            textAlign="center"
            p={5}
            borderWidth={1}
            borderRadius="lg"
            boxShadow="md"
            _hover={{ boxShadow: "xl" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Icon as={feature.icon} w={10} h={10} mb={4} />
            <Text fontWeight="bold" fontSize="xl" mb={2}>
              {feature.title}
            </Text>
            <Text fontSize="md">{feature.subtitle}</Text>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};
