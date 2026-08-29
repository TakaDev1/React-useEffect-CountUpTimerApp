import React, { useEffect, useState } from "react";
import DisplayCount from "./DisplayCount";

const HandleCounter = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const id = setInterval(() => setCount((prev) => prev + 1), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div>
      <DisplayCount count={count} />
    </div>
  );
};

export default HandleCounter;
