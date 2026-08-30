import React from "react";

const DisplayCount = ({ count }: { count: number }) => {
  return (
    <div className="bg-green-600 text-white px-20 py-5">
      <p>Count: {count}</p>
    </div>
  );
};

export default DisplayCount;
