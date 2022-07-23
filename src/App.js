import "./App.css";
import DataSection from "./components/DataSection";
import Footer from "./components/Footer";
import HeaderSection from "./components/HeaderSection";

function App() {
  return (
    <>
      <div className="font-inter bg-slate-100">
        <div className="max-w-5xl mx-auto w-11/12">
          <div className="absolute top-3 right-3">
            <h3 className="px-3 py-1 bg-white rounded-lg shadow-sm shadow-slate-500 font-semibold text-sm">
              {new Date().getDate() +
                "-" +
                (new Date().getMonth() + 1) +
                "-" +
                new Date().getFullYear()}
            </h3>
          </div>
          <HeaderSection />
          <DataSection />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
