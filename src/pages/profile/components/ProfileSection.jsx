import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

export const ProfileSection = () => {
  return (
    <MotionBox
      p={10}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Text fontSize="4xl" mb={4}>Profile Page</Text>
    </MotionBox>
  );
};
