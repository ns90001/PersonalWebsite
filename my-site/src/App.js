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
import Particles from "react-tsparticles";

function App() {

    return (
        <div className="App">
            <Router>
                <Particles
                    className={"background"}
                    options={{
                        fpsLimit: 60,
                        interactivity: {
                            detectsOn: "canvas",
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                bubble: {
                                    distance: 400,
                                    duration: 2,
                                    opacity: 0.8,
                                    size: 40,
                                },
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#000000",
                            },
                            links: {
                                color: "#222222",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 3,
                                straight: true,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    value_area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 2,
                            },
                        },
                        detectRetina: true,
                    }}
                />
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
