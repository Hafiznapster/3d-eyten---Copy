import { motion } from 'framer-motion';

interface AnimatedItemProps {
  children: React.ReactNode;
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedItem; 