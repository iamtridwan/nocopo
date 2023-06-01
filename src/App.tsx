import Access from "./components/Access";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="bg-[#F8F9FA] relative pb-10">
      <header className="px-6 md:px-16 pt-24 mb-10">
        <Navigation />
        <Header />
        <div
          className="mx-auto rounded-xl w-[95%] lg:w-[80%] -mt-12 bg-white py-3 px-2 md:py-10 md:px-8 flex items-center justify-between"
          style={boxStyle}
        >
          <div className="flex items-center">
            <div className="flex items-center justify-center flex-col md:flex-row md:mr-2 lg:mr-5">
              <h1 className="text-[#03012C] text-sm md:text-2xl font-semibold md:mr-2 lg:mr-3">
                2943
              </h1>
              <p className="font-light w-12 md:w-24 text-[10px] md:text-sm">
                Planned Projects
              </p>
            </div>
            <svg
              width="12"
              height="29"
              viewBox="0 0 17 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.22265"
                y1="10.584"
                x2="16.2227"
                y2="0.583975"
                stroke="#084116"
              />
              <line
                x1="1.22265"
                y1="17.584"
                x2="16.2227"
                y2="7.58398"
                stroke="#084116"
              />
              <line
                x1="1.22265"
                y1="24.584"
                x2="16.2227"
                y2="14.584"
                stroke="#084116"
              />
              <line
                x1="1.22265"
                y1="31.584"
                x2="16.2227"
                y2="21.584"
                stroke="#084116"
              />
              <line
                x1="1.22265"
                y1="38.584"
                x2="16.2227"
                y2="28.584"
                stroke="#084116"
              />
            </svg>
          </div>
          <div className="flex items-center">
            <div className="items-center justify-center flex-col md:flex-row flex md:mr-2 lg:mr-5">
              <h1 className="text-[#03012C] text-sm md:text-2xl font-semibold md:mr-2 lg:mr-3">
                345
              </h1>
              <p className="font-light w-12 md:w-24 text-[10px] md:text-sm">
                Awarded Projects
              </p>
            </div>
            <svg
              width="12"
              height="29"
              viewBox="0 0 17 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.22265"
                y1="10.584"
                x2="16.2227"
                y2="0.583975"
                stroke="#084116"
              />
              <line
                x1="1.22265"
                y1="17.584"
                x2="16.2227"
                y2="7.58398"
                stroke="#084116"
              />
              <line
                x1="1.22265"
                y1="24.584"
                x2="16.2227"
                y2="14.584"
                stroke="#084116"
              />
              <line
                x1="1.22265"
                y1="31.584"
                x2="16.2227"
                y2="21.584"
                stroke="#084116"
              />
              <line
                x1="1.22265"
                y1="38.584"
                x2="16.2227"
                y2="28.584"
                stroke="#084116"
              />
            </svg>
          </div>
          <div className="flex items-center">
            <div className="flex items-center justify-center flex-col md:flex-row md:mr-2 lg:mr-5">
              <h1 className="text-[#03012C] text-sm md:text-2xl font-semibold md:mr-2 lg:mr-3">
                #1M+
              </h1>
              <p className="font-light text-[10px] w-12 md:w-24 md:text-sm">
                Total Sum Projects
              </p>
            </div>
            <svg
              width="12"
              height="29"
              viewBox="0 0 17 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.22265"
                y1="10.584"
                x2="16.2227"
                y2="0.583975"
                stroke="#084116"
              />
              <line
                x1="1.22265"
                y1="17.584"
                x2="16.2227"
                y2="7.58398"
                stroke="#084116"
              />
              <line
                x1="1.22265"
                y1="24.584"
                x2="16.2227"
                y2="14.584"
                stroke="#084116"
              />
              <line
                x1="1.22265"
                y1="31.584"
                x2="16.2227"
                y2="21.584"
                stroke="#084116"
              />
              <line
                x1="1.22265"
                y1="38.584"
                x2="16.2227"
                y2="28.584"
                stroke="#084116"
              />
            </svg>
          </div>
          <div className="flex items-center">
            <div className="items-center justify-center flex-col md:flex-row flex md:mr-2 lg:mr-5">
              <h1 className="text-[#03012C] text-sm md:text-2xl font-semibold md:mr-2 lg:mr-3">
                2943
              </h1>
              <p className="font-light md:w-24 text-[10px] w-12 md:text-sm">
                Published Projects
              </p>
            </div>
            <svg
              width="12"
              height="29"
              viewBox="0 0 17 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.22265"
                y1="10.584"
                x2="16.2227"
                y2="0.583975"
                stroke="#084116"
              />
              <line
                x1="1.22265"
                y1="17.584"
                x2="16.2227"
                y2="7.58398"
                stroke="#084116"
              />
              <line
                x1="1.22265"
                y1="24.584"
                x2="16.2227"
                y2="14.584"
                stroke="#084116"
              />
              <line
                x1="1.22265"
                y1="31.584"
                x2="16.2227"
                y2="21.584"
                stroke="#084116"
              />
              <line
                x1="1.22265"
                y1="38.584"
                x2="16.2227"
                y2="28.584"
                stroke="#084116"
              />
            </svg>
          </div>
        </div>
      </header>
      <Stats />
      <Access />
      <Footer />
    </div>
  );
}

const boxStyle = {
  boxShadow: "0px 6px 11px rgba(0, 0, 0, 0.1)",
};

export default App;
