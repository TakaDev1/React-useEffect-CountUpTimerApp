import React from "react";

const DisplayCount = ({ count }: { count: number }) => {
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

export default DisplayCount;
