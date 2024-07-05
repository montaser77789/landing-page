// src/components/Roadmap.js
import { motion } from 'framer-motion';

const RoadmapSection = () => {
  const steps = [
    { id: 1, title: 'Step 1', description: 'Description for step 1' },
    { id: 2, title: 'Step 2', description: 'Description for step 2' },
    { id: 3, title: 'Step 3', description: 'Description for step 3' },
    { id: 4, title: 'Step 4', description: 'Description for step 4' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Our Roadmap</h1>
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative flex flex-col items-center">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id} 
              className="flex flex-col items-center mb-10"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full text-2xl font-bold mb-4">
                {index + 1}
              </div>
              <div className="text-center">
                <h2 className="text-xl font-semibold">{step.title}</h2>
                <p className="text-gray-700">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="w-1 h-16 bg-blue-500"></div>
              )}
            </motion.div>
          ))}
          <motion.div 
            className="flex items-center justify-center w-16 h-16 bg-red-500 text-white rounded-full text-2xl font-bold mt-4"
            variants={itemVariants}
          >
            🚀
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};




export default RoadmapSection;
