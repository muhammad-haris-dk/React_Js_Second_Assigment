import { Navbar_Component } from "./Components/Navbar_Component";
import "./App.css";
import { Images_Component } from "./Components/SliderComponent";
import { Section_02_Components } from "./Components/Section_02_Components";
import { Section_01_Component } from "./Components/Section_01_Component";
import { Section_03_Components } from "./Components/Section_03_Components";
import { Section_04_Component } from "./Components/Section_04_Component";
import { Section_05_Component } from "./Components/Section_05_Component";
import { Section_06_Component } from "./Components/Section_06_Component";
import { Footer_Section_Component } from "./Components/Footer_Section_Component";


function App() {
  return (
    <div>
      <Navbar_Component />
      <Images_Component />
      <Section_01_Component />
      <Section_02_Components />
      <Section_03_Components />
      <Section_04_Component />
      <Section_05_Component />
      <Section_06_Component />
      <Footer_Section_Component />
    </div>
  );
}

export default App;
