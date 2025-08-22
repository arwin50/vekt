import React from "react";

const TeamSection = () => {
  return (
    <section
      id="team"
      className="w-full min-h-screen flex items-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-vekt-light"
    >
      <div className="max-w-7xl mx-auto text-center w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-vekt-dark mb-6 sm:mb-8">
          Our Team
        </h2>

        <p className="text-lg sm:text-xl text-vekt-dark max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12">
          We're a passionate team of data scientists, analysts, and engineers
          dedicated to transforming complex data into actionable insights. With
          expertise spanning machine learning, statistical analysis, and data
          visualization, we help businesses unlock the full potential of their
          data.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white rounded-lg p-4 sm:p-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-vekt-teal rounded-full mx-auto mb-3 sm:mb-4"></div>
            <h3 className="text-lg sm:text-xl font-bold text-vekt-dark mb-2">
              Data Scientists
            </h3>
            <p className="text-sm sm:text-base text-vekt-dark">
              Expert in machine learning and predictive modeling
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 sm:p-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-vekt-coral rounded-full mx-auto mb-3 sm:mb-4"></div>
            <h3 className="text-lg sm:text-xl font-bold text-vekt-dark mb-2">
              Data Analysts
            </h3>
            <p className="text-sm sm:text-base text-vekt-dark">
              Specialized in statistical analysis and insights
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-vekt-dark rounded-full mx-auto mb-3 sm:mb-4"></div>
            <h3 className="text-lg sm:text-xl font-bold text-vekt-dark mb-2">
              Data Engineers
            </h3>
            <p className="text-sm sm:text-base text-vekt-dark">
              Focused on data infrastructure and pipelines
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
