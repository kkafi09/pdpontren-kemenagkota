import "./App.css";
import DataSection from "./components/DataSection";
import HeaderSection from "./components/HeaderSection";

function App() {
  return (
    <>
      <div className="font-inter bg:white">
        <div className="max-w-5xl mx-auto w-11/12">
          <HeaderSection />
          <DataSection />
        </div>
      </div>
    </>
  );
}

export default App;
