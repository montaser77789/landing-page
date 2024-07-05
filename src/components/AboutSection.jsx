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
              <div className="sec-heading text-center md:text-left animate__animated animate__fadeInDown">
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
              <p className="about-text text-gray-700 text-lg mb-6 animate__animated animate__fadeInDown">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                officia molestiae dolorum tempora ut accusamus cupiditate!
                Nesciunt tempora reiciendis libero voluptate!
              </p>
              <div className="info-items-list grid grid-cols-1 md:grid-cols-2 gap-4 animate__animated animate__fadeInDown">
                <div className="info-item flex">
                  <i className="flaticon-medal text-blue-500 text-3xl mr-4"></i>
                  <div className="info-content animate__animated animate__fadeInDown">
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
            <div id="integrated-terminal">
  <div id="jupiter-terminal" className="w-full h-full">
    <div className="flex items-center justify-center w-full h-full">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;family=Poppins&amp;display=swap"
        rel="stylesheet"
      />
      <div className="flex flex-col h-full w-full overflow-auto text-black relative webkit-scrollbar" style={{ zIndex: 50 }}>
        <div className="relative h-full">
          <div className="mt-2 h-7 pl-3 pr-2">
            <div className="w-full flex items-center justify-between">
              <a href="https://jup.ag/swap/So11111111111111111111111111111111111111112-MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5?inAmount="
                target="_blank" rel="noreferrer noopener" className="flex items-center space-x-2">
                <img src="https://jup.ag/svg/jupiter-logo.svg" width="24" height="24" alt="Jupiter aggregator" />
                <span className="font-bold text-sm text-black">Jupiter</span>
              </a>
              <div className="flex space-x-1 items-center">
                <button type="button"
                  className="p-2 h-7 w-7 flex items-center justify-center border rounded-full border-white/10 bg-black/10 text-white/30 fill-current">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_841_4053)">
                      <path
                        d="M11.6466 4.23513V0.706082L10.4111 1.94156C9.3173 0.741165 7.72912 0 6 0C2.6827 0 0 2.6827 0 6C0 9.3173 2.68203 12 6 12C7.69405 12 9.21142 11.2939 10.3059 10.165L9.31797 9.14128C8.50601 10.0234 7.30561 10.5879 6 10.5879C3.45892 10.5879 1.41216 8.5411 1.41216 6.00002C1.41216 3.45894 3.45892 1.41218 6 1.41218C7.34135 1.41218 8.57615 2.01238 9.42317 2.92954L8.11757 4.23515L11.6466 4.23513Z"
                        fill="inherit" />
                    </g>
                    <defs>
                      <clipPath id="clip0_841_4053">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button type="button"
                  className="p-2 h-7 space-x-1 flex items-center justify-center border rounded-2xl border-white/10 bg-black/10 text-white/30 fill-current">
                  <svg width="12" height="12" viewBox="0 0 12 10" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M4.67559 1.39922C4.18425 1.39922 3.78594 1.79753 3.78594 2.28887C3.78594 2.78022 4.18425 3.17853 4.67559 3.17853C5.16694 3.17853 5.56525 2.78022 5.56525 2.28887C5.56525 1.79753 5.16694 1.39922 4.67559 1.39922ZM1.19961 2.88867H2.67329C2.93107 3.75043 3.72998 4.37853 4.67559 4.37853C5.62121 4.37853 6.42012 3.75043 6.67789 2.88867H10.7996C11.131 2.88867 11.3996 2.62004 11.3996 2.28867C11.3996 1.9573 11.131 1.68867 10.7996 1.68867H6.67777C6.41987 0.827121 5.62106 0.199219 4.67559 0.199219C3.73013 0.199219 2.93132 0.827121 2.67342 1.68867H1.19961C0.868239 1.68867 0.599609 1.9573 0.599609 2.28867C0.599609 2.62004 0.868239 2.88867 1.19961 2.88867ZM0.599609 7.58555C0.599609 7.25418 0.868239 6.98555 1.19961 6.98555H5.98367C6.24157 6.124 7.04038 5.49609 7.98585 5.49609C8.93131 5.49609 9.73012 6.124 9.98802 6.98555H10.7995C11.1309 6.98555 11.3995 7.25418 11.3995 7.58555C11.3995 7.91692 11.1309 8.18555 10.7995 8.18555H9.98814C9.73037 9.04731 8.93146 9.6754 7.98585 9.6754C7.04023 9.6754 6.24132 9.04731 5.98355 8.18555H1.19961C0.868239 8.18555 0.599609 7.91692 0.599609 7.58555ZM7.09619 7.58575C7.09619 7.09441 7.4945 6.69609 7.98585 6.69609C8.47719 6.69609 8.8755 7.09441 8.8755 7.58575C8.8755 8.07709 8.47719 8.4754 7.98585 8.4754C7.4945 8.4754 7.09619 8.07709 7.09619 7.58575Z"
                      fill="inherit"  />
                  </svg>
                  <span className="text-xs text-white-30">٠٫٥%</span>
                </button>
                <div className="!bg-transparent css-1lpgtt2">
                  <button type="button" className="py-2 px-3 h-7 flex items-center rounded-2xl text-xs bg-[#191B1F] text-white">
                    <span><span>Connect Wallet</span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
