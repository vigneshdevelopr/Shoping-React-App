import "./App.css";
import DrawerAppBar from "./Base/base";
import { StudentDetails } from "./component/component";
import { AgentDetails } from "../src/input/input";
import { FooterDetails } from "./input/footer";

function App() {
  return (
    <div className="App">
      <DrawerAppBar />

      <StudentDetails />

      <AgentDetails />
      <FooterDetails />
    </div>
  );
}

export default App;
