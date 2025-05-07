import React from "react";
import { FourSquare } from "react-loading-indicators";
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <FourSquare color="#31c4cc" size="large" text="Loading" textColor="" />;
    </div>
  );
};

export default Loading;
