import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <div className="flex justify-center items-center h-[80vh] w-full">
      <p className="text-red-500">Error: {error}</p>
    </div>
  );
};

export default ErrorMessage;
