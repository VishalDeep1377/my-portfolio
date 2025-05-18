'use client';
import { motion } from 'framer-motion';

// Stagger parent container
export const StaggerAnimation = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
    variants={{
      visible: { transition: { staggerChildren: 0.1 } },
      hidden: {}
    }}
  >
    {children}
  </motion.div>
);

// Stagger child items
export const StaggerItem = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={{
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: -20 }
    }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);