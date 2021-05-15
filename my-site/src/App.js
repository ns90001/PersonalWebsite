import {Home} from "@material-ui/icons";
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <nav className={"navBar"}>
            <Home cursor={"pointer"} fontSize={"large"} className={"homeBtn"}></Home>
            <p className={"navItem"}>Projects</p>
            <p className={"navItem"}>Experience</p>
            <p className={"navItem"}>Hobbies</p>
        </nav>
      <h1 className={"title"}>Naveen Sharma</h1>
    </div>
  );
}

export default App;
