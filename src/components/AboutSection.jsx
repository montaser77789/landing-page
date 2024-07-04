const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-16 " id="about">
      <div className="container mx-auto px-5 ">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div
            className="md:w-1/2 order-2 md:order-1 mt-10 md:mt-0 animate__animated animate__fadeInUp"
            data-wow-delay="0.6s"
          >
            <div className="text-area">
              <div className="sec-heading text-center md:text-left">
                <span
                  className="pre-title text-teal-500 text-xl block mb-2 animate__animated animate__fadeInUp"
                  data-wow-delay=".2s"
                >
                  About Us
                </span>
                <h2
                  className="title text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate__animated animate__fadeInUp"
                  data-wow-delay=".4s"
                >
                  <span className="hollow-text">Trusted</span> by worldwide
                  clients since
                  <span className="featured-text text-blue-500"> 1980</span>.
                </h2>
              </div>
              <p className="about-text text-gray-700 text-lg mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                officia molestiae dolorum tempora ut accusamus cupiditate!
                Nesciunt tempora reiciendis libero voluptate!
              </p>
              <div className="info-items-list grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="info-item flex">
                  <i className="flaticon-medal text-blue-500 text-3xl mr-4"></i>
                  <div className="info-content">
                    <h5 className="info-title text-xl font-semibold">
                      First on Field
                    </h5>
                    <p className="info-text text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aspernatur, iste
                    </p>
                  </div>
                </div>
                <div className="info-item flex">
                  <i className="flaticon-game-console text-blue-500 text-3xl mr-4"></i>
                  <div className="info-content">
                    <h5 className="info-title text-xl font-semibold">
                      Easy to Reach
                    </h5>
                    <p className="info-text text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aspernatur, iste
                    </p>
                  </div>
                </div>
                <div className="info-item flex">
                  <i className="flaticon-map text-blue-500 text-3xl mr-4"></i>
                  <div className="info-content">
                    <h5 className="info-title text-xl font-semibold">
                      Worldwide Services
                    </h5>
                    <p className="info-text text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aspernatur, iste
                    </p>
                  </div>
                </div>
                <div className="info-item flex">
                  <i className="flaticon-technical-support-1 text-blue-500 text-3xl mr-4"></i>
                  <div className="info-content">
                    <h5 className="info-title text-xl font-semibold">
                      24/7 Support
                    </h5>
                    <p className="info-text text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aspernatur, iste
                    </p>
                  </div>
                </div>
              </div>
              <div className="cta-area mt-8 flex items-center">
                <a
                  className="btn-solid bg-[#00e8c1] hover:bg-[#62efd7] text-white  py-2 px-6 rounded-full  transition duration-300 mr-4 animate__animated animate__fadeInLeft"
                  href="about-us.html"
                >
                  Get in Touch
                </a>
                <div className="signature flex items-center">
                  <div className="signature-img bg-[#00e8c1] w-10 h-10 rounded-full"></div>
                  <div className="signature-name text-gray-800 ml-3">
                    CEO & Founder
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="md:w-1/2 order-1 md:order-2 animate__animated animate__fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="img-area" data-tilt>
              <img
                className="about-img w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition duration-500"
                loading="lazy"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmWSR-bANXE5sNDP3dyPJrFlCvku1OQ-gyTg&s"
                alt="Our vision"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
