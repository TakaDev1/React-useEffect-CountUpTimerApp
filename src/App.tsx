import "./App.css";
import HandleCounter from "./component/HandleCounter";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1>React-useEffect-CountUpTimerApp</h1>
        <HandleCounter />
      </div>
    </>
  );
}

export default App;
