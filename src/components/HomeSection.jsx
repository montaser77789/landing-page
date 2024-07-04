
const HomeSection = () => {
  return (
    <section className="container  ">
      <div className="container bg-gradient-to-r from-blue-900 to-blue-700 min-h-screen min-w-full mx-auto flex flex-col md:flex-row items-center md:justify-between px-3 pt-16">
        <div className="md:w-1/2 mt-6 md:mt-0 text-center block md:hidden">
          <div className="animate__animated animate__fadeIn">
            <img
              src="https://huggingface.co/datasets/huggingfacejs/tasks/resolve/main/image-classification/image-classification-input.jpeg"
              alt="Description"
              className="mx-auto rounded-full w-34 md:w-[70%] shadow-lg transition-transform duration-500 transform hover:scale-105"
            />
          </div>
        </div>

        <div className="md:w-1/2 text-center md:text-left mt-7">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate__animated animate__fadeInDown">Welcome to Our Website</h1>
          <h2 className="text-lg md:text-xl text-gray-200 mb-6 animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugiat labore aliquam ullam dignissimos, rem eligendi veniam dolores eveniet et?</h2>
          <div className="flex justify-center md:justify-start">
            <button className="bg-[#00e8c1] hover:bg-[#62efd7] text-white font-bold py-2 px-4 rounded mr-4 animate__animated animate__fadeInLeft">
              Learn More
            </button>
            <button className="bg-[#00e8c1] hover:bg-[#62efd7] text-white font-bold py-2 px-4 rounded animate__animated animate__fadeInRight">
              Get Started
            </button>
          </div>
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0 text-center hidden md:block">
          <div className="animate__animated animate__fadeIn">
            <img
              src="https://huggingface.co/datasets/huggingfacejs/tasks/resolve/main/image-classification/image-classification-input.jpeg"
              alt="Description"
              className="mx-auto rounded-full w-34 h-34 md:w-[70%] md:h-[70%] shadow-lg transition-transform duration-500 transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
