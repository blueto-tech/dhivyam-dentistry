import { motion } from 'framer-motion';

interface StarSparkleProps {
  density?: number;
  scale?: number;
  color?: string;
}

export default function StarSparkle({ density = 20, scale = 2, color = 'from-blue-400 to-blue-300' }: StarSparkleProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(density)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-3 h-3 bg-gradient-to-r ${color}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, scale, 0],
            x: Math.random() * 300 - 150,
            y: Math.random() * 100 - 50,
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            clipPath: "path('M12 0L14.59 7.26L22 7.25L16.18 11.75L18.78 19L12 14.48L5.22 19L7.82 11.75L2 7.25L9.41 7.26L12 0Z')",
            filter: 'blur(0.5px)',
          }}
        />
      ))}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`large-${i}`}
          className={`absolute w-5 h-5 bg-gradient-to-r ${color}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            x: Math.random() * 200 - 100,
            y: Math.random() * 100 - 50,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            clipPath: "path('M12 0L14.59 7.26L22 7.25L16.18 11.75L18.78 19L12 14.48L5.22 19L7.82 11.75L2 7.25L9.41 7.26L12 0Z')",
            filter: 'blur(1px)',
          }}
        />
      ))}
    </div>
  );
}