import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import AppCss from "./App.css";
import Siddhesh_Photo_1 from "./images/Siddhesh_Photo_1.png";
import Skills from "./components/Skiils";

function App() {
  return (
    <div className="App" >
      {/* <h1 className="text-3xl font-bold underline">Header</h1> */}
      <Navbar />
      <Header />
      <Main />
      <div>
      <Footer />
      </div>
      {/* <footer style={{margin: "0px"}} class="bg-light text-center text-lg-start fixed-botom">
                {/* <!-- Copyright --> */}
                {/* <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                         © 2023 Copyright:
                {/* <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a> */}
                         
                {/* <!-- Copyright --> */}
          {/* </footer> */}
      </div>
  );
}

export default App;
