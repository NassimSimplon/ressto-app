import "./App.css";
import Home from "./pages/Home";
import Footer from "./shared/footer";
import { BrowserRouter  ,  Route } from "react-router-dom";
import Plats from "./pages/plat";
import ContactSection from "./component/contactSection";
import Dashborad from "./Dashboard/pages/dashborad";
import CommandPage from "./pages/commandPage";

function App() {
  return (
    <div id="App">
      <BrowserRouter>
  
        <Route exact path="/"  >
          <Home />
        </Route>
        <Route path="/plat">
          <Plats />
        </Route>
        <Route path="/contact">
          <ContactSection />
        </Route>
        <Route path="/command">
          <CommandPage />
        </Route>
        <Route path="/dashbord">
        <Dashborad />
        </Route>
 
      </BrowserRouter>
      <br />
      <hr />

      <br />
      <Footer />
 
    </div>
  );
}

export default App;
