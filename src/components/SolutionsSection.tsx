import React from "react";
import { Filter, Search, TrendingUp, BarChart3, Lightbulb } from "lucide-react";
import dataCleaningImage from "@/assets/data-cleaning.jpg";
import dataAnalyticsImage from "@/assets/data-analytics.jpg";
import predictiveModelingImage from "@/assets/predictive-modeling.jpg";
import dashboardVizImage from "@/assets/dashboard-viz.jpg";
import insightsAnalystImage from "@/assets/insights-analyst.jpg";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Filter,
      title: "Data Cleaning and Preparation",
      description:
        "accurate, consistent, and ready data for meaningful analysis and decision-making.",
      image: dataCleaningImage,
    },
    {
      icon: Search,
      title: "Exploratory Data Analysis",
      description: "uncover patterns, trends, and key insights in your data.",
      image: dataAnalyticsImage,
    },
    {
      icon: TrendingUp,
      title: "Predictive Modeling and Forecasting",
      description:
        "anticipate future trends, outcomes, and behaviors, empowering your business with data-driven foresight.",
      image: predictiveModelingImage,
    },
    {
      icon: BarChart3,
      title: "Dashboarding and Visualization",
      description:
        "transform your complex data into clear, interactive visuals and dashboards.",
      image: dashboardVizImage,
    },
    {
      icon: Lightbulb,
      title: "Analysis and Insights",
      description:
        "turn your data into clear, meaningful information that guides smarter decisions.",
      image: insightsAnalystImage,
    },
  ];

  return (
    <section
      id="services"
      className="w-full min-h-screen flex items-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-vekt-dark mb-8 sm:mb-12 lg:mb-16">
          Our Solutions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            const isLastItem = index === solutions.length - 1;

            return (
              <div
                key={index}
                className={`bg-vekt-light rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow ${
                  isLastItem ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="mb-3 sm:mb-4">
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-vekt-dark" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-vekt-dark mb-2 sm:mb-3">
                  {solution.title}
                </h3>

                <p className="text-sm sm:text-base text-vekt-dark mb-3 sm:mb-4 leading-relaxed">
                  {solution.description}
                </p>

                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
