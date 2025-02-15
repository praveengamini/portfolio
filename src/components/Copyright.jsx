import React from 'react';

const Copyright = () => {
  return (
    <div className="text-center bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4">
      &copy; {new Date().getFullYear()} Praveen Gamini. All rights reserved.
    </div>
  );
};

export default Copyright;