import React, { useEffect } from 'react';

interface SnackbarProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const Snackbar: React.FC<SnackbarProps> = ({ message, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Snackbar disappears after 3 seconds

      return () => clearTimeout(timer); // Cleanup the timer on unmount or state change
    }
  }, [isOpen, onClose]);

  return (
    isOpen && (
      <div
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg"
        style={{ zIndex: 1000 }}
      >
        {message}
      </div>
    )
  );
};

export default Snackbar;
