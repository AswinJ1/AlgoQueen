import React, { useState, useEffect } from "react";
import { TrendingUp, X } from "lucide-react";
import clsx from "clsx"; // Install using: npm install clsx

const TrendingBanner = ({
  message = " Join our telegram channel , ask your doubts & get support from our experts.",
  link = "https://t.me/algoqueen2023",
  className,
  autoDismiss = false,
  dismissTimeout = 5000,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleDismiss = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsExiting(false); // Ensure reusability
    }, 400);
  };

  useEffect(() => {
    const showTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    let dismissTimer = null;
    if (autoDismiss) {
      dismissTimer = setTimeout(() => {
        handleDismiss();
      }, dismissTimeout);
    }

    return () => {
      clearTimeout(showTimeout);
      if (dismissTimer) clearTimeout(dismissTimer);
    };
  }, [autoDismiss, dismissTimeout]);

  if (!isVisible) return null;

  return (
    <div
  className={clsx(
    "hidden lg:block relative w-full z-10 transition-all duration-400",
    isExiting ? "opacity-0 translate-y-[-10px] transition-transform duration-400" : "opacity-100 translate-y-0",
    className
  )}
>

      <div className="bg-white mx-auto max-w-screen-xl px-4 py-3 shadow-md border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-1">
            <span className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-2 text-primary animate-pulse-subtle" />
              <span className="text-xs sm:text-sm font-medium">Need Help?</span>
            </span>
            <div className="ml-3 h-4 w-px bg-gray-300" aria-hidden="true" />
            <p className="ml-3 truncate text-xs sm:text-sm font-medium">
              <a href={link} target="blank" className="hover:underline transition-all duration-200 ease-in-out">
                {message}
              </a>
            </p>
          </div>
          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={handleDismiss}
              className="inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 transition-all duration-200"
            >
              <span className="sr-only">Dismiss</span>
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingBanner;
