import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RoadmapSection = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Duration of animation in milliseconds
        });
      }, []);

    
      const steps = [
        { id: 1, title: 'Step 1', description: 'Description for step 1', animate: 'fade-down-right' },
        { id: 2, title: 'Step 2', description: 'Description for step 2', animate: 'fade-down-left' },
        { id: 3, title: 'Step 3', description: 'Description for step 3', animate: 'zoom-in' },
        { id: 4, title: 'Step 4', description: 'Description for step 4', animate: 'zoom-in-up' },
      ];
  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Our Roadmap</h1>
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col items-center">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              data-aos={step.animate}
              className={` flex flex-col items-center mb-10  ${step.animate} ` }
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full text-2xl font-bold mb-4">
                {index + 1}
              </div>
              <div className="text-center ">
                <h2 className="text-xl font-semibold">{step.title}</h2>
                <p className="text-gray-700">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="w-1 h-16 bg-blue-500"></div>
              )}
            </div>
          ))}
          <div 
          data-aos="fade-up"
            className="flex items-center justify-center w-16 h-16 bg-red-500 text-white rounded-full text-2xl font-bold mt-4"
          >
            🚀
          </div>
        </div>
      </div>
    </div>
  );
};




export default RoadmapSection;
