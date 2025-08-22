import React, { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <>
      <nav className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative z-30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            onClick={scrollToTop}
            className="text-xl sm:text-2xl font-bold text-vekt-dark hover:text-vekt-teal transition-colors cursor-pointer"
          >
            Vekt
          </button>

          <div className="hidden md:flex space-x-6 lg:space-x-8 justify-center flex-1">
            <button
              onClick={() => scrollToSection("services")}
              className="text-vekt-dark hover:text-vekt-teal transition-colors text-base lg:text-lg font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-vekt-dark hover:text-vekt-teal transition-colors text-base lg:text-lg font-medium"
            >
              Our Team
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-vekt-dark hover:text-vekt-teal transition-colors text-base lg:text-lg font-medium"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden relative z-50">
            <button
              onClick={toggleMenu}
              className="text-vekt-dark hover:text-vekt-teal transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden">
          <div className="flex flex-col h-full">
            {/* Header with Logo and Close Button */}
            <div className="px-4 sm:px-6 py-4 sm:py-6 border-b border-gray-200 flex justify-between items-center">
              <button
                onClick={scrollToTop}
                className="text-xl sm:text-2xl font-bold text-vekt-dark hover:text-vekt-teal transition-colors cursor-pointer"
              >
                Vekt
              </button>

              <button
                onClick={closeMenu}
                className="text-vekt-dark hover:text-vekt-teal transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col justify-center px-4 sm:px-6">
              <div className="space-y-8">
                <button
                  onClick={() => scrollToSection("services")}
                  className="block text-2xl sm:text-3xl font-bold text-vekt-dark hover:text-vekt-teal transition-colors text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("team")}
                  className="block text-2xl sm:text-3xl font-bold text-vekt-dark hover:text-vekt-teal transition-colors text-left"
                >
                  Our Team
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-2xl sm:text-3xl font-bold text-vekt-dark hover:text-vekt-teal transition-colors text-left"
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="px-4 sm:px-6 py-6 border-t border-gray-200">
              <p className="text-sm text-vekt-dark/60">
                Transform your data into actionable insights
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
