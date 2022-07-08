import "./App.css";
import DataSection from "./components/DataSection";
import Footer from "./components/Footer";
import HeaderSection from "./components/HeaderSection";

function App() {
  return (
    <>
      <div className="font-inter bg-slate-100">
        <div className="max-w-5xl mx-auto w-11/12">
          <HeaderSection />
          <DataSection />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
