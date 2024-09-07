import Footer from "../Components/Footer";
import IncreamentDecreament from "../Components/IncreamentDecreamentButton";
import NavBar from "../Components/Navbar";

export default function Portfolio() {
  return (

    <>
      <NavBar />
      <IncreamentDecreament />
      <div className="flex-row" style={{ display: "flex", justifyItems: "center", flexWrap:"wrap", justifyContent: "space-around", marginTop: "20px", marginBottom: "20px", alignItems: "center", alignContent: "center" }}>
        <div style={{ height: "150px", width: "250px", backgroundColor: "blue", justifyContent: "center", alignItems: "center", alignContent: "center", display: "flex" }}>
          <h2>
            Working On Amazon clone
          </h2>
        </div>

        <div style={{ height: "150px", width: "250px", backgroundColor: "red", justifyContent: "center", alignItems: "center", display: "flex" }}>
          <h2>
            Working On full stack project
          </h2>
        </div>

        <div style={{ height: "150px", width: "250px", backgroundColor: "black", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <h2>Working On Netflix</h2>
        </div>

      </div>
      <Footer />
    </>
  );
}
