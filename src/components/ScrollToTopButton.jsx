import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // ইউজার ৩০০ পিক্সেল নিচে স্ক্রল করলে বাটনটি দেখাবে
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // ক্লিক করলে স্মুথলি স্ক্রিনের একদম উপরে নিয়ে যাবে
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // এর ফলে স্ক্রলটি লাফ দিয়ে না উঠে স্মুথলি উঠবে
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#10B981] text-white shadow-lg hover:bg-[#059669] transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          title="Scroll to top"
        >
          {/* একটি সুন্দর উপরমুখী অ্যারো (Arrow) আইকন */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;