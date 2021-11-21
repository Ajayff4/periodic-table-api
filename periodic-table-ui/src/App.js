import Header from "./components/Header";
import MainTable from "./components/MainTable";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <h1>Periodic Table App</h1>
      <Header />
      <div style={{display: "flex", flexDirection: "row"}}>
        <SideBar />
        <MainTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
