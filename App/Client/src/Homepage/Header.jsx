import React, { useState, useEffect } from "react";

const FeaturedStatements = () => {
  const statements = [
    'Knowledge. Innovation. Excellence - Nurturing talent, inspiring success.',
    'Empowering Minds, Shaping Futures.',
    'Where Learning Meets Leadership.',
    'Recognized for Excellence in Technical Education and Research',
    'Approved by AICTE, Affiliated to MAKAUT, Accredited by NBA'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % statements.length);
    }, 3000); // change statement every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ml-2 text-yellow-600 font-medium text-sm md:text-base mt-1">
      {statements[currentIndex]}
    </div>
  );
};

export default FeaturedStatements;
