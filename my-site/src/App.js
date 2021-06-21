import {Home} from "@material-ui/icons";
import './App.css';
import Menu from "./Menu";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";

import Projects from "./Projects";
import Experience from "./Experience";
import Interests from "./Interests";

function App() {

    return (
        <div className="App">
            <Router>
                {/*<Background className={"backgroundCanvas"}/>*/}
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
                <nav className={"navBar"}>
                    <Link to="/home"><Home cursor={"pointer"} fontSize={"large"} className={"homeBtn"}></Home></Link>
                    <Link to="/projects" ><button className={"navItem"} cursor={"pointer"}>Projects</button></Link>
                    <Link to="/experience" ><button className={"navItem"} cursor={"pointer"}>Experience</button></Link>
                    <Link to="/interests" ><button className={"navItem"} cursor={"pointer"}>Interests</button></Link>
                </nav>
                <Switch>
                    <Route exact path="/" >
                        <Redirect to="/home" />
                    </Route>
                    <Route
                        path='/home'
                        render={(props) => (
                            <Menu {...props}/>
                        )}
                    />
                    <Route
                        path='/projects'
                        render={(props) => (
                            <Projects />
                        )}
                    />
                    <Route
                        path='/experience'
                        render={(props) => (
                            <Experience />
                        )}
                    />
                    <Route
                        path='/interests'
                        render={(props) => (
                            <Interests />
                        )}
                    />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
