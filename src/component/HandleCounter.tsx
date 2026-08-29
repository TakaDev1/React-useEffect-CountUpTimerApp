import React, { useEffect, useState } from "react";
import DisplayCount from "./DisplayCount";

const HandleCounter = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // カウント開始処理
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      // クリーンアップ処理
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <DisplayCount count={count} />
    </div>
  );
};

export default HandleCounter;
